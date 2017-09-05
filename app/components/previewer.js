import React from 'react';
import Marked from 'marked';

const Previewer = ({content}) => {
  return (
    <div>
      <h1>Previewer</h1>
      <div>{Marked(content)}</div>
    </div>
  );
};

export default Previewer;
