import { css } from '@emotion/css';
import classNames from 'classnames';
import React from 'react';

const STYLE = css({
  '&.property': {
    '--icon-size': '30px',
    display: 'flex',
    marginBottom: 5,
    paddingTop: 20,
    pageBreakInside: 'avoid'
  },

  '.property__icon': {
    fontSize: 'var(--icon-size)',
    marginRight: 10,
    width: 'var(--icon-size)'
  },

  '.property__content-box': {
    flex: 1
  },

  '.property__title': {
    fontWeight: 500
  },

  '.property__content': {
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
});

const Property = ({ children, icon, title }) => {
  return (
    <div className={classNames('property', STYLE)}>
      <div className="property__icon">{!!icon && <i className={`ms-Icon ms-Icon--${icon}`} aria-hidden="true" />}</div>
      <div className="property__content-box">
        <div className="property__title">{title}</div>
        <div className="property__content">{children}</div>
      </div>
    </div>
  );
};

export default Property;
