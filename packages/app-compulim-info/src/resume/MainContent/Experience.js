import { css } from '@emotion/css';
import classNames from 'classnames';
import React from 'react';

const STYLE = css({
  '&.experience': {
    display: 'flex',
    marginBottom: '1em',
    marginLeft: -48,
    paddingLeft: 48,
    paddingTop: 20,
    pageBreakInside: 'avoid',
    position: 'relative',

    '&:last-child .experience__clear-line': {
      backgroundColor: 'White',
      height: '100%',
      position: 'absolute',
      left: 0,
      top: 28,
      width: 20
    }
  },

  '.experience__icon': {
    backgroundColor: 'white',
    border: 'solid 2px Black',
    borderRadius: 10,
    height: 10,
    left: 0,
    position: 'absolute',
    top: 23,
    width: 10
  },

  '.experience__date': {
    flexShrink: 0,
    width: 170
  },

  '.experience__date--vertical': {
    width: 100
  },

  '.experience__organization': {
    fontWeight: 600
  },

  '.experience__post': {
    marginBottom: '.4em'
  },

  '.experience__responsibilities': {
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

  '.experience__content a': {
    color: 'Black',
    textDecoration: 'none',

    '&:hover': {
      textDecoration: 'underline'
    }
  }
});

const Experience = ({ children, from, organization, post, to, verticalDate }) => {
  return (
    <li className={classNames('experience', STYLE)}>
      <div className="experience__clear-line" />
      <div className="experience__icon" />
      {!!from &&
        (to ? (
          verticalDate ? (
            <div className="experience__date experience__date--vertical">
              {from}
              <br />
              &#x205E;
              <br />
              {to}
            </div>
          ) : (
            <div className="experience__date">
              {from} &#x2012; {to}
            </div>
          )
        ) : (
          <div className={classNames('experience__date', { 'experience__date--vertical': verticalDate })}>{from}</div>
        ))}
      <div className="experience__content">
        <div className="experience__organization">{organization}</div>
        {!!post && <div className="experience__post">{post}</div>}
        {!!children && <div className="experience__responsibilities">{children}</div>}
      </div>
    </li>
  );
};

export default Experience;
