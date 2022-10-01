import { css, injectGlobal } from '@emotion/css';
import React from 'react';
import { createRoot } from 'react-dom/client';

import * as Styles from './styles';
import MainContent from './containers/mainContent';
import SideBar from './containers/sideBar';

export default function main() {
  injectGlobal({
    'html, body, #reactRoot': {
      backgroundColor: '#EEE',
      fontSize: 16,
      minHeight: '100%'
    },
    body: {
      fontFamily: Styles.BODY_FONT_FAMILY,
      margin: 0,
      minHeight: '100%'
    },
    '@page': {
      margin: 0,
      size: 'letter portrait'
    }
  });

  const BOX = css({
    alignItems: 'stretch',
    boxShadow: '0 0 10px rgba(0, 0, 0, .2)',
    display: 'flex',
    height: '100%',
    minHeight: '100%',
    margin: '0 auto',
    width: 1024
  });

  createRoot(document.getElementById('root')).render(
    <div className={BOX}>
      <SideBar />
      <MainContent />
    </div>
  );
}
