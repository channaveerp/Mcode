// import React, { useRef, useState, useEffect } from "react";
// import "./index.css";

// const CustomRichTextEditor = () => {
//   const editorRef = useRef(null);
//   const [activeCommand, setActiveCommand] = useState({});
//   const [showLinkModal, setShowLinkModal] = useState(false);
//   const [linkText, setLinkText] = useState("");
//   const [linkUrl, setLinkUrl] = useState("");

//   useEffect(() => {
//     document.addEventListener("selectionchange", handleSelectionChange);
//     return () =>
//       document.removeEventListener("selectionchange", handleSelectionChange);
//   }, []);

//   const handleSelectionChange = () => {
//     const commands = [
//       "bold",
//       "italic",
//       "strikeThrough",
//       "superscript",
//       "blockquote",
//       "insertOrderedList",
//       "insertUnorderedList",
//       "formatBlock",
//       "createLink",
//     ];
//     const newActiveCommands = {};

//     commands.forEach((command) => {
//       if (document.queryCommandState(command)) {
//         newActiveCommands[command] = true;
//       }
//     });

//     const selection = window.getSelection();
//     if (selection && selection.rangeCount > 0) {
//       const blockElement = selection.anchorNode?.parentElement;
//       if (blockElement) {
//         if (blockElement.tagName === "H1") newActiveCommands.h1 = true;
//         if (blockElement.tagName === "H2") newActiveCommands.h2 = true;
//       }
//     }

//     setActiveCommand(newActiveCommands);
//   };

//   const handleCommand = (command, value = null) => {
//     document.execCommand(command, false, value);
//     handleSelectionChange();
//   };

//   const wrapSelectedTextWithTag = (tag, className) => {
//     const selection = window.getSelection();
//     if (selection.rangeCount > 0) {
//       const range = selection.getRangeAt(0);
//       const selectedText = range.extractContents();
//       const span = document.createElement(tag);
//       span.className = className;
//       span.appendChild(selectedText);
//       range.insertNode(span);
//       handleSelectionChange();
//     }
//   };

//   const openLinkModal = () => {
//     setShowLinkModal(true);
//   };

//   const createLink = () => {
//     const selection = window.getSelection();
//     if (selection.rangeCount > 0 && linkUrl) {
//       const range = selection.getRangeAt(0);
//       const anchor = document.createElement("a");
//       anchor.href = linkUrl;
//       anchor.target = "_blank";
//       anchor.appendChild(range.extractContents());
//       range.insertNode(anchor);
//       setShowLinkModal(false);
//       setLinkUrl("");
//       handleSelectionChange();
//     }
//   };

//   const logContent = () => {
//     console.log(editorRef.current.innerHTML);
//   };

//   const handlePaste = (event) => {
//     event.preventDefault();
//     const text = (event.clipboardData || window.clipboardData).getData("text");

//     const urlPattern = /(https?:\/\/[^\s]+)/g;
//     if (urlPattern.test(text)) {
//       const linkHtml = text.replace(
//         urlPattern,
//         (url) => `<a href="${url}" target="_blank">${url}</a>`
//       );
//       document.execCommand("insertHTML", false, linkHtml);
//     } else {
//       document.execCommand("insertText", false, text);
//     }
//   };

//   return (
//     <div className='rich-text-editor'>
//       <div className='toolbar'>
//         <button
//           className={activeCommand.bold ? "active" : ""}
//           onClick={() => handleCommand("bold")}
//         >
//           B
//         </button>
//         <button
//           className={activeCommand.italic ? "active" : ""}
//           onClick={() => handleCommand("italic")}
//         >
//           I
//         </button>
//         <button
//           className={activeCommand.strikeThrough ? "active" : ""}
//           onClick={() => handleCommand("strikeThrough")}
//         >
//           S
//         </button>
//         <button
//           className={activeCommand.superscript ? "active" : ""}
//           onClick={() => handleCommand("superscript")}
//         >
//           Sup
//         </button>
//         <button
//           className={activeCommand.h1 ? "active" : ""}
//           onClick={() => handleCommand("formatBlock", "H1")}
//         >
//           H1
//         </button>
//         <button
//           className={activeCommand.h2 ? "active" : ""}
//           onClick={() => handleCommand("formatBlock", "H2")}
//         >
//           H2
//         </button>
//         <button
//           className={activeCommand.blockquote ? "active" : ""}
//           onClick={() => handleCommand("formatBlock", "blockquote")}
//         >
//           Quote
//         </button>
//         <button
//           className={activeCommand.code ? "active" : ""}
//           onClick={() => handleCommand("formatBlock", "code")}
//         >
//           Code
//         </button>
//         <button
//           className={activeCommand.pre ? "active" : ""}
//           onClick={() => handleCommand("formatBlock", "pre")}
//         >
//           Code Block
//         </button>
//         <button
//           className={activeCommand.spoiler ? "active" : ""}
//           onClick={() => wrapSelectedTextWithTag("span", "spoiler")}
//         >
//           Spoiler
//         </button>
//         <button
//           className={activeCommand.insertOrderedList ? "active" : ""}
//           onClick={() => handleCommand("insertOrderedList")}
//         >
//           OL
//         </button>
//         <button
//           className={activeCommand.insertUnorderedList ? "active" : ""}
//           onClick={() => handleCommand("insertUnorderedList")}
//         >
//           UL
//         </button>
//         <button onClick={openLinkModal}>Link</button>
//       </div>

//       <div
//         className='editor'
//         ref={editorRef}
//         contentEditable
//         suppressContentEditableWarning={true}
//         onPaste={handlePaste}
//       ></div>

//       {showLinkModal && (
//         <div className='link-modal'>
//           <div className='modal-content'>
//             <label>Link Text</label>
//             <input
//               type='text'
//               value={linkText}
//               onChange={(e) => setLinkText(e.target.value)}
//             />
//             <label>Link URL</label>
//             <input
//               type='text'
//               value={linkUrl}
//               onChange={(e) => setLinkUrl(e.target.value)}
//             />
//             <button onClick={createLink}>Create Link</button>
//             <button onClick={() => setShowLinkModal(false)}>Cancel</button>
//           </div>
//         </div>
//       )}

//       <button onClick={logContent} className='log-btn'>
//         Log Content
//       </button>
//     </div>
//   );
// };

// export default CustomRichTextEditor;

import React, { useRef, useState, useEffect } from "react";
import "./index.css";

const CustomRichTextEditor = () => {
  const editorRef = useRef(null);
  const [activeCommand, setActiveCommand] = useState({});
  const [showLinkModal, setShowLinkModal] = useState(false);
  const [linkText, setLinkText] = useState("");
  const [linkUrl, setLinkUrl] = useState("");

  useEffect(() => {
    document.addEventListener("selectionchange", handleSelectionChange);
    return () =>
      document.removeEventListener("selectionchange", handleSelectionChange);
  }, []);

  const handleSelectionChange = () => {
    const commands = [
      "bold",
      "italic",
      "strikeThrough",
      "superscript",
      "blockquote",
      "insertOrderedList",
      "insertUnorderedList",
      "formatBlock",
      "createLink",
    ];
    const newActiveCommands = {};

    commands.forEach((command) => {
      const isActive = document.queryCommandState(command);
      newActiveCommands[command] = isActive;

      if (isActive && command === "formatBlock") {
        const selection = window.getSelection();
        if (selection && selection.rangeCount > 0) {
          const blockElement = selection.anchorNode?.parentElement;
          if (blockElement) {
            newActiveCommands[`h${blockElement.tagName.slice(1)}`] = true; // Set active for headings (H1, H2)
          }
        }
      }
    });

    setActiveCommand(newActiveCommands);
  };

  const handleCommand = (command, value = null) => {
    // if (activeCommand[command]) {
    document.execCommand(command, false, value);
    handleSelectionChange();
    // }
  };

  const wrapSelectedTextWithTag = (tag, className) => {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const selectedText = range.extractContents();
      const span = document.createElement(tag);
      span.className = className;
      span.appendChild(selectedText);
      range.insertNode(span);
      handleSelectionChange();
    }
  };

  const openLinkModal = () => {
    setShowLinkModal(true);
  };

  const createLink = () => {
    const selection = window.getSelection();
    if (selection.rangeCount > 0 && linkUrl) {
      const range = selection.getRangeAt(0);
      const anchor = document.createElement("a");
      anchor.href = linkUrl;
      anchor.target = "_blank";
      anchor.appendChild(range.extractContents());
      range.insertNode(anchor);
      setShowLinkModal(false);
      setLinkUrl("");
      handleSelectionChange();
    }
  };

  const logContent = () => {
    console.log(editorRef.current.innerHTML);
  };

  const handlePaste = (event) => {
    event.preventDefault();
    const text = (event.clipboardData || window.clipboardData).getData("text");

    const urlPattern = /(https?:\/\/[^\s]+)/g;
    if (urlPattern.test(text)) {
      const linkHtml = text.replace(
        urlPattern,
        (url) => `<a href="${url}" target="_blank">${url}</a>`
      );
      document.execCommand("insertHTML", false, linkHtml);
    } else {
      document.execCommand("insertText", false, text);
    }
  };

  const handleClearAll = () => {
    editorRef.current.innerHTML = "";
    setActiveCommand({});
  };

  const toggleCodeBlock = () => {
    if (activeCommand.pre) {
      handleCommand("formatBlock", ""); // Remove code block
    } else {
      handleCommand("formatBlock", "pre"); // Apply code block
    }
  };

  const toggleQuoteBlock = () => {
    if (activeCommand.blockquote) {
      handleCommand("formatBlock", ""); // Remove quote block
    } else {
      handleCommand("formatBlock", "blockquote"); // Apply quote block
    }
  };

  const handleNormalText = () => {
    if (!Object.keys(activeCommand).length) {
      handleCommand("formatBlock", ""); // Remove all formatting
    }
  };

  return (
    <div className='rich-text-editor'>
      <div className='toolbar'>
        <button
          className={activeCommand.bold ? "active" : ""}
          onClick={() => handleCommand("bold")}
        >
          B
        </button>
        <button
          className={activeCommand.italic ? "active" : ""}
          onClick={() => handleCommand("italic")}
        >
          I
        </button>
        <button
          className={activeCommand.strikeThrough ? "active" : ""}
          onClick={() => handleCommand("strikeThrough")}
        >
          S
        </button>
        <button
          className={activeCommand.superscript ? "active" : ""}
          onClick={() => handleCommand("superscript")}
        >
          Sup
        </button>
        <button
          className={activeCommand.h1 ? "active" : ""}
          onClick={() => handleCommand("formatBlock", "H1")}
        >
          H1
        </button>
        <button
          className={activeCommand.h2 ? "active" : ""}
          onClick={() => handleCommand("formatBlock", "H2")}
        >
          H2
        </button>
        <button
          className={activeCommand.blockquote ? "active" : ""}
          onClick={toggleQuoteBlock} // Use toggleQuoteBlock function
        >
          Quote
        </button>
        <button
          className={activeCommand.code ? "active" : ""}
          onClick={() => handleCommand("formatBlock", "code")}
        >
          Code
        </button>
        <button
          className={activeCommand.pre ? "active" : ""}
          onClick={toggleCodeBlock} // Use toggleCodeBlock function
        >
          Code Block
        </button>
        <button
          className={activeCommand.spoiler ? "active" : ""}
          onClick={() => wrapSelectedTextWithTag("span", "spoiler")}
        >
          Spoiler
        </button>
        <button
          className={activeCommand.insertOrderedList ? "active" : ""}
          onClick={() => handleCommand("insertOrderedList")}
        >
          OL
        </button>
        <button
          className={activeCommand.insertUnorderedList ? "active" : ""}
          onClick={() => handleCommand("insertUnorderedList")}
        >
          UL
        </button>
        <button onClick={openLinkModal}>Link</button>
        <button onClick={handleClearAll}>Clear All</button>
        <button onClick={handleNormalText}>Normal Text</button>
      </div>

      <div
        className='editor'
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning={true}
        onPaste={handlePaste}
      ></div>

      {showLinkModal && (
        <div className='link-modal'>
          <div className='modal-content'>
            <label>Link Text</label>
            <input
              type='text'
              value={linkText}
              onChange={(e) => setLinkText(e.target.value)}
            />
            <label>Link URL</label>
            <input
              type='text'
              value={linkUrl}
              onChange={(e) => setLinkUrl(e.target.value)}
            />
            <button onClick={createLink}>Create Link</button>
            <button onClick={() => setShowLinkModal(false)}>Cancel</button>
          </div>
        </div>
      )}

      <button onClick={logContent} className='log-btn'>
        Log Content
      </button>
    </div>
  );
};

export default CustomRichTextEditor;
