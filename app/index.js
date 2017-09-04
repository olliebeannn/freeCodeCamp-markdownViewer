import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Editor from './components/editor';
import Previewer from './components/previewer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: 'testing'
    }
  }

  render() {
    return (
      <div>
        <Editor
          content={this.state.content}
          onContentChange={(content) => this.setState({content})} />
        <Previewer content={this.state.content} />
      </div>
    );
  }
}

ReactDOM.render(<App />, app);
