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

const Item = ({id, text, removeItem}) => {

  const handleClick = (e) => {
    e.preventDefault();
    removeItem(id);
  };

  return (
    <li>
      {id}. {text}
      {' '}
      <a href="" onClick={handleClick}>Remove</a>
    </li>
  );
};

Item.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  removeItem: PropTypes.func
};

export default Item;