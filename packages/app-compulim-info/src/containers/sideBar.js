import { css } from 'glamor';
import React from 'react';

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
          <Property icon="MapPin" title="Address">
            Room 1720, Ting Fuk House
            <br />
            On Ting Estate
            <br />
            Tuen Mun, N.T.
            <br />
            Hong Kong
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
          <Property icon="Website" title="Website">
            <a href="http://compulim.info/" rel="noopener noreferrer" target="_blank">compulim.info</a>
          </Property>
          <Property icon="ContactInfo" title="Associations">
            <div>
              <a href="http://microsoftalumni.com/" rel="noopener noreferrer" target="_blank">Microsoft Alumni Network</a>
            </div>
          </Property>
        </Section>
        <Section title="Social">
          <Property icon="Ferry" title="Community">
            <div>
              <a href="https://npmjs.com/~compulim" rel="noopener noreferrer" target="_blank">npmjs.com/~compulim</a>
            </div>
            <div>
              <a href="https://bit.ly/vscode-compulim" rel="noopener noreferrer" target="_blank">bit.ly/vscode-compulim</a>
            </div>
          </Property>
          <Property icon="Group" title="Social networks">
            <div>
              <a href="https://github.com/compulim" rel="noopener noreferrer" target="_blank">github.com/compulim</a>
            </div>
            <div>
              <a href="https://twitter.com/compulim" rel="noopener noreferrer" target="_blank">twitter.com/compulim</a>
            </div>
            <div>
              <a href="https://linkedin.com/in/compulim" rel="noopener noreferrer" target="_blank">linkedin.com/in/compulim</a>
            </div>
            {
              false &&
                <div>
                  <a href="https://account.xbox.com/en-US/Profile?gamertag=compulim" rel="noopener noreferrer" target="_blank">compulim</a> on Xbox Live
                </div>
            }
          </Property>
          <Property icon="Balloons" title="Hobbies">
            <div>Home IoT DIY</div>
            <div>Snowboarding</div>
            <div>Gaming (FPS/3PS/<a href="https://worldofwarcraft.com" rel="noopener noreferrer" target="_blank">WoW</a>)</div>
            <div>Camping and hiking</div>
            <div>Travelling</div>
          </Property>
          <Property icon="Trophy" title="Awards">
            <div>Nokia North Asia<br />Lumia Challenge 2013</div>
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
              <a href="mailto:dancrevier@hotmail.com">dancrevier@hotmail.com</a>
            </div>
          </Property>
          <Property icon="PartyLeader" title="David Zearing">
            <div>Principal Software Engineer</div>
            <div>Microsoft Corporation</div>
            <div>
              <a href="mailto:dzearing@hotmail.com">dzearing@hotmail.com</a>
            </div>
          </Property>
        </Section>
      </div>
    );
  }
}
