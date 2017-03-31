'use strict'

import { css } from 'glamor';
import ProfilePicture from './sideBar/profilePicture';
import Property from './sideBar/property';
import Section from './sideBar/section';

const BOX = css({
  backgroundColor: '#333',
  color          : 'White',
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
          <Property icon="Mail" title="Email">
            compulim@hotmail.com
          </Property>
        </Section>
        <Section title="Social">
          <Property icon="Ferry" title="NPM">
            <div>npmjs.com/~compulim</div>
          </Property>
          <Property icon="Group" title="Social">
            <div>github.com/compulim</div>
            <div>twitter.com/compulim</div>
          </Property>
        </Section>
        <Section title="References">
          <Property icon="PartyLeader" title="Prof. Joseph Kee-yin NG">
            <div>Ex-chairman</div>
            <div>IEEE Computer Chapter</div>
            <div>jng@comp.hkbu.edu.hk</div>
          </Property>
          <Property icon="PartyLeader" title="Dan Crevier">
            <div>Partner Group Engineering Manager</div>
            <div>Microsoft Corporation</div>
            <div>dancre@microsoft.com</div>
          </Property>
        </Section>
      </div>
    );
  }
}
