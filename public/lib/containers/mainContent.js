'use strict'

import { css } from 'glamor';
import Experience from './mainContent/experience';
import PersonalTitle from './mainContent/personalTitle';
import Project from './mainContent/project';
import Section from './mainContent/section';
import Skill from './mainContent/skill';

const BOX = css({
  backgroundColor: 'White',
  flex           : 7,
  paddingLeft    : 40,
  paddingRight   : 60,
  minHeight      : '100%',

  '& .three-columns': {
    display: 'flex',
    width  : '100%',

    '& > .spacer': {
      flex: .2
    },

    '& > .column': {
      flex: 1,

      '& > h1': {
        fontSize     : 16,
        fontWeight   : 600,
        marginBottom : '1em',
        marginTop    : 0,

        '&:not(:first-child)': {
          marginTop: '.8em'
        }
      }
    }
  }
});

export default class MainContent extends React.Component {
  render() {
    return (
      <div { ...BOX }>
        <PersonalTitle name="William Wong">
          <p>More than 15 years of professional software development. A full stack developer expertize in HTML, CSS, Node.js, React/Native, Redux, Webpack, Azure, Cordova, jQuery, and C#. Extensive experiences in UX design, Webpack, rollup.js, MongoDB, i18n, and accessibility.</p>
          <p>Enjoy self-learning, visualizing data, and realizing ideas.</p>
        </PersonalTitle>
        <Section icon="Work" title="Work experience">
          <ul>
            <Experience
              date="2011 Nov - Present"
              organization="C&amp;R Holdings Limited"
              post="Solution Architect"
            >
              Lead the company technical direction and solve complex problems with creative solution.
            </Experience>
            <Experience
              date="2006 Sep - 2011 Jul"
              organization="Microsoft Corporation"
              post="Software Development Engineer II"
            >
            </Experience>
            <Experience
              date="2005 Sep - 2006 Aug"
              organization="Microsoft (Hong Kong) Limited"
              post="Software Design Engineer"
            >
            </Experience>
          </ul>
        </Section>
        <Section icon="FavoriteList" title="Project highlights">
          <ul>
            <Project
              date="Feb 2016 - Present"
              title="Public speaking and meetups"
            >
              <p>Presented technical topics in multiple local meetup groups, including "Visual Studio Code extension authoring", "Integrating Alexa with Azure IoT Hub", "React Native and Swift integration", and "Introduction to Webpack". Actively participated in meetup groups for discovering latest technologies, adopting, and bringing values to customers.</p>
            </Project>
            <Project
              date="2012 - Present"
              title="Electronic form solution for Hong Kong International Airport"
            >
              <p>Co-developed electronic form solution for Hong Kong International Airport, from performance review to customer services logbook to janitor patrol reports, enabled mobile workforce to conduct their work on iPad, saving 1,000+ papers daily.</p>
            </Project>
          </ul>
        </Section>
        <Section icon="Glasses" title="Education">
          <ul>
            <Experience
              date="2002 - 2006"
              organization="Hong Kong Baptist University"
              post="Master of Philosophy in Computer Science"
            >
              Focusing in GSM and Wi-Fi based positioning technologies.
            </Experience>
            <Experience
              date="1999 - 2002"
              organization="Hong Kong Baptist University"
              post="Bachelor of Science in Computer Science (Computer Systems)"
            />
          </ul>
        </Section>
        <Section icon="Repair" title="Skills and expertize">
          <div className="three-columns">
            <div className="column">
              <h1>Frontend</h1>
              <Skill title="HTML" star="4" />
              <Skill title="CSS" star="4" />
              <Skill title="React" star="4" />
              <Skill title="React Native" star="2" />
              <Skill title="Redux" star="3" />
              <Skill title="jQuery" star="4" />
              <h1>Backend</h1>
              <Skill title="Node.js" star="4" />
              <Skill title="MongoDB" star="2" />
              <h1>Language</h1>
              <Skill title="ES2017" star="4" />
              <Skill title="C#" star="4" />
              <Skill title="TypeScript" star="2" />
              <Skill title="XAML" star="3" />
            </div>
            <div className="spacer" />
            <div className="column">
              <h1>Azure</h1>
              <Skill title="ARM" star="4" />
              <Skill title="Web App" star="5" />
              <Skill title="Mobile App" star="3" />
              <Skill title="VNet + VPN" star="3" />
              <Skill title="Storage" star="4" />
              <Skill title="IoT Hub" star="3" />
              <Skill title="Cloud Service" star="3" />
              <Skill title="Functions" star="1" />
              <Skill title="Media Service" star="1" />
            </div>
            <div className="spacer" />
            <div className="column">
              <h1>Toolchain</h1>
              <Skill title="Git + GitHub" star="4" />
              <Skill title="Mocha/BDD" star="3" />
              <Skill title="Gulp" star="4" />
              <Skill title="Webpack.js" star="3" />
              <Skill title="rollup.js" star="2" />
              <Skill title="Yeoman" star="3" />
              <Skill title="VS Code" star="4" />
              <Skill title="VSTS" star="4" />
              <Skill title="VSTS Build" star="5" />
              <h1>Process</h1>
              <Skill title="Scrum" star="4" />
              <Skill title="UX FnF" star="3" />
              <Skill title="Localization" star="5" />
            </div>
          </div>
        </Section>
      </div>
    );
  }
}
