import { css } from '@emotion/css';
import classNames from 'classnames';
import React from 'react';

import FluentIcon from '../common/FluentIcon';

const STYLE = css({
  '&.section': {
    '--icon-size': '40px',
    marginBottom: 20,
    paddingTop: 20
  },

  '.section__title': {
    alignItems: 'center',
    display: 'flex',
    fontFamily: 'var(--section-title-font-family)',
    fontSize: 24,
    fontWeight: 600,
    letterSpacing: 5
  },

  '.section__icon': {
    backgroundColor: 'White',
    border: '2px Solid Black',
    borderRadius: 'var(--icon-size)',
    display: 'flex',
    height: 'var(--icon-size)',
    justifyContent: 'center',
    overflow: 'hidden',
    textAlign: 'center',
    width: 'var(--icon-size)',

    '& > i': {
      alignSelf: 'center',
      fontSize: 30,
      marginLeft: 5
    }
  },

  '.section__text': {
    borderBottom: 'solid 2px Black',
    borderTop: 'solid 2px Transparent',
    flex: 1,
    marginLeft: 20,
    padding: '10px 0',
    textTransform: 'uppercase'
  },

  '.section__content-box': {
    marginBottom: '1.5em',
    marginLeft: 'calc(var(--icon-size) / 2 + 1px)',
    marginTop: -5
  },

  '.section__content': {
    borderLeft: 'solid 2px Black',
    paddingLeft: 'var(--icon-size)',
    paddingTop: 5,

    '& > ul': {
      marginTop: 0,
      paddingLeft: 0,
      listStyleType: 'none'
    }
  }
});

const Section = ({ children, icon, title }) => (
  <div className={classNames('section', STYLE)}>
    <div className="section__title">
      <div className="section__icon">
        <FluentIcon icon={icon} />
      </div>
      <div className="section__text">{title}</div>
    </div>
    <div className="section__content-box">
      <div className="section__content">{children}</div>
    </div>
  </div>
);

export default Section;
