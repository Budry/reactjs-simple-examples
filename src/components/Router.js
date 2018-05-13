/**
 * This file is part of the example-app package.
 *
 * (c) Ondřej Záruba <info@zaruba-ondrej.cz>
 *
 * For the full copyright and license information, please view the license.md
 * file that was distributed with this source code.
 */

import React from 'react';
import PropTypes from 'prop-types';

class Router extends React.Component {

  static propTypes = {
    routes: PropTypes.arrayOf(PropTypes.shape({
      path: PropTypes.string.isRequired,
      component: PropTypes.func.isRequired
    })).isRequired,
    index: PropTypes.shape({
      path: PropTypes.string.isRequired,
      component: PropTypes.func.isRequired
    }).isRequired
  };

  state = {
    page: null
  };

  componentDidMount() {
    window.addEventListener('hashchange', this.handleRouteChange);
    window.addEventListener('load', this.handleRouteChange);
  }

  handleRouteChange = (e) => {
    const availableRoutes = this.props.routes.filter((route) => {
      return route.path === location.hash.slice(1);
    });
    if (availableRoutes.length) {
      this.setState({page: availableRoutes[0].component});
    }
  };

  render() {
    const Page = this.state.page;
    const Index = this.props.index.component;
    return this.state.page ? <Page/> : <Index />
  }
}

export default Router;