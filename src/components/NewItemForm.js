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

class NewItemForm extends React.Component {

  static propTypes = {
    addItem: PropTypes.func.isRequired
  };

  state = {
    text: ''
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({text: e.target.value})
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.text);
    this.setState({text: ''});
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.text} onChange={this.handleChange} />
        <button type="submit">Add item</button>
      </form>
    );
  }
}

export default NewItemForm;