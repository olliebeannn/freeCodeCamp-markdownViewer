import React, { Component } from 'react';
import marked from 'marked';
marked.setOptions({
  gfm: true,
  breaks: true,
  sanitize: false
});

class Previewer extends Component {
  createMarkup() {
    return { __html: marked(this.props.content) };
  }

  render() {
    return (
      <div className="col-sm-6 previewer">
        <h4>Previewer</h4>
        <div dangerouslySetInnerHTML={this.createMarkup()} />
      </div>
    )
  }
}

export default Previewer;
