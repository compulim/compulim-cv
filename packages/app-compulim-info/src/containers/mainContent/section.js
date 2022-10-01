import { css } from '@emotion/css';
import classNames from 'classnames';
import React from 'react';

import * as Styles from '../../styles';

const ICON_SIZE = 40;

const STYLE = css({
  '&.section': {
    marginBottom: 20,
    paddingTop: 20
  },

  '.section__title': {
    alignItems: 'center',
    display: 'flex',
    fontFamily: Styles.SECTION_TITLE_FONT_FAMILY,
    fontSize: 24,
    fontWeight: 600,
    letterSpacing: 5
  },

  '.section__icon': {
    backgroundColor: 'White',
    border: '2px Solid Black',
    borderRadius: ICON_SIZE,
    display: 'flex',
    height: ICON_SIZE,
    justifyContent: 'center',
    overflow: 'hidden',
    textAlign: 'center',
    width: ICON_SIZE,

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
    marginLeft: ICON_SIZE / 2 + 1,
    marginTop: -5
  },

  '.section__content': {
    borderLeft: 'solid 2px Black',
    paddingLeft: ICON_SIZE,
    paddingTop: 5,

    '& > ul': {
      marginTop: 0,
      paddingLeft: 0,
      listStyleType: 'none'
    }
  }
});

const Section = ({ children, icon, title }) => {
  return (
    <div className={classNames('section', STYLE)}>
      <div className="section__title">
        <div className="section__icon">{icon && <i className={`ms-Icon ms-Icon--${icon}`} aria-hidden="true" />}</div>
        <div className="section__text">{title}</div>
      </div>
      <div className="section__content-box">
        <div className="section__content">{children}</div>
      </div>
    </div>
  );
};

export default Section;
