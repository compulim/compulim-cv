'use strict'

import { css } from 'glamor';
import Experience from './mainContent/experience';
import PersonalTitle from './mainContent/personalTitle';
import Project from './mainContent/project';
import Section from './mainContent/section';
import Skill from './mainContent/skill';
import SkillColumn from './mainContent/skillColumn';

const SHOW_MORE_PROJECTS = false;

const BOX = css({
  backgroundColor: 'White',
  flex           : 7,
  paddingLeft    : 40,
  paddingRight   : 60,
  minHeight      : '100%',

  '& .skills': {
    position: 'relative',

    '& > .three-columns': {
      display   : 'flex',
      paddingTop: 20,
      width     : '100%',

      '& > .spacer': {
        flex: .2
      },

      '& > .column': {
        flex: 1
      }
    },

    '& .icon': {
      backgroundColor: 'White',
      border         : 'solid 2px Black',
      borderRadius   : 10,
      height         : 10,
      left           : -48,
      position       : 'absolute',
      bottom         : 18,
      width          : 10
    },

    '& .clear-line': {
      backgroundColor: 'White',
      height         : 25,
      left           : -48,
      position       : 'absolute',
      bottom         : 0,
      width          : 14
    },
  },

  '& > .puller': {
    pageBreakBefore: 'always'
  }
});

export default class MainContent extends React.Component {
  render() {
    return (
      <div { ...BOX }>
        <PersonalTitle name="William Wong">
          <p>A full stack developer with more than 15 years of professional software development.</p>
          <p>Enjoy self-learning, visualizing data, and realizing ideas.</p>
        </PersonalTitle>
        <Section icon="Work" title="Work experience" { ...css({ paddingTop: 0, pageBreakInside: 'avoid' }) }>
          <ul>
            <Experience
              from="Nov 2011"
              to="Present"
              organization="C&amp;R Holdings Limited"
              post="Solution Architect"
            >
              Lead the company technical direction and solve complex problems with creative solution.
            </Experience>
            <Experience
              from="Sep 2006"
              to="Jul 2011"
              organization="Microsoft Corporation"
              post="Software Development Engineer II"
            >
              Shipped OneDrive and Team Foundation Server.
            </Experience>
            <Experience
              from="Sep 2005"
              to="Aug 2006"
              organization="Microsoft (Hong Kong) Limited"
              post="Software Design Engineer"
            >
            </Experience>
            <Experience
              from="Sep 2002"
              to="Nov 2005"
              organization="Hong Kong Baptist University"
              post="Project Assistant"
            >
            </Experience>
          </ul>
        </Section>
        <Section icon="FavoriteList" title="Project highlights">
          <ul>
            <Project
              from="Feb 2016"
              to="Present"
              title="Public speaking and meetups"
            >
              <p>Trainer of Azure Bootcamp 2013 and 2015 and presented technical topics in multiple local meetup groups, including "Visual Studio Code extension authoring", "Integrating Alexa with Azure IoT Hub", "React Native and Swift integration", and "Introduction to Webpack". Actively participated in meetup groups, discovering latest technologies, adopting, and bringing values to customers.</p>
            </Project>
            {
              SHOW_MORE_PROJECTS &&
                <Project
                  from="Mar 2017"
                  title="Internal website enhancement for Hong Kong International Airport"
                >
                  <p>Co-developed and co-deployed the enhancement for internal website for Hong Kong International Airport. The website is powered by OpenText TeamSite, multiple Perl workflows and JavaScript form definitions are developed. Part of the website is upgraded with React/Redux and reverse-proxy is developed to wield production and hot-moduled development site together.</p>
                </Project>
            }
            <Project
              from="Nov 2016"
              to="Apr 2017"
              title="Mobile positioning app for Hong Kong Baptist University"
            >
              <p>Designed and developed an exhibition app with mobile positioning technologies from research group at Hong Kong Baptist University. Implemented in React Native, Redux, and MongoDB, supported on iOS and Android, and hosted on Windows Azure Web App, the solution talks to OpenWrt routers and positioning system, display kiosk information and exhibition map to enhance the visitors' experience.</p>
            </Project>
            <Project
              from="Oct 2016"
              title="Baggage management system for Hong Kong International Airport"
            >
              <p>Designed and developed web frontend for baggage management system using React, Redux, Webpack, Bootstrap, and MongoDB. The web app is able to find bags arrived seconds ago. Incoming data is very dynamic and accurate reporting is required. PDF reporting is achieved thru shipping Redux store to print server implemented in Node.js and rendered in PhantomJS.</p>
            </Project>
            {
              SHOW_MORE_PROJECTS &&
                <Project
                  from="May 2016"
                  href="http://www.hongkongairport.com/eng/sustainability/environmental-management/air-quality/current-api.html"
                  title="Air Quality sub-website for Hong Kong International Airport"
                >
                  <p>Designed and co-developed the air quality sub-website for Hong Kong International Airport. Using Azure App Service as the serverless infrastructure, the project consumes pollution data in SQLite and exports into JSON. To support IE8, charts are PNG and generated using Node.js and PhantomJS. The website is built using React, Redux, SystemJS, and Webpack and data store is designed to be consumable by other part of the website.</p>
                </Project>
            }
            <Project
              from="Mar 2016"
              title="Feasibility study with latest web technologies for Hong Kong Jockey Club"
            >
              <p>Co-designed and co-developed a high-performance web app prototype for Hong Kong Jockey Club using cutting edge technologies: HTML5, responsive layout using CSS3 flexbox, React, Redux, and Electron. Interface with MongoDB and Solace thru Node.js middleware. Focusing on high-performance, demonstrated the potential of using latest web technologies for internal web app with high volume of data exchange.</p>
            </Project>
            <Project
              from="Feb 2016"
              title="Tender proposal with Accenture"
            >
              <p>Worked with Accenture, Avanade, Fjord and PacificLink on a tender proposal for Hong Kong Jockey Club. Designed system architecture and involved in presentation preparation. Appointed as Frontend Architect Lead and steering committee member to lead the technical direction for the proposing project.</p>
            </Project>
            {
              SHOW_MORE_PROJECTS &&
                <Project
                  from="Oct 2016"
                  title="Board meeting system for Noble Group"
                >
                  <p>Developed board meeting app for Noble Group. Implemented in React Native and Redux, and supported on iPhone and iPad. Offline data are encrypted in AES for DRM. The app serves as a board meeting helper to show upcoming or past events, with agenda and PDF markups.</p>
                </Project>
            }
            {
              SHOW_MORE_PROJECTS &&
                <Project
                  from="Sep 2015"
                  title="Web-based digital signage management system for Hong Kong International Airport"
                >
                  <p>Co-designed and co-developed a web-based digital signage management system for Hong Kong International Airport. Implemented in jQuery, Knockout, React, and Reflux, the system manage thousands of signage at the airport. The original project is a big success. Multiple enhancements are done and part of the system is upgraded from jQuery to Knockout to React, ensure maintainability and future growth.</p>
                </Project>
            }
            {
              SHOW_MORE_PROJECTS &&
                <Project
                  from="Jul 2015"
                  title="Web-based garment workflow system for Esquel"
                >
                  <p>Co-developed frontend of garment workflow system for Esquel. Worked with design house on red lines and interactions. Implemented using React and Reflux, the web app is widely adopted in the company, from fashion designer to production manager to retail manager. Choosing from thousands of fabrics and buttons, production scheduling, and retail distribution. The system became the core of the company, reduced manual work, and enabled our customer to adapt to the fast changing world of fashion.</p>
                </Project>
            }
            {
              SHOW_MORE_PROJECTS &&
                <Project
                  from="Mar 2013"
                  to="Present"
                  title="Organizer and Trainer of Global Azure Bootcamp 2013, 2015, and 2017"
                >
                  <p>Organizer and trainer of Global Windows Azure Bootcamp 2013 and 2015, hosted simultaneously at 96 locations worldwide with 7,000+ participants, providing 400+ hours of training sessions.</p>
                </Project>
            }
            {
              SHOW_MORE_PROJECTS &&
                <Project
                  from="Feb 2015"
                  title="iPad photo catalog for fashion retails"
                >
                  <p>Designed and developed Cordova-based photo catalog app for fashion retails in Hong Kong. Hosted on Windows Azure with Node.js, the app serve picture and video online and offline. Multiple level of details is supported thru custom image slicing workflow written in Node.js and GraphicsMagick, enable customers to upload newspaper clips without blurry texts.</p>
                </Project>
            }
            {
              SHOW_MORE_PROJECTS &&
                <Project
                  from="Mar 2014"
                  title="Home automation system with VTech"
                >
                  <p>Co-designed and developed mobile app and IoT gateway for VTech. The home automation controls multiple proprietary IoT devices including door sensors and power outlets. Node.js is used on ARM-based IoT gateway and talk to Cordova-based mobile app thru AWS for channeling.</p>
                </Project>
            }
            {
              SHOW_MORE_PROJECTS &&
                <Project
                  from="Jun 2013"
                  title="Coupon management system for Hong Kong Jockey Club"
                >
                  <p>Co-developed mobile coupon system for Hong Kong Jockey Club using React, Reflux, and Bootstrap. The system integrates with Apple Passbook, emails, and printing system. The project is a big success and doubled coupon redemption rate.</p>
                </Project>
            }
            <Project
              from="Feb 2012"
              title="Electronic form app for Hong Kong International Airport"
            >
              <p>Developed electronic form app for Hong Kong International Airport, running on iPad, the PhoneGap/HTML5 app simulates traditional pen-and-paper data input. From performance review to customer services logbook to janitor patrol reports, enabled mobile workforce to conduct their work solely on iPad, saving 1,000+ papers daily.</p>
            </Project>
            {
              SHOW_MORE_PROJECTS &&
                <Project
                  from="Jan 2012"
                  title="Web accessibility improvements for Hong Kong International Airport"
                >
                  <p>Improved accessibility of Hong Kong International Airport web site, earned gold award from OGCIO, the Hong Kong government IT office.</p>
                </Project>
            }
            <Project
              from="Mar 2010"
              to="Jul 2011"
              title="OneDrive"
            >
              <ul>
                <li>Focused on highly visible UI on SkyDrive: pixel-perfect CSS tweaks, command bar, navigation bar, notification bar, and IE Jump List. Expertise on cross-browser behavior, RTL and localization. Also worked on asynchronous C# code to backend services.</li>
                <li>Enhanced file uploader with improved queue and error management, debugged memory leaks with WinDBG and SOSEX. The uploader is reused between Hotmail and SkyDrive.</li>
                <li>Beat time zone difference and collaborate with Microsoft Japan team to co-develop features and debug localized network layer issues.</li>
                <li>Achieved 80% code coverage, and migrated unit tests from NMock 2.0 to Moq.</li>
                <li>Owned VM base machine image and centralized nightly VM distribution, help cut down the cost to maintain VM machine individually. </li>
              </ul>
            </Project>
            {
              SHOW_MORE_PROJECTS &&
                <Project
                  from="Mar 2011"
                  to="Apr 2016"
                  title="KPI solution for Hong Kong International Airport"
                >
                  <p>Co-designed and co-developed a Key Performance Index solution for Hong Kong International Airport, targeting for iPod and iPhone, the system captures KPI from security screening process, to immigration check-in, to air bridge docking. It integrates with SMS gateway to provide real-time notification to business owners.</p>
                </Project>
            }
            <Project
              from="Sep 2006"
              to="Mar 2010"
              title="Visual Studio Team Foundation Server"
            >
              <ul>
                <li>Became the UI go-to person and Build Facilitating Developer. Promoted MVC pattern and TDD. Introduced prebuilt VMs to cut down forward integration turnaround time for the team.</li>
                <li>Designed and implemented caching and lazy rendering for complicated WinForm dialogs with 300+ controls. Intensive experiences with CLR profiling work.</li>
                <li>Developed LINQ-based Active Accessibility interop, improved unit tests performance, reliability, and reduced coding time from hours to average 30 minutes.</li>
              </ul>
            </Project>
            {
              SHOW_MORE_PROJECTS &&
                <Project
                  from="Aug 2006"
                  title="Information Kiosk System for Hong Kong Jockey Club"
                >
                  <p>Co-developed a mission critical multi-screen information kiosk using Managed C++ and C#. Deployed to 100+ sites, it enabled developers to design screens in WinForm with WYSIWYG support in Visual Studio, and cut down delivery time.</p>
                </Project>
            }
            {
              SHOW_MORE_PROJECTS &&
                <Project
                  from="2006"
                  title="Electronic Certificate POC for Macau Post"
                >
                  <p>Designed and developed POC for notarization and document signing with electronic certificate stored on Macau ID card. The project integrates with Microsoft Word and Macau Post and use 2D barcode for hardcopy verification.</p>
                </Project>
            }
            {
              SHOW_MORE_PROJECTS &&
                <Project
                  from="2006"
                  title="Electronic Form POC for Hong Kong Housing Department"
                >
                  <p>Prototyped an electronic form workflow using ASP.NET, BizTalk, InfoPath and Windows Mobile devices, and interoperate with DB2 CM, MQSeries, MQ Workflow, TIM/TAM and WebSEAL. The project is Microsoft first platform win in Hong Kong public departments.</p>
                </Project>
            }
            {
              SHOW_MORE_PROJECTS &&
                <Project
                  from="Sep 2005"
                  title="CRM System for Hong Kong Cable TV"
                >
                  <p>Partnered with ThoughtWorks to build CRM framework and exercised Agile software development with pair programming.</p>
                </Project>
            }
          </ul>
        </Section>
        <Section icon="Glasses" title="Education" { ...css({ pageBreakInside: 'avoid' }) }>
          <ul>
            <Experience
              from="Sep 2002"
              to="May 2006"
              organization="Hong Kong Baptist University"
              post="Master of Philosophy, Computer Science"
            >
              Research topic titled "Mobile Location Estimation Systems", with 3 journal articles and 3 conference papers.
            </Experience>
            <Experience
              from="Sep 1999"
              to="May 2002"
              organization="Hong Kong Baptist University"
              post="Bachelor of Science, Computer&nbsp;Science (Computer&nbsp;Systems)"
            >
              First-class Honors
            </Experience>
          </ul>
        </Section>
        <Section icon="Repair" title="Skills and expertize">
          <div className="skills">
            <div className="three-columns">
              <div className="column">
                <SkillColumn title="Frontend">
                  <Skill title="HTML" star="4" />
                  <Skill title="CSS" star="4" />
                  <Skill title="React" star="4" />
                  <Skill title="React Native" star="2" />
                  <Skill title="Redux" star="3" />
                  <Skill title="jQuery" star="4" />
                </SkillColumn>
                <SkillColumn title="Backend">
                  <Skill title="Node.js" star="4" />
                  <Skill title="Express" star="4" />
                  <Skill title="MongoDB" star="2" />
                </SkillColumn>
                <SkillColumn title="Language">
                  <Skill title="ES2017" star="4" />
                  <Skill title="C#" star="4" />
                </SkillColumn>
              </div>
              <div className="spacer" />
              <div className="column">
                <SkillColumn title="Azure">
                  <Skill title="ARM" star="4" />
                  <Skill title="Web App" star="5" />
                  <Skill title="Mobile App" star="3" />
                  <Skill title="VNet + VPN" star="3" />
                  <Skill title="Storage" star="4" />
                  <Skill title="IoT Hub" star="3" />
                  <Skill title="Cloud Service" star="3" />
                  <Skill title="Cortana Suite" star="2" />
                </SkillColumn>
              </div>
              <div className="spacer" />
              <div className="column">
                <SkillColumn title="Toolchain">
                  <Skill title="Git + GitHub" star="4" />
                  <Skill title="Gulp" star="4" />
                  <Skill title="Webpack" star="3" />
                  <Skill title="Yeoman" star="3" />
                  <Skill title="VS Code" star="4" />
                  <Skill title="VSTS" star="4" />
                  <Skill title="Mocha/BDD" star="3" />
                  <Skill title="Webdriver" star="3" />
                </SkillColumn>
                <SkillColumn title="Process">
                  <Skill title="Scrum" star="4" />
                  <Skill title="UX FnF" star="3" />
                  <Skill title="Localization" star="5" />
                  <Skill title="Accessibility" star="3" />
                </SkillColumn>
              </div>
            </div>
            <div className="clear-line" />
            <div className="icon" />
          </div>
        </Section>
        <div className="puller" />
      </div>
    );
  }
}
