import packagesMain from './packages/index';
import registerServiceWorker from './registerServiceWorker';
import resumeMain from './resume';

registerServiceWorker();

const { location: { pathname, search } } = window;
const searchParams = new URLSearchParams(search);

if (
  search === '?packages'
  || pathname === '/packages'
  || pathname === '/packages.html'
) {
  packagesMain();
} else {
  resumeMain();
}

const githubAccessToken = searchParams.get('github_access_token');

if (githubAccessToken) {
  localStorage.setItem('GITHUB_ACCESS_TOKEN', githubAccessToken);
}
