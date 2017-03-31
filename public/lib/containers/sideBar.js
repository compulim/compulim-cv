'use strict'

import { css } from 'glamor';
import ProfilePicture from './sideBar/profilePicture';
import Section from './sideBar/section';

const BOX = css({
  backgroundColor: '#333',
  color          : 'White',
  height         : '100%',
  minHeight      : '100%',
  paddingBottom  : 100,
  width          : 300
});

export default class SideBar extends React.Component {
  render() {
    return (
      <div { ...BOX }>
        <ProfilePicture />
        <Section title="Info">
          <dl>
            <dt>
              <i className="ms-Icon ms-Icon--Mail" aria-hidden="true" />
              Email
            </dt>
            <dd>compulim@hotmail.com</dd>
          </dl>
        </Section>
        <Section title="Social">
          <dl>
            <dt>NPM</dt>
            <dd>npmjs.com/~compulim</dd>
            <dt>Social</dt>
            <dd>github.com/compulim</dd>
            <dd>twitter.com/compulim</dd>
          </dl>
        </Section>
        <Section title="References">
          <dl>
            <dt>Prof. Joseph Kee-yin NG</dt>
            <dd>
              <div>Ex-chairman</div>
              <div>IEEE Computer Chapter</div>
              <div>jng@comp.hkbu.edu.hk</div>
            </dd>
            <dt>Dan Crevier</dt>
            <dd>
              <div>Partner Group Engineering Manager</div>
              <div>Microsoft Corporation</div>
              <div>dancre@microsoft.com</div>
            </dd>
          </dl>
        </Section>
      </div>
    );
  }
}
