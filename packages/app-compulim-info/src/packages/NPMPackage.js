import React from 'react';

import GitHubNumIssues from './GitHubNumIssues';

export default props =>
  <React.Fragment>
    <a
      href={ `https://npmjs.com/package/${ encodeURI(props.name) }` }
      target="_blank"
    >
      { props.name }
    </a>
    {
      <span>
        &nbsp;<GitHubNumIssues
          owner={ props.repoOwner || 'compulim' }
          name={ props.repoName || props.name }
        >
          { ({ numIssues }) => `${ numIssues || 'No' } issues` }
        </GitHubNumIssues>
      </span>
    }
  </React.Fragment>
