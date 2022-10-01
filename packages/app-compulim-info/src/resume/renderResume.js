import { createRoot } from 'react-dom/client';
import { css, injectGlobal } from '@emotion/css';
import classNames from 'classnames';
import React from 'react';

import MainContent from './MainContent';
import SideBar from './SideBar';

export default function main() {
  injectGlobal({
    'html, body': {
      backgroundColor: '#EEE',
      fontSize: 16,
      minHeight: '100%'
    },
    body: {
      '--body-font-family': "Calibri, 'Helvetica Neue', Arial, sans-serif",
      '--section-title-font-family': 'Montserrat, Arial, sans-serif',
      '--title-font-family': 'Montserrat, Arial, sans-serif',
      fontFamily: 'var(--body-font-family)',
      margin: 0,
      minHeight: '100%'
    },
    '@page': {
      margin: 0,
      size: 'letter portrait'
    }
  });

  const STYLE = css({
    '&.resume': {
      alignItems: 'stretch',
      boxShadow: '0 0 10px rgba(0, 0, 0, .2)',
      display: 'flex',
      height: '100%',
      minHeight: '100%',
      margin: '0 auto',
      width: 1024
    }
  });

  createRoot(document.getElementById('root')).render(
    <div className={classNames('resume', STYLE)}>
      <SideBar />
      <MainContent />
    </div>
  );
}
