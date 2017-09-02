import React, { Component } from 'react';

class Editor extends Component {
  constructor(props) {
    super(props);

    this.state = { content: '' };
  }

  render() {
    return (
      <div>
        <h1>Editor</h1>
        <textarea
          value={this.state.content}
          onChange={event => this.setState({content: event.target.value})} />
        <p>Editor input: {this.state.content}</p>
      </div>
    );
  }
};

export default Editor;
