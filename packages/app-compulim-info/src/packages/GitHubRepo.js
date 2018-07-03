import React from 'react';

import GitHubNumIssues from './GitHubNumIssues';

export default props =>
  <React.Fragment>
    <a
      href={ `https://github.com/${ encodeURI(props.owner) }/${ encodeURI(props.name) }` }
      target="_blank"
    >
      { props.name }
    </a>
    &nbsp;<GitHubNumIssues
      owner={ props.owner }
      name={ props.name }
    >
      { ({ numIssues }) => `${ (numIssues || 'No') } issues` }
    </GitHubNumIssues>
  </React.Fragment>
