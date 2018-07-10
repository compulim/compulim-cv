import { css } from 'glamor';
import React   from 'react';

import Badge from './Badge';

const HAS_ISSUE_CSS = css({
  backgroundColor: 'Red'
});

const HYPERLINK_CSS = css({
  color         : 'White',
  textDecoration: 'none'
});

export default class GitHubNumIssues extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numIssues: null
    }
  }

  componentWillMount() {
    const {
      owner,
      name
    } = this.props;

    this.fetchIssues(owner, name);
  }

  componentWillReceiveProps(nextProps) {
    const {
      owner,
      name
    } = this;

    const {
      owner: nextOwner,
      name: nextName
    } = nextProps;

    if (
      owner !== nextOwner
      || name !== nextName
    ) {
      this.fetchIssues(nextOwner, nextName);
    }
  }

  async fetchIssues(owner, name) {
    if (!owner || !name) {
      return;
    }

    const url = new URL(`https://api.github.com/repos/${ encodeURI(owner) }/${ encodeURI(name) }/issues`);
    const githubAccessToken = localStorage.getItem('GITHUB_ACCESS_TOKEN');

    if (githubAccessToken) {
      url.search = new URLSearchParams({ access_token: githubAccessToken });
    }

    const res = await fetch(url.toString())

    if (res.status !== 200) {
      return;
    }

    const issues = await res.json();
    const numIssues = issues.filter(issue => !issue.pull_request).length;
    const numPulls = issues.length - numIssues;

    this.setState(() => ({
      numIssues,
      numPulls
    }));
  }

  render() {
    const { props, state } = this;

    return (
      typeof state.numIssues === 'number' &&
        <Badge className={ state.numIssues && HAS_ISSUE_CSS }>
          {
            state.numIssues ?
              <a
                className={ HYPERLINK_CSS }
                href={ `https://github.com/${ encodeURI(props.owner) }/${ encodeURI(props.name) }/issues` }
                target="_blank"
              >
                { state.numIssues || 'No' } issue{ state.numIssues !== 1 && 's' }
              </a>
            :
              props.children(state)
          }
        </Badge>
    );
  }
}
