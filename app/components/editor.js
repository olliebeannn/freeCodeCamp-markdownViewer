import React from 'react';

const Editor = ({content, onContentChange}) => {
  return (
    <div>
      <h1>Editor</h1>
      <textarea
        value={content}
        onChange={(event) => onContentChange(event.target.value)} />
    </div>
  );
};

export default Editor;
