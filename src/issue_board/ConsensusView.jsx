import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import getAxiosInstance from './axiosConfig';
import ConsensusListView from './ConsensusListView'

function ConsensusView() {
  const { id } = useParams();
  const [issue, setIssue] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
        try {
            var response = await getAxiosInstance().get(`/issues/${id}`);
            if (response.status === 200 && response.data ) {
                setIssue( response.data );
            }          
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();
  }, [id]);

  return (
    < div className="chat" >
      <div className="issue-subject" >
        <div className={`message theirs`}>
          <div className="text"><h4><i className="far fa-comments"></i>{issue.subject}</h4></div>
          <div className="flex-wrapper">
            <div className="single-chart">
              <svg viewBox="0 0 36 36" className={`circular-chart`}>
                <path className="circle-bg"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                <path className="circle"
                  stroke-dasharray={`${issue.participation * 100}, 100`}
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                <text x="18" y="22" className="percentage">{Math.round(issue.participation * 100)}%</text>
              </svg>
            </div>
          </div>  
        </div>
      </div>
      <ConsensusListView />
    </div >
  );
}

export default ConsensusView;

