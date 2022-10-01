import { css } from '@emotion/css';
import classNames from 'classnames';
import React from 'react';

const BOX = css({
  alignItems: 'center',
  display: 'flex',
  height: '1.5em',
  pageBreakInside: 'avoid',

  '& > .title': {
    alignSelf: 'flex-start',
    flex: 4,
    lineHeight: '80%'
  },

  '& > .bar': {
    alignSelf: 'flex-start',
    backgroundColor: '#DDD',
    flex: 3,
    height: 6,
    marginTop: 'calc(.5em - 6px)',
    position: 'relative',

    '& > .filler': {
      backgroundColor: '#777',
      height: '100%',
      left: 0,
      position: 'absolute',
      top: 0
    }
  }
});

export default class Skill extends React.Component {
  render() {
    const percentageStyle = css({
      width: (this.props.star / 5) * 100 + '%'
    });

    return (
      <div className={BOX}>
        <div className="title">{this.props.title}</div>
        <div className="bar">
          <div className={classNames(percentageStyle, 'filler')} />
        </div>
      </div>
    );
  }
}
