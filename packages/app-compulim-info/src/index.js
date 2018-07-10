import packagesMain from './packages/index';
import registerServiceWorker from './registerServiceWorker';
import resumeMain from './resume';

registerServiceWorker();

const { location: { pathname, search } } = window;

if (
  search === '?packages'
  || pathname === '/packages'
  || pathname === '/packages.html'
) {
  packagesMain();
} else {
  resumeMain();
}
