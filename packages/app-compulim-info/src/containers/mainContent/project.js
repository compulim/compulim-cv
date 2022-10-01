import React from 'react';

import Experience from './experience';

export default class Project extends React.Component {
  render() {
    let { subTitle } = this.props;

    if (/^https?:\/\//.test(subTitle)) {
      subTitle = React.createElement('a', { href: subTitle, target: '_blank' }, subTitle);
    }

    return (
      <Experience
        from={this.props.from}
        to={this.props.to}
        organization={this.props.title}
        post={subTitle}
        verticalDate={true}
      >
        {this.props.children}
      </Experience>
    );
  }
}
