import React, { Component } from 'react';

import CreateLinkMutation from '../mutations/CreateLinkMutation';

class CreateLink extends Component {
  state = {
    description: '',
    url: ''
  }

  render() {
    return (
      <div>
        <div>
          <input
            onChange={e => this.setState({description: e.target.value})}
            placeholder='Decription'
            type='text'
            value={this.state.description}
           />
        </div>
        <div>
          <input
            onChange={e => this.setState({url: e.target.value})}
            placeholder='URL'
            type='text'
            value={this.state.url}
           />
        </div>
        <div>
          <button onClick={this._createLink}>
            Submit
          </button>
        </div>
      </div>
    );
  }

  _createLink = () => {
    const { description, url } = this.state;
    CreateLinkMutation(description, url, () => this.props.history.push('/'));
    this.setState({
      description: '',
      url: ''
    });
  }
}

export default CreateLink;
