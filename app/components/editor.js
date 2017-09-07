import React from 'react';

const Editor = ({content, onContentChange}) => {
  return (
    <div className="col-sm-6 editor">
      <h4>Editor</h4>
      <textarea
        value={content}
        onChange={(event) => onContentChange(event.target.value)} />
    </div>
  );
};

export default Editor;
