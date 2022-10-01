import React from 'react';

import Experience from './Experience';

const Project = ({ children, from, subTitle, title, to }) => {
  if (/^https?:\/\//.test(subTitle)) {
    subTitle = (
      <a href={subTitle} rel="noopener noreferrer" target="_blank">
        {subTitle}
      </a>
    );
  }

  return (
    <Experience from={from} to={to} organization={title} post={subTitle} verticalDate={true}>
      {children}
    </Experience>
  );
};

export default Project;
