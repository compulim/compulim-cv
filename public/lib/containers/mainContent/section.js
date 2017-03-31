'use strict';

import { css } from 'glamor';

const ICON_SIZE = 40;

const BOX = css({
  marginLeft: 60,
  marginTop: 20,
  marginBottom: 40,

  '& .title': {
    alignItems   : 'center',
    display      : 'flex',
    fontFamily   : `'Century Gothic', Arial, sans-serif`,
    fontSize     : 24,
    fontWeight   : 600,
    letterSpacing: 5,
    paddingRight : 100,

    '& .icon': {
      border      : '2px Solid Black',
      borderRadius: ICON_SIZE,
      height      : ICON_SIZE,
      width       : ICON_SIZE
    },

    '& .text': {
      borderBottom : 'solid 2px Black',
      borderTop    : 'solid 2px Transparent',
      flex         : 1,
      marginLeft   : 20,
      padding      : '10px 0',
      textTransform: 'uppercase'
    }
  },

  '& .content-box': {
    marginBottom: '1.5em',
    marginLeft  : ICON_SIZE / 2,

    '& .content': {
      '& ul': {
        borderLeft   : 'solid 2px Black',
        marginTop    : 0,
        paddingLeft  : ICON_SIZE,
        paddingTop   : 20,
        listStyleType: 'none',

        '& li': {
          display      : 'flex',
          marginLeft   : 0,
          marginBottom: '1.5em',
          paddingLeft  : 0,
          position     : 'relative',

          '& .icon': {
            backgroundColor: 'white',
            border: 'solid 2px Black',
            borderRadius: 10,
            height: 10,
            left: -48,
            position: 'absolute',
            top: 3,
            width: 10
          }
        }
      }
    }
  }
});

export default class Section extends React.Component {
  render() {
    return (
      <div { ...BOX }>
        <div className="title">
          <div className="icon"></div>
          <div className="text">{ this.props.title }</div>
        </div>
        <div className="content-box">
          <div className="content">
            { this.props.children }
          </div>
        </div>
      </div>
    );
  }
}
