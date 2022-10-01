import { css } from '@emotion/css';
import React from 'react';

import Badge from './Badge';

const HAS_STAR_CSS = css({
  backgroundColor: 'Orange'
});

const HYPERLINK_CSS = css({
  color: 'White',
  textDecoration: 'none'
});

export default class GitHubnumStarss extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numStars: null
    };
  }

  componentWillMount() {
    const { owner, name } = this.props;

    this.fetchStars(owner, name);
  }

  componentWillReceiveProps(nextProps) {
    const { owner, name } = this;

    const { owner: nextOwner, name: nextName } = nextProps;

    if (owner !== nextOwner || name !== nextName) {
      this.fetchStars(nextOwner, nextName);
    }
  }

  async fetchStars(owner, name) {
    if (!owner || !name) {
      return;
    }

    const url = new URL(`https://api.github.com/repos/${encodeURI(owner)}/${encodeURI(name)}/stargazers`);
    const githubAccessToken = localStorage.getItem('GITHUB_ACCESS_TOKEN');

    if (githubAccessToken) {
      url.search = new URLSearchParams({ access_token: githubAccessToken });
    }

    const res = await fetch(url.toString());

    if (res.status !== 200) {
      return;
    }

    const stargazers = await res.json();
    const numStars = stargazers.length;

    this.setState(() => ({ numStars }));
  }

  render() {
    const { props, state } = this;

    return (
      typeof state.numStars === 'number' && (
        <Badge className={state.numStars && HAS_STAR_CSS}>
          {
            <a
              className={HYPERLINK_CSS}
              href={`https://github.com/${encodeURI(props.owner)}/${encodeURI(props.name)}/stargazers`}
              target="_blank"
            >
              {state.numStars || 'No'} star{state.numStars !== 1 && 's'}
            </a>
          }
        </Badge>
      )
    );
  }
}
