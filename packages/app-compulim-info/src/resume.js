import { css, insertGlobal } from 'glamor';
import React from 'react';
import ReactDOM from 'react-dom';

import * as Styles from './styles';
import MainContent from './containers/mainContent';
import SideBar from './containers/sideBar';

export default function main() {
  insertGlobal('html, body, #reactRoot', {
    backgroundColor: '#EEE',
    fontSize       : 16,
    minHeight      : '100%'
  });

  insertGlobal('body', {
    fontFamily: Styles.BODY_FONT_FAMILY,
    margin    : 0,
    minHeight : '100%'
  });

  insertGlobal('@page', {
    margin: 0,
    size  : 'letter portrait'
  });

  const BOX = css({
    alignItems     : 'stretch',
    boxShadow      : '0 0 10px rgba(0, 0, 0, .2)',
    display        : 'flex',
    height         : '100%',
    minHeight      : '100%',
    margin         : '0 auto',
    width          : 1024
  });

  ReactDOM.render(
    <div className={ BOX }>
      <SideBar />
      <MainContent />
    </div>,
    document.getElementById('root')
  );
}
