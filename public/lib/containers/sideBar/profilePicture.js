'use strict';

import { css } from 'glamor';

const PHOTO_SIZE = 176;

const BOX = css({
  border      : 'solid 2px White',
  borderRadius: PHOTO_SIZE,
  margin      : '50px 60px',
  position    : 'relative',
  height      : PHOTO_SIZE,
  width       : PHOTO_SIZE,

  '& > img': {
    borderRadius: PHOTO_SIZE,
    height      : PHOTO_SIZE,
    width       : PHOTO_SIZE
  },

  '& > .inner-shadow': {
    '@media screen': {
      boxShadow   : 'inset 0 0 20px 5px rgba(0, 0, 0, .5)'
    },

    borderRadius: PHOTO_SIZE,
    height      : PHOTO_SIZE,
    left        : 0,
    position    : 'absolute',
    top         : 0,
    width       : PHOTO_SIZE
  }
});

export default class ProfilePicture extends React.Component {
  render() {
    return (
      <div { ...BOX }>
        <img src="img/profile.jpg" />
        <div className="inner-shadow" />
      </div>
    );
  }
}
