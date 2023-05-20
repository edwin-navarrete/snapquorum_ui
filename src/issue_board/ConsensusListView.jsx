import React, { useContext } from 'react';
import IssueContext from './IssueContext'


function ConsensusListView({ messages }) {
  const issue = useContext(IssueContext);
  return (
    <div className="message-list">
      {issue.consensus.map((group, idx) => (
        <div className={`message grp${idx}`}>
          <div class="flex-wrapper">
            <div class="single-chart">
              <svg viewBox="0 0 36 36" class={`circular-chart grp${idx}`}>
                <path class="circle-bg"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                <path class="circle"
                  stroke-dasharray={`${group.share * 100}, 100`}
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                <text x="18" y="22" class="percentage">{group.share * 100}%</text>
              </svg>
            </div>
          </div>          
          <div className="text">{group.top[0]}</div>
        </div>
      ))}
    </div>
  );
}

export default ConsensusListView;

/*
      {issue.consensus.map(group => (
        <div className={'message mine'}>
          <div className="text">{group.top[0]}</div>
          <div className="timestamp">{group.share * 100}%</div>
        </div>
      ))}
 */