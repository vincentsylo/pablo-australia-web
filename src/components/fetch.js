import React, { Component } from 'react';
import PropTypes from 'prop-types';
import hoistStatics from 'hoist-non-react-statics';

export default function fetch(fn) {
  return (WrappedComponent) => {
    class Fetch extends Component {
      static fetch = fn;

      static contextTypes = {
        store: PropTypes.object,
      };

      state = {
        prefetchedData: null,
      };

      componentWillMount() {
        const { store } = this.context;
        const { prefetchedData } = store.getState();
        this.setState({ prefetchedData });
      }

      render() {
        const { prefetchedData } = this.state;
        return <WrappedComponent {...prefetchedData} {...this.props} />;
      }
    }

    return hoistStatics(Fetch, WrappedComponent);
  };
}
