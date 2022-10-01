import { css } from '@emotion/css';
import React from 'react';

const ICON_SIZE = 30;

const BOX = css({
  display: 'flex',
  marginBottom: 5,
  paddingTop: 20,
  pageBreakInside: 'avoid',

  '& > .icon': {
    fontSize: ICON_SIZE,
    marginRight: 10,
    width: ICON_SIZE
  },

  '& > .content-box': {
    flex: 1,

    '& > .title': {
      fontWeight: 500
    },

    '& > .content': {
      color: '#CCC',
      fontWeight: 200,

      '& a': {
        color: '#CCC',
        textDecoration: 'none',

        '&:hover': {
          textDecoration: 'underline'
        }
      }
    }
  }
});

const Property = ({ children, icon, title }) => {
  return (
    <div className={BOX}>
      <div className="icon">{!!icon && <i className={`ms-Icon ms-Icon--${icon}`} aria-hidden="true" />}</div>
      <div className="content-box">
        <div className="title">{title}</div>
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default Property;
