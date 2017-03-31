'use strict'

import { css } from 'glamor';
import Section from './sideBar/section';

const BOX = css({
  backgroundColor: '#333',
  color          : 'White',
  flex           : 3,
  height         : '100%',
  minHeight      : '100%'
});

export default class SideBar extends React.Component {
  render() {
    return (
      <div { ...BOX }>
        <Section title="Info">
          <dl>
            <dt>Email</dt>
            <dd>compulim@hotmail.com</dd>
            <dt>NPM</dt>
            <dd>npmjs.com/~compulim</dd>
            <dt>Social</dt>
            <dd>github.com/compulim</dd>
            <dd>twitter.com/compulim</dd>
          </dl>
        </Section>
      </div>
    );
  }
}
