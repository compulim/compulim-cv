'use strict';

import { css } from 'glamor';

const PHOTO_SIZE = 176;

const BOX = css({
  margin: '50px 60px',

  '& img': {
    border      : 'solid 2px White',
    borderRadius: PHOTO_SIZE,
    height      : PHOTO_SIZE,
    width       : PHOTO_SIZE
  }
});

export default class ProfilePicture extends React.Component {
  render() {
    return (
      <div { ...BOX }>
        <img src="img/profile.jpg" />
      </div>
    );
  }
}
