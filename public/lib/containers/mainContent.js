'use strict'

import { css } from 'glamor';
import Experience from './mainContent/experience';
import Section from './mainContent/section';

const BOX = css({
  backgroundColor: 'White',
  flex           : 7,
  height         : '100%',
  minHeight      : '100%'
});

export default class MainContent extends React.Component {
  render() {
    return (
      <div { ...BOX }>
        <Section title="Work experience">
          <ul>
            <Experience
              date="2011 Nov - Present"
              organization="C&amp;R Holdings Limited"
              post="Solution Architect"
            >
              This is my job responsibilities.
            </Experience>
            <Experience
              date="2006 Sep - 2011 Jul"
              organization="Microsoft Corporation"
              post="Software Development Engineer II"
            >
              This is my job responsibilities.
            </Experience>
            <Experience
              date="2005 Sep - 2006 Aug"
              organization="Microsoft Hong Kong Limited"
              post="Software Design Engineer"
            >
              This is my job responsibilities.
            </Experience>
          </ul>
        </Section>
        <Section title="Education">
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
