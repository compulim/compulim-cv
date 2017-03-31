'use strict';

import Experience from './experience';

export default class Project extends React.Component {
  render() {
    return (
      <Experience
        from        ={ this.props.from }
        to          ={ this.props.to }
        organization={ this.props.title }
        verticalDate={ true }
      >
        { this.props.children }
      </Experience>
    );
  }
};
