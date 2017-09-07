import React, { Component } from 'react';
import marked from 'marked';
marked.setOptions({sanitize: false});

class Previewer extends Component {
  createMarkup() {
    return { __html: marked(this.props.content) };
  }

  render() {
    return (
      <div>
        <h1>Previewer</h1>
        <div dangerouslySetInnerHTML={this.createMarkup()} />
      </div>
    )
  }
}

export default Previewer;
