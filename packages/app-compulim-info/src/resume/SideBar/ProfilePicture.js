import { css } from '@emotion/css';
import classNames from 'classnames';
import React from 'react';

const STYLE = css({
  '&.profile-picture': {
    '--profile-picture-size': '176px',
    border: 'solid 2px White',
    borderRadius: 'var(--profile-picture-size)',
    margin: '50px 60px 30px',
    position: 'relative',
    height: 'var(--profile-picture-size)',
    width: 'var(--profile-picture-size)'
  },

  '.profile-picture__image': {
    borderRadius: 'var(--profile-picture-size)',
    height: 'var(--profile-picture-size)',
    width: 'var(--profile-picture-size)'
  },

  '.profile-picture__inner-shadow': {
    '@media screen': {
      boxShadow: 'inset 0 0 20px 5px rgba(0, 0, 0, .5)'
    },

    borderRadius: 'var(--profile-picture-size)',
    height: 'var(--profile-picture-size)',
    left: 0,
    position: 'absolute',
    top: 0,
    width: 'var(--profile-picture-size)'
  }
});

const ProfilePicture = () => {
  return (
    <div className={classNames('profile-picture', STYLE)}>
      <img alt="William Wong" className="profile-picture__image" src="img/profile6.jpg" />
      <div className="profile-picture__inner-shadow" />
    </div>
  );
};

export default ProfilePicture;
