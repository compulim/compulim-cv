'use strict';

import { css, insertGlobal } from 'glamor';
import SideBar from './containers/sideBar';
import MainContent from './containers/mainContent';
import * as Styles from './styles';

insertGlobal('html, body, #reactRoot', {
  backgroundColor: '#EEE',
  fontSize       : 16,
  minHeight      : '100%'
});

insertGlobal('body', {
  fontFamily: Styles.BODY_FONT_FAMILY,
  margin    : 0,
  minHeight : '100%'
});

insertGlobal('@page', {
  margin: 0,
  size  : 'portrait'
});

const BOX = css({
  alignItems     : 'stretch',
  boxShadow      : '0 0 10px rgba(0, 0, 0, .2)',
  display        : 'flex',
  height         : '100%',
  minHeight      : '100%',
  margin         : '0 auto',
  width          : 1024
});

class Index extends React.Component {
  render() {
    return (
      <div { ...BOX }>
        <SideBar />
        <MainContent />
      </div>
    );
  }
}

const rootInstance = ReactDOM.render(
  <Index />,
  document.getElementById('reactRoot')
);

if (process.env.NODE_ENV !== 'production' && module.hot) {
  require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
    getRootInstances: function () {
      // Help React Hot Loader figure out the root component instances on the page:
      return [rootInstance];
    }
  });
}
