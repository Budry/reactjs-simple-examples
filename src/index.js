/**
 * This file is part of the example-app package.
 *
 * (c) Ondřej Záruba <info@zaruba-ondrej.cz>
 *
 * For the full copyright and license information, please view the license.md
 * file that was distributed with this source code.
 */

import React from 'react'
import {render} from 'react-dom'
import Index from './pages/Index';
import App from './components/App';
import About from './pages/About';

const routes = [
  {path: '/', component: Index},
  {path: '/about', component: About}
];

render(<App routes={routes} index={routes[0]}/>, document.getElementById('app'));