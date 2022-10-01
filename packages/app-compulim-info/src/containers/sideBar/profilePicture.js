import { css } from '@emotion/css';
import classNames from 'classnames';
import React from 'react';

const PHOTO_SIZE = 176;

const BOX = css({
  '&.profile-picture': {
    border: 'solid 2px White',
    borderRadius: PHOTO_SIZE,
    margin: '50px 60px 30px',
    position: 'relative',
    height: PHOTO_SIZE,
    width: PHOTO_SIZE
  },

  '& .profile-picture__image': {
    borderRadius: PHOTO_SIZE,
    height: PHOTO_SIZE,
    width: PHOTO_SIZE
  },

  '& .profile-picture__inner-shadow': {
    '@media screen': {
      boxShadow: 'inset 0 0 20px 5px rgba(0, 0, 0, .5)'
    },

    borderRadius: PHOTO_SIZE,
    height: PHOTO_SIZE,
    left: 0,
    position: 'absolute',
    top: 0,
    width: PHOTO_SIZE
  }
});

const ProfilePicture = () => {
  return (
    <div className={classNames('profile-picture', BOX)}>
      <img alt="William Wong" className="profile-picture__image" src="img/profile6.jpg" />
      <div className="profile-picture__inner-shadow" />
    </div>
  );
};

export default ProfilePicture;
