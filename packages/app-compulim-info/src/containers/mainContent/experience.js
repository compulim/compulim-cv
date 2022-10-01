import { css } from '@emotion/css';
import React from 'react';

const STYLE = css({
  display: 'flex',
  marginBottom: '1em',
  marginLeft: -48,
  paddingLeft: 48,
  paddingTop: 20,
  pageBreakInside: 'avoid',
  position: 'relative',

  '&:last-child > .clear-line': {
    backgroundColor: 'White',
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 28,
    width: 20
  },

  '& > .icon': {
    backgroundColor: 'white',
    border: 'solid 2px Black',
    borderRadius: 10,
    height: 10,
    left: 0,
    position: 'absolute',
    top: 23,
    width: 10
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
        marginTop: '.4em',
        paddingLeft: 0,

        '& > li': {
          marginBottom: '.4em'
        }
      }
    },

    '& a': {
      color: 'Black',
      textDecoration: 'none',

      '&:hover': {
        textDecoration: 'underline'
      }
    }
  }
});

const Experience = ({ children, from, organization, post, to, verticalDate }) => {
  return (
    <li className={STYLE}>
      <div className="clear-line" />
      <div className="icon" />
      {!!from &&
        (to ? (
          verticalDate ? (
            <div className="date vertical">
              {from}
              <br />
              &#x205E;
              <br />
              {to}
            </div>
          ) : (
            <div className="date">
              {from} &#x2012; {to}
            </div>
          )
        ) : (
          <div className={`date${verticalDate ? ' vertical' : ''}`}>{from}</div>
        ))}
      <div className="content">
        <div className="organization">{organization}</div>
        {!!post && <div className="post">{post}</div>}
        {!!children && <div className="responsibilities">{children}</div>}
      </div>
    </li>
  );
};

export default Experience;
