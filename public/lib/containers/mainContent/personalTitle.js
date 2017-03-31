'use strict';

import { css } from 'glamor';

const BOX = css({
  marginBottom: 40,

  '& h1': {
    fontFamily   : `'Century Gothic', sans-serif`,
    fontSize     : 60,
    marginBottom : 0,
    marginTop    : 20,
    textTransform: 'uppercase'
  },

  '& summary': {
  }
});

export default class PersonalTitle extends React.Component {
  render() {
    return (
      <div { ...BOX }>
        <h1>{ this.props.name }</h1>
        <div className="summary">
          { this.props.children }
        </div>
      </div>
    );
  }
}
