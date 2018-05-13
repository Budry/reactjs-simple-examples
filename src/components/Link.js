/**
 * This file is part of the example-app package.
 *
 * (c) Ondřej Záruba <info@zaruba-ondrej.cz>
 *
 * For the full copyright and license information, please view the license.md
 * file that was distributed with this source code.
 */

import React from 'react';

const createLink = (to) => {
  return `#${to}`;
};

const Link = ({to, children, ...props}) => {
  return (
    <a {...props} href={createLink(to)}>{children}</a>
  );
};

export default Link;