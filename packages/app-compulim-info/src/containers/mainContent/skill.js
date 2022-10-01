import { css } from '@emotion/css';
import classNames from 'classnames';
import React, { useMemo } from 'react';

const STYLE = css({
  '&.skill': {
    alignItems: 'center',
    display: 'flex',
    height: '1.5em',
    pageBreakInside: 'avoid'
  },

  '.skill__title': {
    alignSelf: 'flex-start',
    flex: 4,
    lineHeight: '80%'
  },

  '.skill__bar': {
    alignSelf: 'flex-start',
    backgroundColor: '#DDD',
    flex: 3,
    height: 6,
    marginTop: 'calc(.5em - 6px)',
    position: 'relative'
  },

  '.skill__filler': {
    backgroundColor: '#777',
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0
  }
});

const Skill = ({ star, title }) => {
  const percentageStyle = useMemo(
    () =>
      css({
        width: (star / 5) * 100 + '%'
      }),
    [star]
  );

  return (
    <div className={classNames('skill', STYLE)}>
      <div className="skill__title">{title}</div>
      <div className="skill__bar">
        <div className={classNames('skill__filler', percentageStyle)} />
      </div>
    </div>
  );
};

export default Skill;
