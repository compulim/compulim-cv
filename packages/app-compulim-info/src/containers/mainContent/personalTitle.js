import { css } from '@emotion/css';
import classNames from 'classnames';
import React from 'react';

import { TITLE_FONT_FAMILY } from '../../styles';

const STYLE = css({
  '&.personal-title': {
    marginBottom: 40
  },

  '.personal-title__name': {
    fontFamily: TITLE_FONT_FAMILY,
    fontSize: 60,
    letterSpacing: '.05em',
    marginBottom: 0,
    marginTop: 40,
    textTransform: 'uppercase'
  }
});

const PersonalTitle = ({ children, name }) => {
  return (
    <div className={classNames('personal-title', STYLE)}>
      <h1 className="personal-title__name">{name}</h1>
      <div className="personal_title__summary">{children}</div>
    </div>
  );
};

export default PersonalTitle;
