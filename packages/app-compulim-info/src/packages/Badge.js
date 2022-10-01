import { css } from '@emotion/css';
import classNames from 'classnames';
import React from 'react';

const ROOT_CSS = css({
  backgroundColor: '#999',
  border: 0,
  borderRadius: 10,
  color: 'White',
  fontSize: 12,
  height: 24,
  lineHeight: '24px',
  paddingBottom: 1,
  paddingLeft: '.5em',
  paddingRight: '.5em',
  textDecoration: 'none'
});

export default ({ children, className }) => (
  <span className={classNames(ROOT_CSS + '', (className || '') + '')}>{children}</span>
);
