import React, { useState } from "react";
import {
  Editor,
  EditorState,
  RichUtils,
  convertToRaw,
  Modifier,
  DefaultDraftBlockRenderMap,
} from "draft-js";
import "draft-js/dist/Draft.css";

const DraftJS = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  // Define a custom block render map to control block element types
  const blockRenderMap = DefaultDraftBlockRenderMap.merge({
    "header-one": { element: "h1" },
    "header-two": { element: "h2" },
    blockquote: { element: "blockquote" },
    "code-block": { element: "pre" },
  });

  // Handle key commands like bold, italic, underline, etc.
  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      setEditorState(newState);
      return "handled";
    }

    return "not-handled";
  };

  // Toggle inline styles like bold, italic, underline, etc.
  const toggleInlineStyle = (style) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  // Toggle block types like headers, blockquote, code block, etc.
  const toggleBlockType = (blockType) => {
    setEditorState(RichUtils.toggleBlockType(editorState, blockType));
  };

  // Convert editor content to Markdown format
  const convertToMarkdown = () => {
    const contentState = editorState.getCurrentContent();
    const markdownText = convertToRaw(contentState);
    console.log(markdownText);
  };

  return (
    <div>
      <div>
        {/* Buttons to toggle inline styles */}
        <button onClick={() => toggleInlineStyle("BOLD")}>Bold</button>
        <button onClick={() => toggleInlineStyle("ITALIC")}>Italic</button>
        <button onClick={() => toggleInlineStyle("UNDERLINE")}>
          Underline
        </button>
        <button onClick={() => toggleInlineStyle("STRIKETHROUGH")}>
          Strikethrough
        </button>
        <button onClick={() => toggleInlineStyle("SUPERSCRIPT")}>
          Superscript
        </button>
        {/* Buttons to toggle block types */}
        <button onClick={() => toggleBlockType("header-one")}>Heading 1</button>
        <button onClick={() => toggleBlockType("header-two")}>Heading 2</button>
        <button onClick={() => toggleBlockType("blockquote")}>
          Quote Block
        </button>
        <button onClick={() => toggleBlockType("code-block")}>
          Code Block
        </button>
        {/* Button to log content as Markdown */}
        <button onClick={convertToMarkdown}>Log Content as Markdown</button>
      </div>
      <div
        style={{
          border: "1px solid #ccc",
          minHeight: "200px",
          padding: "10px",
        }}
      >
        <Editor
          editorState={editorState}
          onChange={setEditorState}
          handleKeyCommand={handleKeyCommand}
          blockRenderMap={blockRenderMap}
        />
      </div>
    </div>
  );
};

export default DraftJS;
