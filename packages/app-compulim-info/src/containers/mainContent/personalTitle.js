import { css } from '@emotion/css';
import React from 'react';

import * as Styles from '../../styles';

const BOX = css({
  marginBottom: 40,

  '& h1': {
    fontFamily: Styles.TITLE_FONT_FAMILY,
    fontSize: 60,
    letterSpacing: '.05em',
    marginBottom: 0,
    marginTop: 40,
    textTransform: 'uppercase'
  }
});

const PersonalTitle = ({ children, name }) => {
  return (
    <div className={BOX}>
      <h1>{name}</h1>
      <div className="summary">{children}</div>
    </div>
  );
};

export default PersonalTitle;
