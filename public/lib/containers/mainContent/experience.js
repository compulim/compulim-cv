'use strict'

import { css } from 'glamor';

const BOX = css({
  display      : 'flex',
  marginLeft   : -48,
  marginBottom : '1.5em',
  paddingLeft  : 48,
  position     : 'relative',

  '&:last-child .clear-line': {
    backgroundColor: 'White',
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 8,
    width: 20
  },

  '& .icon': {
    backgroundColor: 'white',
    border: 'solid 2px Black',
    borderRadius: 10,
    height: 10,
    left: 0,
    position: 'absolute',
    top: 3,
    width: 10
  },

  '& .date': {
    flexShrink: 0,
    width: 150
  },

  '& .organization': {
    fontWeight: 600
  },

  '& .post': {
    marginBottom: '.4em'
  },

  '& .responsibilities': {
    textAlign: 'justify',

    '& p:first-child': {
      marginTop: '.4em'
    },

    '& p:last-child': {
      marginBottom: '.4em'
    }
  }
});

export default class Experience extends React.Component {
  render() {
    return (
      <li { ...BOX }>
        <div className="clear-line" />
        <div className="icon" />
        <div className="date">
          { this.props.from } &#x2012; { this.props.to || 'Present' }
        </div>
        <div className="content">
          <div className="organization">
            { this.props.organization }
          </div>
          {
            this.props.post &&
              <div className="post">
                { this.props.post }
              </div>
          }
          <div className="responsibilities">
            { this.props.children }
          </div>
        </div>
      </li>
    );
  }
}
