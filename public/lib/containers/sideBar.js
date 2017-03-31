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
          <Property icon="MapPin" title="Address">
            16541 Redmond Way #126-C
            <br />
            Redmond, WA  98052
          </Property>
          <Property icon="CellPhone" title="Cellphone">
            <a href="tel:+852 9153 0922">+852 9153 0922</a>
            {
              false &&
                <div>20:00 - 12:00 PST</div>
            }
          </Property>
          {
            false &&
              <Property icon="Clock" title="Timezone">
                GMT+08 Hong Kong
              </Property>
          }
          <Property icon="Mail" title="Email">
            <a href="mailto:compulim@hotmail.com">compulim@hotmail.com</a>
          </Property>
          <Property icon="ContactInfo" title="Associations">
            <div>Microsoft Alumni</div>
          </Property>
        </Section>
        <Section title="Social">
          <Property icon="Ferry" title="Open source packages">
            <div>
              <a href="https://npmjs.com/~compulim" target="_blank">npmjs.com/~compulim</a>
            </div>
            <div>
              <a href="https://bit.ly/vscode-compulim" target="_blank">bit.ly/vscode-compulim</a>
            </div>
          </Property>
          <Property icon="Group" title="Social">
            <div>
              <a href="https://github.com/compulim" target="_blank">github.com/compulim</a>
            </div>
            <div>
              <a href="https://twitter.com/compulim" target="_blank">twitter.com/compulim</a>
            </div>
            <div>
              <a href="https://linkedin.com/in/compulim" target="_blank">linkedin.com/in/compulim</a>
            </div>
          </Property>
          <Property icon="Balloons" title="Hobbys">
            <div>Home IoT DIY</div>
            <div>Snowboard</div>
            <div>Gaming (FPS/3PS/<a href="https://worldofwarcraft.com" target="_blank">WoW</a>)</div>
            <div>Camping and hiking</div>
            <div>Travelling</div>
          </Property>
        </Section>
        <Section title="References">
          <Property icon="PartyLeader" title="Prof. Joseph Kee-yin NG">
            <div>Ex-chairman</div>
            <div>IEEE Computer Chapter</div>
            <div>
              <a href="mailto:jng@comp.hkbu.edu.hk">jng@comp.hkbu.edu.hk</a>
            </div>
          </Property>
          <Property icon="PartyLeader" title="Dan Crevier">
            <div>Partner Group Engineering Manager</div>
            <div>Microsoft Corporation</div>
            <div>
              <a href="mailto:dancre@microsoft.com">dancre@microsoft.com</a>
            </div>
          </Property>
          <Property icon="PartyLeader" title="David Zearing">
            <div>Principal Software Engineer</div>
            <div>Microsoft Corporation</div>
            <div>
              <a href="mailto:dzearing@microsoft.com">dzearing@microsoft.com</a>
            </div>
          </Property>
        </Section>
      </div>
    );
  }
}
