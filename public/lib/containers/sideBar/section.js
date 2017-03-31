'use strict';

import { css } from 'glamor';

const BOX = css({
  marginLeft: 60,
  marginTop: 20,
  marginBottom: 50,

  '& .title': {
    borderBottom : 'solid 2px White',
    fontFamily   : `'Century Gothic', Arial, sans-serif`,
    fontSize     : 20,
    letterSpacing: 5,
    paddingBottom: 10,
    paddingRight : 100,
    textTransform: 'uppercase'
  },

  '& dl': {
    marginTop: 30,

    '& dt': {
      fontWeight: 500,
      marginTop: 20
    },

    '& dd': {
      color       : '#CCC',
      fontWeight  : 200,
      marginLeft  : 0
    }
  }
});

export default class Section extends React.Component {
  render() {
    return (
      <div { ...BOX }>
        <div className="title">{ this.props.title }</div>
        <div className="content">
          { this.props.children }
        </div>
      </div>
    );
  }
}
