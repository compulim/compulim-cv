import { css } from '@emotion/css';
import classNames from 'classnames';
import React from 'react';

import Experience from './Experience';

const STYLE = css({
  '&.project__link': {
    color: 'Black',
    textDecoration: 'none',

    '&:hover': {
      textDecoration: 'underline'
    }
  }
});

const Project = ({ children, from, subTitle, title, to }) => {
  if (/^https?:\/\//.test(subTitle)) {
    subTitle = (
      <a className={classNames('project__link', STYLE)} href={subTitle} rel="noopener noreferrer" target="_blank">
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
