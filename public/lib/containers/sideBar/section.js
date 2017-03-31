'use strict';

import { css } from 'glamor';
import * as Styles from '../../styles';

const BOX = css({
  marginBottom   : 50,
  marginLeft     : 50,
  paddingTop     : 20,
  pageBreakInside: 'avoid',

  '& > .title': {
    borderBottom : 'solid 2px White',
    fontFamily   : Styles.SECTION_TITLE_FONT_FAMILY,
    fontSize     : 20,
    letterSpacing: 5,
    paddingBottom: 10,
    paddingRight : 100,
    textTransform: 'uppercase'
  },

  '& > .content': {
    // marginTop: 20
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
