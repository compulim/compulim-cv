import { css } from '@emotion/css';
import React from 'react';

const STYLE = css({
  marginBottom: '1em',
  pageBreakInside: 'avoid',

  '& > h1': {
    fontSize: 16,
    fontWeight: 600,
    marginBottom: '1em',
    marginTop: 0,

    '&:not(:first-child)': {
      marginTop: '.8em'
    }
  }
});

const SkillColumn = ({ children, title }) => {
  return (
    <div className={STYLE}>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default SkillColumn;
