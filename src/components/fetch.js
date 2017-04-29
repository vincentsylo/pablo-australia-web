import React, { Component } from 'react';
import PropTypes from 'prop-types';
import hoistStatics from 'hoist-non-react-statics';

export default function fetch(fn) {
  return (WrappedComponent) => {
    class Fetch extends Component {
      static fetch = fn;

      static propTypes = {
        match: PropTypes.shape({
          path: PropTypes.string,
          params: PropTypes.shape({}),
        }),
      };

      static defaultProps = {
        match: null,
      };

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
            this.fetch(this.props.match.params);
          }
        } else {
          this.setState({ data: this.props });
        }
      }

      fetch(params) {
        this.setState({ fetching: true }, async () => {
          const fetchedData = await fn(params);
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
