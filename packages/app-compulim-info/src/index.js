import packagesMain from './packages/index';
import renderResume from './resume/renderResume';

const { location: { pathname, search } } = window;
const searchParams = new URLSearchParams(search);

if (
  search === '?packages'
  || pathname === '/packages'
  || pathname === '/packages.html'
) {
  packagesMain();
} else {
  renderResume();
}

// const githubAccessToken = searchParams.get('github_access_token');

// if (githubAccessToken) {
//   localStorage.setItem('GITHUB_ACCESS_TOKEN', githubAccessToken);
// }
