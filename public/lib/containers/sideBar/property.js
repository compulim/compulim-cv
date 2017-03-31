'use strict';

import { css } from 'glamor';

const ICON_SIZE = 30;

const BOX = css({
  display     : 'flex',
  marginBottom: 5,
  marginTop   : 20,

  '& > .icon': {
    fontSize   : ICON_SIZE,
    marginRight: 10,
    width      : ICON_SIZE
  },

  '& > .content-box': {
    flex: 1,

    '& > .title': {
      fontWeight  : 500,
    },

    '& > .content': {
      color     : '#CCC',
      fontWeight: 200,

      '& a': {
        color: '#CCC',
        textDecoration: 'none',

        '&:hover': {
          textDecoration: 'underline'
        }
      }
    }
  }
});

export default class Property extends React.Component {
  render() {
    return (
      <div { ...BOX }>
        <div className="icon">
          {
            this.props.icon &&
              <i className={ `ms-Icon ms-Icon--${ this.props.icon }` } aria-hidden="true" />
          }
        </div>
        <div className="content-box">
          <div className="title">
            { this.props.title }
          </div>
          <div className="content">
            { this.props.children }
          </div>
        </div>
      </div>
    );
  }
}
