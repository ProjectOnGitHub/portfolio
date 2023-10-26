import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './_Editor.scss';

function Editor({ currentValue, name, handleChangeInput }) {
  function handleEditorChange(value) {
    handleChangeInput({
      target: {
        name,
        value,
      },
    });
  }
  const modules = {
    toolbar: [
      [{ header: [2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ align: [] }],
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
      value={currentValue || ''}
      onChange={handleEditorChange}
    />
  );
}

export default Editor;
