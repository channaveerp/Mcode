// import React, { useRef, useState } from "react";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css"; // Import styles
// import "./index.css";

// const RichText = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle submission logic here
//   };

//   return (
//     <div className='create-post-container'>
//       <h2>Create a Post</h2>
//       <form onSubmit={handleSubmit}>
//         <div className='editor-wrapper'>
//           <RichTextEditor />
//         </div>
//         <button type='submit'>Submit</button>
//       </form>
//     </div>
//   );
// };

// export default RichText;

// const RichTextEditor = () => {
//   const [editorHtml, setEditorHtml] = useState("");
//   console.log("CONTENT", editorHtml);
//   const quillRef = useRef(null);

//   const handleChange = (html) => {
//     setEditorHtml(html);
//   };

//   const handleFormat = (format) => {
//     const editor = quillRef.current?.getEditor();
//     if (editor) {
//       const range = editor.getSelection();
//       if (range) {
//         editor.format(format, true);
//       }
//     }
//   };

//   const handleSave = () => {
//     console.log(editorHtml); // Save or process editorHtml as needed
//   };

//   const handleHeaderClick = () => {
//     handleFormat("header");
//   };

//   const handleBlockquoteClick = () => {
//     handleFormat("blockquote");
//   };

//   const handleCodeBlockClick = () => {
//     handleFormat("code-block");
//   };

//   const formats = [
//     "bold",
//     "italic",
//     "underline",
//     "strike", // Basic text formats
//     "header",
//     "blockquote",
//     "code-block", // Additional formats for quote block and code block
//   ];

//   const modules = {
//     toolbar: {
//       container: [
//         // [{ header: "1" }, { header: "2" }],
//         [{ header: "custom" }], // Custom heading button
//         ["bold", "italic", "underline", "strike"],
//         [{ list: "ordered" }, { list: "bullet" }],
//         ["blockquote", "code-block"], // Quote block and code block options
//         ["link", "image"],
//         ["clean"],
//       ],
//       handlers: {
//         header: handleHeaderClick, // Handler for custom heading button
//         blockquote: handleBlockquoteClick, // Handler for quote block button
//         "code-block": handleCodeBlockClick, // Handler for code block button
//       },
//     },
//   };

//   return (
//     <div className='editor-container'>
//       <ReactQuill
//         theme='snow'
//         value={editorHtml}
//         onChange={handleChange}
//         modules={
//           modules
//           //   {
//           //   toolbar: [
//           //     [{ header: "1" }, { header: "2" }],
//           //     [{ size: [] }],
//           //     ["bold", "italic", "underline", "strike", "blockquote"],
//           //     [
//           //       { list: "ordered" },
//           //       { list: "bullet" },
//           //       { indent: "-1" },
//           //       { indent: "+1" },
//           //     ],
//           //     ["link"],
//           //     ["clean"],
//           //   ],
//           // }
//         }
//         formats={formats}
//       />
//     </div>
//   );
// };

import React, { useState } from "react";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./index.css"; // Custom CSS for any additional styling

const RichText1 = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const handleEditorChange = (state) => {
    setEditorState(state);
  };

  const addTable = () => {
    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState);
    const tableBlock = {
      type: "table",
      data: {
        rows: 3,
        cols: 3,
      },
      entityRanges: [],
      inlineStyleRanges: [],
      depth: 0,
      key: `${rawContentState.blocks.length}`,
      text: "",
      characterList: [],
    };
    const newRawContentState = {
      ...rawContentState,
      blocks: [...rawContentState.blocks, tableBlock],
    };
    const newContentState = convertFromRaw(newRawContentState);
    const newEditorState = EditorState.push(
      editorState,
      newContentState,
      "insert-table"
    );
    setEditorState(newEditorState); // Update editor state after modifying content
  };

  return (
    <div className='editor-container'>
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorChange}
        toolbar={{
          options: ["inline", "blockType", "list", "link", "history"],
          inline: {
            options: [
              "bold",
              "italic",
              "underline",
              "strikethrough",
              "superscript",
            ],
          },
          blockType: {
            inDropdown: true,
            options: ["Normal", "H1", "H2", "Blockquote", "Code"],
          },
          list: {
            inDropdown: true,
            options: ["unordered", "ordered"],
          },
          link: {
            inDropdown: true,
            options: ["link", "unlink"],
          },
          history: {
            inDropdown: true,
          },
          // Custom table insertion button
          insertTable: {
            icon: <span>{"{}"}</span>, // Replace with your table icon
            onClick: addTable,
            title: "Insert Table",
          },
        }}
      />
    </div>
  );
};

export default RichText1;
