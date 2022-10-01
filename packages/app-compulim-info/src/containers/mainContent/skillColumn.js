import { css } from '@emotion/css';
import React from 'react';

const STYLE = css({
  marginBottom: '1em',
  pageBreakInside: 'avoid',

  '& > h1': {
    fontSize: 16,
    fontWeight: 600,
    marginBottom: '1em',
    marginTop: 0,

    '&:not(:first-child)': {
      marginTop: '.8em'
    }
  }
});

export default class SkillColumn extends React.Component {
  render() {
    return (
      <div className={STYLE}>
        <h1>{this.props.title}</h1>
        {this.props.children}
      </div>
    );
  }
}
