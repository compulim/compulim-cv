'use strict';

import Experience from './experience';

export default class Project extends React.Component {
  render() {
    return (
      <Experience
        date={ this.props.date }
        organization={ this.props.title }
      >
        { this.props.children }
      </Experience>
    );
  }
};
