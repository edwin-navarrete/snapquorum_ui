import React, { useContext } from 'react';
import IssueContext from './IssueContext'

function SubjectView() {
  const issue = useContext(IssueContext);
  return (
    <div className="issue-subject" >
      <div className={`message theirs`}>
        <div className="text"><i class="far fa-comments"></i>{issue.subject}</div>
      </div>
    </div>
  );
}

export default SubjectView;
