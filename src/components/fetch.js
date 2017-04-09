import React, { Component, PropTypes } from 'react';
import _ from 'lodash';

export default function fetch(fn) {
  return WrappedComponent => {
    class Fetch extends Component {
      static fetch = fn;

      state = { data: null, fetching: false };

      async fetch(options) {
        const { handleFetching, handleError } = { handleFetching: true, handleError: true, ...options };

        const fetchId = _.uniqueId();
        this.fetchId = fetchId;

        window.clearInterval(this.timer);

        try {
          if (!handleFetching) this.setState({ fetching: true });

          const store = this.context.store;
          const { isLoggedIn, userDetails } = store.getState().user;
          let dp = localStorage.load('dp') || { sport: 0, racing: 0 };
          if (isLoggedIn) {
            dp = { sport: userDetails.sportDifferentialProfile, racing: userDetails.racingDifferentialProfile };
          }

          const data = await fn(this.params, store, dp, this.props);

          const componentRequestedData = this.component && (this.fetchId === fetchId);
          if (!componentRequestedData) return;

          this.setState({ data, error: null, fetching: false });
          this.poll();
        } catch (error) {
          console.error('Error fetching data', error); // eslint-disable-line
          const componentRequestedData = this.component && (this.fetchId === fetchId);
          if (!componentRequestedData) return;

          const status = _.get(error, 'response.status');
          if (status === 404 && _.isFunction(settings.redirectOnNotFound)) {
            settings.redirectOnNotFound(this.props.route.path, this.context.router.replace);
            return;
          }
          if (!handleFetching || !handleError) this.setState({ data: null, error, fetching: false });
          this.poll();
        }
      }

      handleRefresh(params, options) {
        this.params = { ...this.params, ...params };
        this.params = _.omitBy(this.params, param => param == null);

        return this.fetch(options);
      }

      render() {
        const { data, error, fetching } = this.state;
        const { handleFetching, handleError, loaderHeight } = settings;

        if (handleFetching && fetching) return <Loader ref={ref => { this.component = ref; }} height={loaderHeight} />;
        if (handleError && error) return <Error ref={ref => { this.component = ref; }} />;

        return <WrappedComponent ref={ref => { this.component = ref; }} {...this.props} {...data} error={error} fetching={fetching} refresh={::this.handleRefresh} />;
      }
    }

    return hoistStatics(Fetch, WrappedComponent);
  };
}
