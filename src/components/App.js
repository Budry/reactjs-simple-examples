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
import Link from './Link';
import Router from './Router';

const App = ({routes, index}) => {
  return (
    <div>
      <Link to="/">Show Index page</Link>
      {" "}
      <Link to="/about" style={{color: "red"}}>Show About page</Link>
      <br/>
      <br/>
      <Router routes={routes} index={index}/>
    </div>
  );
};

App.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    component: PropTypes.func.isRequired
  })).isRequired,
  index: PropTypes.shape({
    path: PropTypes.string.isRequired,
    component: PropTypes.func.isRequired
  }).isRequired
};

export default App;