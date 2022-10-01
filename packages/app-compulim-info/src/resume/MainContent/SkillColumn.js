import { css } from '@emotion/css';
import classNames from 'classnames';
import React from 'react';

const STYLE = css({
  '&.skill-column': {
    marginBottom: '1em',
    pageBreakInside: 'avoid'
  },

  '.skill-column__title': {
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
    <div className={classNames('skill-column', STYLE)}>
      <h1 className="skill-column__title">{title}</h1>
      {children}
    </div>
  );
};

export default SkillColumn;
