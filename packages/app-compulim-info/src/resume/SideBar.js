import { css } from '@emotion/css';
import classNames from 'classnames';
import React from 'react';

import ProfilePicture from './SideBar/ProfilePicture';
import Property from './SideBar/Property';
import Section from './SideBar/Section';

const STYLE = css({
  '&.side-bar': {
    backgroundColor: '#333',
    color: 'White',
    minHeight: '100%',
    paddingBottom: 100,
    width: 300
  },

  '.side-bar__property-link': {
    color: '#CCC',
    textDecoration: 'none',

    '&:hover': {
      textDecoration: 'underline'
    }
  }
});

const SideBar = () => (
  <div className={classNames('side-bar', STYLE)}>
    <ProfilePicture />
    <Section title="Info">
      <Property icon="MapPin" title="Address">
        Redmond, WA 98052
      </Property>
      <Property icon="MapPin" title="Address">
        Tuen Mun, N.T.
        <br />
        Hong Kong
      </Property>
      {/* <Property icon="CellPhone" title="Cellphone">
          <a href="tel:+852">+852</a>
          {false && <div>20:00 - 12:00 PST</div>}
        </Property> */}
      {false && (
        <Property icon="Clock" title="Timezone">
          GMT-08 PST
        </Property>
      )}
      <Property icon="Mail" title="Email">
        <a className="side-bar__property-link" href="mailto:compulim@hotmail.com">
          compulim@hotmail.com
        </a>
      </Property>
      <Property icon="Website" title="Website">
        <a className="side-bar__property-link" href="http://compulim.info/" rel="noopener noreferrer" target="_blank">
          compulim.info
        </a>
      </Property>
      <Property icon="ContactInfo" title="Associations">
        <div>
          <a
            className="side-bar__property-link"
            href="http://microsoftalumni.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Microsoft Alumni Network
          </a>
        </div>
      </Property>
    </Section>
    <Section title="Social">
      <Property icon="Ferry" title="Community">
        <div>
          <a
            className="side-bar__property-link"
            href="https://npmjs.com/~compulim"
            rel="noopener noreferrer"
            target="_blank"
          >
            npmjs.com/~compulim
          </a>
        </div>
        <div>
          <a
            className="side-bar__property-link"
            href="https://bit.ly/vscode-compulim"
            rel="noopener noreferrer"
            target="_blank"
          >
            bit.ly/vscode-compulim
          </a>
        </div>
      </Property>
      <Property icon="Group" title="Social networks">
        <div>
          <a
            className="side-bar__property-link"
            href="https://github.com/compulim"
            rel="noopener noreferrer"
            target="_blank"
          >
            github.com/compulim
          </a>
        </div>
        <div>
          <a
            className="side-bar__property-link"
            href="https://twitter.com/compulim"
            rel="noopener noreferrer"
            target="_blank"
          >
            twitter.com/compulim
          </a>
        </div>
        <div>
          <a
            className="side-bar__property-link"
            href="https://linkedin.com/in/compulim"
            rel="noopener noreferrer"
            target="_blank"
          >
            linkedin.com/in/compulim
          </a>
        </div>
        {false && (
          <div>
            <a
              className="side-bar__property-link"
              href="https://account.xbox.com/en-US/Profile?gamertag=compulim"
              rel="noopener noreferrer"
              target="_blank"
            >
              compulim
            </a>{' '}
            on Xbox Live
          </div>
        )}
      </Property>
      <Property icon="Balloons" title="Hobbies">
        <div>Home IoT DIY</div>
        <div>Snowboarding</div>
        <div>
          Gaming (FPS/3PS/
          <a
            className="side-bar__property-link"
            href="https://worldofwarcraft.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            WoW
          </a>
          )
        </div>
        <div>Camping and hiking</div>
        <div>Travelling</div>
      </Property>
      <Property icon="Trophy" title="Awards">
        <div>
          Nokia North Asia
          <br />
          Lumia Challenge 2013
        </div>
      </Property>
    </Section>
    <Section title="References">
      <Property icon="PartyLeader" title="Prof. Joseph Kee-yin NG">
        <div>Ex-chairman</div>
        <div>IEEE Computer Chapter</div>
        <div>
          <a className="side-bar__property-link" href="mailto:jng@comp.hkbu.edu.hk">
            jng@comp.hkbu.edu.hk
          </a>
        </div>
      </Property>
      <Property icon="PartyLeader" title="Lili Cheng">
        <div>Corporate Vice President</div>
        <div>Microsoft Corporation</div>
      </Property>
      <Property icon="PartyLeader" title="David Zearing">
        <div>Principal Software Engineer</div>
        <div>Microsoft Corporation</div>
      </Property>
    </Section>
  </div>
);

export default SideBar;
