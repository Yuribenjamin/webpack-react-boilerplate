import React from 'react';
import PropTypes from 'prop-types';

export default class DefaultErrorBoundary extends React.Component {
  state = {
    isError: false
  };

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { isError: true };
  }

  static get propTypes() {
    return {
      children: PropTypes.node.isRequired
    };
  }

  render() {
    const { isError } = this.state;
    const { children } = this.props;
    return isError ? <div>Something went wrong</div> : children;
  }
}
