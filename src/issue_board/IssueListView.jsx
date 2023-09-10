import React, { useEffect, useState } from 'react';
import getAxiosInstance from './axiosConfig';

function IssueItem({ issue }) {
  return (
    <div className="item">
      <span className="item-text">{issue.subject}</span><span>{Math.round(issue.participation * 100)}%/{issue.population}</span>
      <a href={`/issue/${issue.id}/commentshare`}
        className="item-button"><i class="fas fa-share-alt"></i></a>
      {issue.participation > 0.05 && <a disabled href={`/issue/${issue.id}/consensus`}
        className="item-button"><i class="far fa-comments"></i></a>}
    </div>
  );
}

function IssueListView() {
  const [items, setItems] = useState([]);
  const [newSubject, setNewSubject] = useState('');
  const [newPopulation, setNewPopulation] = useState('10');

  const handleLoginRedirect = () => {
    const redirectUrl = window.location.pathname;
    window.location.href = `/login?redirect=${encodeURIComponent(redirectUrl)}`;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAxiosInstance().get(`/issues`);
        if (response.status === 200 && response.data.length > 0) {
          setItems(response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        debugger
        if (error.response.status === 403){
          handleLoginRedirect();
        }
      }
    };

    fetchData();
  }, []);

  const addIssue = () => {
    if (newSubject) {
      getAxiosInstance().post(`/issues`, {
        "subject": newSubject,
        "population": parseInt(newPopulation)
      }).then(response => {
        console.log(response.data);
        debugger;
        // Handle the response as needed
        setItems(prevItems => [...prevItems, response.data]);
        setNewSubject('');
      })
        .catch(error => {
          console.error(error);
          if (error.response.status === 401){
              debugger;
              handleLoginRedirect();
          }
        });

    }
  };

  const handlePopulationChange = (event) => {
    const inputValue = event.target.value;
    setNewPopulation(inputValue.replace(/[^0-9]/g, ''));
  };

  return (
    <div class="issue-list">
      <div class="container">
        <h1><i class="fas fa-comments"></i>Asuntos</h1>

        <div className="item-list">
          {items.map((item, index) => (
            <IssueItem key={item.id} issue={item} />
          ))}
        </div>

        <div className="toolbar">
          <input className="new-subject"
            type="text"
            placeholder='Describe el asunto aquí...'
            required
            value={newSubject}
            onChange={e => setNewSubject(e.target.value)}
          />
          <div class="population-ico">
            <i class="fas fa-users"></i>
            <i class="fas fa-caret-right"></i>
          </div>
          <input
            class="new-population"
            type="text"
            placeholder='#'
            required
            value={newPopulation}
            onChange={handlePopulationChange}
          />

          <button disabled={!newSubject || !newPopulation} onClick={addIssue}><i class="fas fa-plus"></i></button>
        </div>
      </div>
    </div>
  );
}

export default IssueListView;

