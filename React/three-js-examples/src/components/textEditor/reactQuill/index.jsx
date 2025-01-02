import React, { useRef, useState } from "react";
import "./index.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const ReactQuillEditor = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission logic here
  };

  const [value, setValue] = useState("");
  return (
    <div className='create-post-container'>
      <h2>Create a Post</h2>
      <ReactQuill theme='snow' value={value} onChange={setValue} />;
      {/* <form onSubmit={handleSubmit}>
        <div className='editor-wrapper'>
          <RichTextEditor />
        </div>
        <button type='submit'>Submit</button>
      </form> */}
    </div>
  );
};

export default ReactQuillEditor;

const RichTextEditor = () => {
  const [editorHtml, setEditorHtml] = useState("");
  console.log("CONTENT", editorHtml);
  const quillRef = useRef(null);

  const handleChange = (html) => {
    setEditorHtml(html);
  };

  const handleFormat = (format) => {
    const editor = quillRef.current?.getEditor();
    if (editor) {
      const range = editor.getSelection();
      if (range) {
        editor.format(format, true);
      }
    }
  };

  const handleSave = () => {
    console.log(editorHtml); // Save or process editorHtml as needed
  };

  const handleHeaderClick = () => {
    handleFormat("header");
  };

  const handleBlockquoteClick = () => {
    handleFormat("blockquote");
  };

  const handleCodeBlockClick = () => {
    handleFormat("code-block");
  };

  const formats = [
    "bold",
    "italic",
    "underline",
    "strike", // Basic text formats
    "header",
    "blockquote",
    "code-block", // Additional formats for quote block and code block
  ];

  const modules = {
    toolbar: {
      container: [
        // [{ header: "1" }, { header: "2" }],
        [{ header: "custom" }], // Custom heading button
        ["bold", "italic", "underline", "strike"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["blockquote", "code-block"], // Quote block and code block options
        ["link", "image"],
        ["clean"],
      ],
      handlers: {
        header: handleHeaderClick, // Handler for custom heading button
        blockquote: handleBlockquoteClick, // Handler for quote block button
        "code-block": handleCodeBlockClick, // Handler for code block button
      },
    },
  };

  return (
    <div className='editor-container'>
      <ReactQuill
        theme='snow'
        value={editorHtml}
        onChange={handleChange}
        modules={
          modules
          //   {
          //   toolbar: [
          //     [{ header: "1" }, { header: "2" }],
          //     [{ size: [] }],
          //     ["bold", "italic", "underline", "strike", "blockquote"],
          //     [
          //       { list: "ordered" },
          //       { list: "bullet" },
          //       { indent: "-1" },
          //       { indent: "+1" },
          //     ],
          //     ["link"],
          //     ["clean"],
          //   ],
          // }
        }
        formats={formats}
      />
    </div>
  );
};
