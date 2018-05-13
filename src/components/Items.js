/**
 * This file is part of the example-app package.
 *
 * (c) Ondřej Záruba <info@zaruba-ondrej.cz>
 *
 * For the full copyright and license information, please view the license.md
 * file that was distributed with this source code.
 */

import React from 'react'
import PropTypes from 'prop-types'
import Item from './Item';

const Items = ({items, removeItem}) => {
  return (
    <ul>
      {items.map((item) => {
        return <Item id={item.id} text={item.text} removeItem={removeItem}/>
      })}
    </ul>
  )
};

Items.propTypes = {
  items:  PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  })).isRequired,
  removeItem: PropTypes.func.isRequired
};

export default Items;