import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './_Editor.scss';

function Editor({ currentValue }) {
  const [newValue, setNewValue] = useState('');
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ align: [] }],
      ['link'],
      ['blockquote', 'code-block'],
      ['clean'],
    ],
  };
  return (
    <ReactQuill
      className="editor"
      modules={modules}
      placeholder="Введите описание..."
      theme="snow"
      value={currentValue || newValue}
      onChange={setNewValue}
    />
  );
}

export default Editor;
