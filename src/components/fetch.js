import React, { Component } from 'react';
import PropTypes from 'prop-types';
import hoistStatics from 'hoist-non-react-statics';
import _ from 'lodash';

export default function fetch(fn) {
  return (WrappedComponent) => {
    class Fetch extends Component {
      static fetch = fn;

      static contextTypes = {
        store: PropTypes.object,
      };

      state = {
        data: null,
        fetching: false,
      };

      componentWillMount() {
        const { store } = this.context;
        const { match } = this.props;
        const { prefetchedData } = store.getState();

        if (match) {
          if (prefetchedData[match.path]) {
            this.setState({ data: prefetchedData[match.path] });
          } else {
            this.fetch();
          }
        } else {
          this.setState({ data: this.props });
        }
      }

      componentDidMount() {
        this.fetch();
      }

      fetch() {
        this.setState({ fetching: true }, async () => {
          const fetchedData = await fn();
          this.setState({ data: fetchedData, fetching: false });
        });
      }

      render() {
        const { data, fetching } = this.state;
        if (!data || fetching) return null;

        return <WrappedComponent {...data} {...this.props} />;
      }
    }

    return hoistStatics(Fetch, WrappedComponent);
  };
}
