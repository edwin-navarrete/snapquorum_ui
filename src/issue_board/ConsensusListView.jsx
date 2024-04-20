import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getAxiosInstance from './axiosConfig';

function ConsensusListView({ messages }) {
  const { id } = useParams();
  const [consensus, setConsensus] = useState([]);
  const [curTime, setCurTimer] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await getAxiosInstance().get(`/issues/${id}/consensus`);
            if (response.status === 200 && response.data.subject ) {
                console.log( 'CONSENSUS:' + response.data.consensus)
                setConsensus( response.data.consensus );
            }            
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurTimer((prevIndex) => (prevIndex + 1));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div className="message-list">
      { consensus.map((group, idx) => (
        <div key={idx} className={`message group grp${idx}`}>
          <div className="flex-wrapper">
            <div className="single-chart">
              <svg viewBox="0 0 36 36" className={`circular-chart grp${idx}`}>
                <path className="circle-bg"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                <path className="circle"
                  strokeDasharray={`${group.share * 100}, 100`}
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                <text x="18" y="22" className="percentage">{Math.round(group.share * 100)}%</text>
              </svg>
              <span>Acum:{Math.round(group.agg * 100)}%</span>
            </div>
          </div>        
          <div className="text">{group.top[Math.trunc((curTime+idx*4)/7) % group.top.length ].comment}</div>
          <span>{group.top[Math.trunc((curTime+idx*4)/7) % group.top.length ].participant}</span>
        </div>
      ))}
    </div>
  );
}

export default ConsensusListView;
