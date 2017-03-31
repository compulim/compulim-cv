'use strict';

import { css, insertGlobal } from 'glamor';
import SideBar from './containers/sideBar';
import MainContent from './containers/mainContent';

insertGlobal('html, body, #reactRoot', {
  backgroundColor: '#F7F7F7',
  fontSize       : 16,
  height         : '100%',
  minHeight      : '100%'
});

insertGlobal('body', {
  fontFamily: `Calibri, 'Helvetica Neue', Arial, sans-serif`,
  margin    : 0,
  minHeight : '100%'
});

const BOX = css({
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
