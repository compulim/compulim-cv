'use strict'

import { css } from 'glamor';

const SMALL_ICON_SIZE = 20;

const BOX = css({
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
  }
});

export default class Experience extends React.Component {
  render() {
    return (
      <li { ...BOX }>
        <div className="icon" />
        <div className="date">
          { this.props.date }
        </div>
        <div className="content">
          <div className="organization">
            { this.props.organization }
          </div>
          <div className="post">
            { this.props.post }
          </div>
          <div className="responsibilities">
            { this.props.children }
          </div>
        </div>
      </li>
    );
  }
}
