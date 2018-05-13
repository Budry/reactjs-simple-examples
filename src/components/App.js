/**
 * This file is part of the example-app package.
 *
 * (c) Ondřej Záruba <info@zaruba-ondrej.cz>
 *
 * For the full copyright and license information, please view the license.md
 * file that was distributed with this source code.
 */

import React from 'react'
import NewItemForm from './NewItemForm';
import Items from './Items';

class App extends React.Component {

  state = {
    items: []
  };

  addItem = (item) => {
    this.setState({
      items: [...this.state.items, item]
    });
  };

  removeItem = (id) => {
    const items = this.state.items.slice();
    items.splice(id, 1);
    this.setState({items: items});
  };

  render() {

    const parsedItems = this.state.items.map((item, id) => {
      return {
        id: id,
        text: item
      }
    });

    return (
      <div>
        <NewItemForm addItem={this.addItem}/>
        <Items items={parsedItems} removeItem={this.removeItem}/>
      </div>
    );
  }
}

export default App;