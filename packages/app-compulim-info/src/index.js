import packagesMain from './packages/index';
import registerServiceWorker from './registerServiceWorker';
import resumeMain from './resume';

registerServiceWorker();

if (window.location.search === '?packages') {
  packagesMain();
} else {
  resumeMain();
}
