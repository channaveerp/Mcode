import {
  useEditor,
  EditorContent,
  // FloatingMenu,
  // BubbleMenu,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

// define your extension array
const extensions = [StarterKit];

const TiptapEditor = ({ content = "" }) => {
  const editor = useEditor({
    extensions,
    content,
  });

  const handleEditorContent = () => {
    const html = editor.getHTML();
    const test = editor.getText();

    console.log(html);
  };

  if (!editor) {
    return null;
  }

  return (
    <>
      <div className='toolbar_items'>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          // disabled={() => !editor.can().chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "is-active" : ""}
        >
          <strong>B</strong>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "is-active" : ""}
        >
          <em>I</em>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={editor.isActive("strike") ? "is-active" : ""}
        >
          <s>S</s>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCode().run()}
          className={editor.isActive("code") ? "is-active" : ""}
        >
          <strong>Code</strong>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={editor.isActive("codeBlock") ? "is-active" : ""}
        >
          Code-block
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={
            editor.isActive("heading", { level: 1 }) ? "is-active" : ""
          }
        >
          h1
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={
            editor.isActive("heading", { level: 2 }) ? "is-active" : ""
          }
        >
          h2
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={
            editor.isActive("heading", { level: 3 }) ? "is-active" : ""
          }
        >
          h3
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive("bulletList") ? "is-active" : ""}
        >
          UL
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive("orderedList") ? "is-active" : ""}
        >
          OL
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive("blockQuote") ? "is-active" : ""}
        >
          Quote
        </button>
        {/* <button
          onClick={() => editor.chain().focus().toggleSuperscript().run()}
          className={editor.isActive("superScript") ? "is-active" : ""}
        >
          Sr
        </button> */}
      </div>
      <EditorContent onChange={handleEditorContent} editor={editor} />
      {/* <FloatingMenu editor={editor}>This is the floating menu</FloatingMenu>
      <BubbleMenu editor={editor}>This is the bubble menu</BubbleMenu> */}
      {/* <button onClick={handleEditorContent}>save</button> */}
    </>
  );
};

export default TiptapEditor;
