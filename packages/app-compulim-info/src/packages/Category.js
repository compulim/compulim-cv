import { css } from 'glamor';
import React   from 'react';

import fontFamily from '../util/fontFamily';

const ROOT_CSS = css({
  '& > header > h2': {
    fontFamily: fontFamily('Calibri Light', 'Helvetica Neue', 'Arial', 'sans-serif'),
    fontWeight: 200
  },

  '& > ul': {
    listStyleType: 'none',
    padding      : 0
  }
});

export default props =>
  <article className={ ROOT_CSS }>
    <header>
      <h2>{ props.name }</h2>
    </header>
    <ul>
      { React.Children.map(props.children, child => <li>{ child }</li>) }
    </ul>
  </article>
