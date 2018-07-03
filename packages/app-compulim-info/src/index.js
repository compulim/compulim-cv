import packagesMain from './packages/index';
import registerServiceWorker from './registerServiceWorker';
import resumeMain from './resume';

registerServiceWorker();

if (window.location.pathname === '/packages') {
  packagesMain();
} else {
  resumeMain();
}
