import { css } from 'glamor';
import React from 'react';
import ReactDOM from 'react-dom';

import Category from './Category';
import fontFamily from '../util/fontFamily';
import GitHubPage from './GitHubPage';
import GitHubRepo from './GitHubRepo';
import NPMPackage from './NPMPackage';

export default function main() {
  const ROOT_CSS = css({
    fontFamily: fontFamily('Calibri', 'Helvetica Neue', 'Arial', 'sans-serif'),

    '& > h1': {
      fontFamily: fontFamily('Calibri Light', 'Helvetica Neue', 'Arial', 'sans-serif'),
      fontWeight: 200
    }
  });

  const rateLimitURL = new URL('https://api.github.com/rate_limit');
  const githubAccessToken = localStorage.getItem('GITHUB_ACCESS_TOKEN');

  if (githubAccessToken) {
    rateLimitURL.search = new URLSearchParams({ access_token: githubAccessToken });
  }

  ReactDOM.render(
    <div className={ ROOT_CSS }>
      <h1>Packages</h1>
      <p>
        <a href="//auth.compulim.info/github/authorize">Sign into GitHub</a> if you see <a href={ rateLimitURL.toString() }>API rate limiting</a>.
      </p>
      <Category name="General">
        <NPMPackage name="auto-reset-event" />
        <NPMPackage name="azure-storage-fs" />
        <NPMPackage name="event-as-promise" />
        <NPMPackage name="has-resolved" />
        <NPMPackage name="on-error-resume-next" />
        <NPMPackage name="simple-update-in" />
        <NPMPackage name="version-from-git" />
        <NPMPackage name="web-speech-cognitive-services" />
      </Category>
      <Category name="UI">
        <GitHubRepo owner="compulim" name="react-component-template" />
        <NPMPackage name="react-dictate-button" />
        <NPMPackage name="react-drop-to-upload" />
        <NPMPackage name="react-film" repoOwner="spyip" />
        <NPMPackage name="react-sanitized-html" />
        <NPMPackage name="react-say" />
        <NPMPackage name="react-scroll-to-bottom" />
      </Category>
      <Category name="Tools">
        <GitHubPage owner="compulim" name="lock-walker" />
        <GitHubPage owner="compulim" name="travis-encrypt" />
      </Category>
      <Category name="MessagePort">
        <NPMPackage name="childprocess-messageport" />
        <NPMPackage name="childprocess-websocket" />
        <NPMPackage name="electron-ipcmain-messageport" />
        <NPMPackage name="electron-ipcrenderer-messageport" />
        <NPMPackage name="messageport-websocket" />
        <NPMPackage name="websocket-util" />
      </Category>
      <Category name="Scaffold">
        <NPMPackage name="generator-babel-typescript" />
        <NPMPackage name="commit-publish-template" repoName="commit-publish" />
      </Category>
    </div>,
    document.getElementById('root')
  );
}
