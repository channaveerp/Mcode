import React, { useCallback, useMemo, useState } from "react";
import { Editable, withReact, useSlate, Slate } from "slate-react";
import {
  Editor,
  Transforms,
  createEditor,
  Descendant,
  Element as SlateElement,
} from "slate";
import { withHistory } from "slate-history";

const RichTextExample = () => {
  const [value, setValue] = useState(initialValue);
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);
  // const editor = useMemo(() => withReact(createEditor()), []);

  const renderElement = useCallback((props) => <Element {...props} />, []);
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);

  const toggleMark = (format) => {
    const isActive = isMarkActive(editor, format);
    if (isActive) {
      Editor.removeMark(editor, format);
    } else {
      Editor.addMark(editor, format, true);
    }
  };

  const toggleBlock = (format) => {
    const isActive = isBlockActive(editor, format);
    const isList = LIST_TYPES.includes(format);

    Transforms.unwrapNodes(editor, {
      match: (n) =>
        !Editor.isEditor(n) &&
        SlateElement.isElement(n) &&
        LIST_TYPES.includes(n.type),
      split: true,
    });

    let newProperties;
    if (TEXT_ALIGN_TYPES.includes(format)) {
      newProperties = {
        align: isActive ? undefined : format,
      };
    } else {
      newProperties = {
        type: isActive ? "paragraph" : isList ? "list-item" : format,
      };
    }

    Transforms.setNodes(editor, newProperties);

    if (!isActive && isList) {
      Transforms.wrapNodes(editor, { type: format, children: [] });
    }
  };

  return (
    <Slate
      editor={editor}
      value={value}
      onChange={(newValue) => setValue(newValue)}
    >
      <div>
        <button
          onMouseDown={(event) => {
            event.preventDefault();
            toggleMark("bold");
          }}
        >
          Bold
        </button>
        <button
          onMouseDown={(event) => {
            event.preventDefault();
            toggleMark("italic");
          }}
        >
          Italic
        </button>
        <button
          onMouseDown={(event) => {
            event.preventDefault();
            toggleMark("underline");
          }}
        >
          Underline
        </button>
        <button
          onMouseDown={(event) => {
            event.preventDefault();
            toggleMark("code");
          }}
        >
          Code
        </button>
        <button
          onMouseDown={(event) => {
            event.preventDefault();
            toggleBlock("heading-one");
          }}
        >
          Heading 1
        </button>
        <button
          onMouseDown={(event) => {
            event.preventDefault();
            toggleBlock("heading-two");
          }}
        >
          Heading 2
        </button>
        <button
          onMouseDown={(event) => {
            event.preventDefault();
            toggleBlock("block-quote");
          }}
        >
          Blockquote
        </button>
        <button
          onMouseDown={(event) => {
            event.preventDefault();
            toggleBlock("numbered-list");
          }}
        >
          Numbered List
        </button>
        <button
          onMouseDown={(event) => {
            event.preventDefault();
            toggleBlock("bulleted-list");
          }}
        >
          Bulleted List
        </button>
        <button
          onMouseDown={(event) => {
            event.preventDefault();
            toggleBlock("align-left");
          }}
        >
          Align Left
        </button>
        <button
          onMouseDown={(event) => {
            event.preventDefault();
            toggleBlock("align-center");
          }}
        >
          Align Center
        </button>
        <button
          onMouseDown={(event) => {
            event.preventDefault();
            toggleBlock("align-right");
          }}
        >
          Align Right
        </button>
        <button
          onMouseDown={(event) => {
            event.preventDefault();
            toggleBlock("align-justify");
          }}
        >
          Justify
        </button>
      </div>
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        placeholder='Enter some rich text…'
        spellCheck
        autoFocus
      />
    </Slate>
  );
};

const LIST_TYPES = ["numbered-list", "bulleted-list"];
const TEXT_ALIGN_TYPES = [
  "align-left",
  "align-center",
  "align-right",
  "align-justify",
];

const isBlockActive = (editor, format) => {
  const [match] = Array.from(
    Editor.nodes(editor, {
      at: editor.selection,
      match: (n) =>
        !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === format,
    })
  );

  return !!match;
};

const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};

const Element = ({ attributes, children, element }) => {
  switch (element.type) {
    case "block-quote":
      return <blockquote {...attributes}>{children}</blockquote>;
    case "bulleted-list":
      return <ul {...attributes}>{children}</ul>;
    case "heading-one":
      return <h1 {...attributes}>{children}</h1>;
    case "heading-two":
      return <h2 {...attributes}>{children}</h2>;
    case "list-item":
      return <li {...attributes}>{children}</li>;
    case "numbered-list":
      return <ol {...attributes}>{children}</ol>;
    case "align-left":
      return (
        <div style={{ textAlign: "left" }} {...attributes}>
          {children}
        </div>
      );
    case "align-center":
      return (
        <div style={{ textAlign: "center" }} {...attributes}>
          {children}
        </div>
      );
    case "align-right":
      return (
        <div style={{ textAlign: "right" }} {...attributes}>
          {children}
        </div>
      );
    case "align-justify":
      return (
        <div style={{ textAlign: "justify" }} {...attributes}>
          {children}
        </div>
      );
    default:
      return <p {...attributes}>{children}</p>;
  }
};

const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }
  if (leaf.code) {
    children = <code>{children}</code>;
  }
  if (leaf.italic) {
    children = <em>{children}</em>;
  }
  if (leaf.underline) {
    children = <u>{children}</u>;
  }
  return <span {...attributes}>{children}</span>;
};

const initialValue = [
  {
    type: "paragraph",
    children: [
      { text: "This is editable " },
      { text: "rich", bold: true },
      { text: " text, " },
      { text: "much", italic: true },
      { text: " better than a " },
      { text: "<textarea>", code: true },
      { text: "!" },
    ],
  },
  {
    type: "paragraph",
    children: [
      {
        text: "Since it's rich text, you can do things like turn a selection of text ",
      },
      { text: "bold", bold: true },
      {
        text: ", or add a semantically rendered block quote in the middle of the page, like this:",
      },
    ],
  },
  {
    type: "block-quote",
    children: [{ text: "A wise quote." }],
  },
  {
    type: "paragraph",
    align: "center",
    children: [{ text: "Try it out for yourself!" }],
  },
];

export default RichTextExample;
