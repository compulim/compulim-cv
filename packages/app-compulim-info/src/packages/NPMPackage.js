import React from 'react';

import GitHubNumIssues from './GitHubNumIssues';
import GitHubNumStars from './GitHubNumStars';

export default props => (
  <React.Fragment>
    <a href={`https://npmjs.com/package/${encodeURI(props.name)}`} target="_blank">
      {props.name}
    </a>
    {
      <span>
        &nbsp;
        <GitHubNumIssues owner={props.repoOwner || 'compulim'} name={props.repoName || props.name}>
          {({ numIssues }) => `${numIssues || 'No'} issues`}
        </GitHubNumIssues>
        &nbsp;
        <GitHubNumStars owner={props.repoOwner || 'compulim'} name={props.repoName || props.name}>
          {({ numStars }) => `${numStars || 'No'} stars`}
        </GitHubNumStars>
      </span>
    }
  </React.Fragment>
);
