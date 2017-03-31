'use strict';

import { css } from 'glamor';
import * as Styles from '../../styles';

const ICON_SIZE = 40;

const BOX = css({
  marginBottom: 20,
  paddingTop  : 20,

  '& > .title': {
    alignItems   : 'center',
    display      : 'flex',
    fontFamily   : Styles.SECTION_TITLE_FONT_FAMILY,
    fontSize     : 24,
    fontWeight   : 600,
    letterSpacing: 5,

    '& > .icon': {
      border        : '2px Solid Black',
      borderRadius  : ICON_SIZE,
      display       : 'flex',
      height        : ICON_SIZE,
      justifyContent: 'center',
      overflow      : 'hidden',
      textAlign     : 'center',
      width         : ICON_SIZE,

      '& > i': {
        alignSelf : 'center',
        fontSize  : 30,
        marginLeft: 5
      }
    },

    '& > .text': {
      borderBottom : 'solid 2px Black',
      borderTop    : 'solid 2px Transparent',
      flex         : 1,
      marginLeft   : 20,
      padding      : '10px 0',
      textTransform: 'uppercase'
    }
  },

  '& > .content-box': {
    marginBottom: '1.5em',
    marginLeft  : ICON_SIZE / 2 + 1,

    '& > .content': {
      borderLeft   : 'solid 2px Black',
      paddingLeft  : ICON_SIZE,

      '& > ul': {
        marginTop    : 0,
        paddingLeft  : 0,
        listStyleType: 'none',
      }
    }
  }
});

export default class Section extends React.Component {
  render() {
    const others = Object.keys(this.props).reduce((result, name) => {
      if (/^data\-/.test(name)) {
        result[name] = this.props[name];
      }

      return result;
    }, {});

    return (
      <div { ...BOX } { ...others }>
        <div className="title">
          <div className="icon">
            {
              this.props.icon &&
                <i className={ `ms-Icon ms-Icon--${ this.props.icon }` } aria-hidden="true" />
            }
          </div>
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
