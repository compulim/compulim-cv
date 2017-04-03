'use strict'

import { css } from 'glamor';

const STYLE = css({
  display        : 'flex',
  marginBottom   : '1em',
  marginLeft     : -48,
  paddingLeft    : 48,
  paddingTop     : 20,
  pageBreakInside: 'avoid',
  position       : 'relative',

  '&:last-child > .clear-line': {
    backgroundColor: 'White',
    height         : '100%',
    position       : 'absolute',
    left           : 0,
    top            : 28,
    width          : 20
  },

  '& > .icon': {
    backgroundColor: 'white',
    border         : 'solid 2px Black',
    borderRadius   : 10,
    height         : 10,
    left           : 0,
    position       : 'absolute',
    top            : 23,
    width          : 10
  },

  '& > .date': {
    flexShrink: 0,

    '&.vertical': {
      width: 100
    },

    '&:not(.vertical)': {
      width: 170
    }
  },

  '& > .content': {
    '& > .organization': {
      fontWeight: 600
    },

    '& > .post': {
      marginBottom: '.4em'
    },

    '& > .responsibilities': {
      // textAlign: 'justify',

      '& p:first-child': {
        marginTop: '.4em'
      },

      '& p:last-child': {
        marginBottom: '.4em'
      },

      '& > ul': {
        listStyleType: 'none',
        marginTop    : '.4em',
        paddingLeft  : 0,

        '& > li': {
          marginBottom: '.4em'
        }
      }
    },

    '& a': {
      color         : 'Black',
      textDecoration: 'none',

      '&:hover': {
        textDecoration: 'underline'
      }
    }
  }
});

export default class Experience extends React.Component {
  render() {
    return (
      <li { ...STYLE }>
        <div className="clear-line" />
        <div className="icon" />
        {
          !!this.props.from && (
            this.props.to ?
              this.props.verticalDate ?
                <div className="date vertical">
                  { this.props.from }
                  <br />
                  &#x205E;
                  <br />
                  { this.props.to }
                </div>
              :
                <div className="date">
                  { this.props.from } &#x2012; { this.props.to }
                </div>
            :
              <div className={ `date${ this.props.verticalDate ? ' vertical' : ''}` }>
                { this.props.from }
              </div>
          )
        }
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
          {
            this.props.children &&
              <div className="responsibilities">
                { this.props.children }
              </div>
          }
        </div>
      </li>
    );
  }
}
