'use strict';

import { css } from 'glamor';
import * as Styles from '../../styles';

const BOX = css({
  marginBottom: 40,

  '& h1': {
    fontFamily   : Styles.TITLE_FONT_FAMILY,
    fontSize     : 60,
    letterSpacing: '.05em',
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
