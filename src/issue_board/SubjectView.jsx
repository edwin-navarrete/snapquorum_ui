import React, { useContext } from 'react';
import IssueContext from './IssueContext'

function SubjectView() {
  const issue = useContext(IssueContext);
  return (
    <div className="issue-subject" >
      <div className={`message theirs`}>
        <div className="text"><h4><i class="far fa-comments"></i>{issue.subject}</h4></div>
      </div>
    </div>
  );
}

export default SubjectView;
