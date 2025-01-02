import React, { useRef, useEffect } from "react";
import FroalaEditorComponent from "react-froala-wysiwyg";
import "froala-editor/css/froala_editor.pkgd.min.css"; // Adjust path based on your installation method
import "froala-editor/css/froala_style.min.css"; // Additional styles for Froala Editor
import "froala-editor/css/plugins/code_view.min.css"; //
import "froala-editor/js/plugins.pkgd.min.js";
import "froala-editor/js/plugins/image.min.js";
import "./index.css";
import TurndownService from "turndown";

const FroalaRichText = () => {
  const editorRef = useRef(null);
  const turndownService = new TurndownService();

  // Callback function for handling editor content changes
  const handleModelChange = (model) => {
    console.log(turndownService.turndown(model)); // You can handle the editor content here
  };

  return (
    <FroalaEditorComponent
      tag='textarea' // Use 'div' if you don't need a textarea
      config={{
        placeholderText: "Write your post here...",
        charCounterCount: false, // Optional: Disable character counter
        toolbarButtons: {
          moreText: {
            buttons: [
              "bold",
              "italic",
              "underline",
              "strikeThrough",
              "subscript",
              "superscript",
              "|",
              "fontFamily",
              "fontSize",
              "textColor",
              "backgroundColor",
              "|",
              "inlineClass",
              "inlineStyle",
              "clearFormatting",
            ],
          },
          moreParagraph: {
            buttons: [
              "alignLeft",
              "alignCenter",
              "alignRight",
              "alignJustify",
              "|",
              "formatOLSimple",
              "formatOL",
              "formatUL",
              "paragraphFormat",
              "quote",
              "insertHR",
            ],
          },
          moreRich: {
            buttons: [
              "insertLink",
              "insertImage",
              "insertVideo",
              "insertFile",
              "insertTable",
              "|",
              "emoticons",
              "specialCharacters",
              "embedly",
              "|",
              "insertQuote",
              "insertCode",
              "insertCodeBlock",
              "insertHR",
            ],
          },
          moreMisc: {
            buttons: [
              "undo",
              "redo",
              "fullscreen",
              "print",
              "getPDF",
              "spellChecker",
              "selectAll",
              "html",
              "|",
              "help",
              "about",
            ],
          },
        },
        events: {
          "froalaEditor.contentChanged": function (e, editor) {
            // Handle content changes
            handleModelChange(editor.html.get());
          },
        },
        pluginsEnabled: [
          "align",
          "charCounter",
          "codeView",
          "colors",
          "emoticons",
          "entities",
          "file",
          "fontFamily",
          "fontSize",
          "fullscreen",
          "image",
          "imageManager",
          "inlineClass",
          "inlineStyle",
          "lineBreaker",
          "link",
          "lists",
          "paragraphFormat",
          "quote",
          "save",
          "table",
          "url",
          "video",
          "wordPaste",
        ],
      }}
      onModelChange={handleModelChange}
      ref={editorRef}
    />
  );
};

export default FroalaRichText;
