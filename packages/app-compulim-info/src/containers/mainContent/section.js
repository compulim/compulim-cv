import { css } from '@emotion/css';
import React from 'react';

import * as Styles from '../../styles';

const ICON_SIZE = 40;

const BOX = css({
  marginBottom: 20,
  paddingTop: 20,

  '& > .title': {
    alignItems: 'center',
    display: 'flex',
    fontFamily: Styles.SECTION_TITLE_FONT_FAMILY,
    fontSize: 24,
    fontWeight: 600,
    letterSpacing: 5,

    '& > .icon': {
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

    '& > .text': {
      borderBottom: 'solid 2px Black',
      borderTop: 'solid 2px Transparent',
      flex: 1,
      marginLeft: 20,
      padding: '10px 0',
      textTransform: 'uppercase'
    }
  },

  '& > .content-box': {
    marginBottom: '1.5em',
    marginLeft: ICON_SIZE / 2 + 1,
    marginTop: -5,

    '& > .content': {
      borderLeft: 'solid 2px Black',
      paddingLeft: ICON_SIZE,
      paddingTop: 5,

      '& > ul': {
        marginTop: 0,
        paddingLeft: 0,
        listStyleType: 'none'
      }
    }
  }
});

const Section = ({ children, icon, title }) => {
  return (
    <div className={BOX}>
      <div className="title">
        <div className="icon">{icon && <i className={`ms-Icon ms-Icon--${icon}`} aria-hidden="true" />}</div>
        <div className="text">{title}</div>
      </div>
      <div className="content-box">
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default Section;
