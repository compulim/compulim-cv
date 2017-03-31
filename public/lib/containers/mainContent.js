'use strict'

import { css } from 'glamor';
import Experience from './mainContent/experience';
import PersonalTitle from './mainContent/personalTitle';
import Section from './mainContent/section';

const BOX = css({
  backgroundColor: 'White',
  flex           : 7,
  paddingLeft    : 40,
  paddingRight   : 60,
  minHeight      : '100%'
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
        <Section icon="Glasses" title="Education">
          <ul>
            <Experience
              date="2002 - 2006"
              organization="Hong Kong Baptist University"
              post="M.Phil in Computer Science"
            />
            <Experience
              date="1999 - 2002"
              organization="Hong Kong Baptist University"
              post="B.Sc in Computer Science (Computer Systems)"
            />
          </ul>
        </Section>
      </div>
    );
  }
}
