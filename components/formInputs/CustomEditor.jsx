// components/custom-editor.js
"use client"; // only in App Router

import { useState, useRef } from "react";
import { CKEditor, useCKEditorCloud } from "@ckeditor/ckeditor5-react";
import translations from "ckeditor5/translations/vi.js";
import "../../styles/main.scss";

const CustomEditor = ({
  label,
  value,
  onChange,
  className = "sm:col-span-2",
}) => {
  const editorContainerRef = useRef(null);
  const editorRef = useRef(null);
  const editorWordCountRef = useRef(null);
  const [isLayoutReady, setIsLayoutReady] = useState(false);
  const LICENSE_KEY =
    "eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3NzEwMjcxOTksImp0aSI6ImY2MzVmNTY2LTY0ZDEtNDBkYS05MDNiLTBhMTY0MzU0ODQ3NiIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiXSwiZmVhdHVyZXMiOlsiRFJVUCJdLCJ2YyI6IjcwNTc3NzI5In0.11K3voKdGj72P9fxpyzowhjTTBRQPsMgKkWlR3aJ_n58G-M5UDNtBpFFUKVvgj9efDvc_rd5lu7y4L3HswmdSA";
  const cloud = useCKEditorCloud({
    version: "44.2.0",
    premium: true,
  });

  if (cloud.status === "error") {
    return <div>Error!</div>;
  }

  if (cloud.status === "loading") {
    return <div>Loading...</div>;
  }

  const {
    ClassicEditor,
    Alignment,
    Autoformat,
    AutoImage,
    AutoLink,
    Autosave,
    BalloonToolbar,
    Base64UploadAdapter,
    BlockQuote,
    Bold,
    Bookmark,
    Code,
    CodeBlock,
    Emoji,
    Essentials,
    FindAndReplace,
    FontBackgroundColor,
    FontColor,
    FontFamily,
    FontSize,
    GeneralHtmlSupport,
    Heading,
    Highlight,
    HorizontalLine,
    HtmlComment,
    HtmlEmbed,
    ImageBlock,
    ImageCaption,
    ImageInline,
    ImageInsert,
    ImageInsertViaUrl,
    ImageResize,
    ImageStyle,
    ImageTextAlternative,
    ImageToolbar,
    ImageUpload,
    Indent,
    IndentBlock,
    Italic,
    Link,
    LinkImage,
    List,
    ListProperties,
    Markdown,
    MediaEmbed,
    Mention,
    PageBreak,
    Paragraph,
    PasteFromOffice,
    RemoveFormat,
    SourceEditing,
    SpecialCharacters,
    SpecialCharactersArrows,
    SpecialCharactersCurrency,
    SpecialCharactersEssentials,
    SpecialCharactersLatin,
    SpecialCharactersMathematical,
    SpecialCharactersText,
    Strikethrough,
    Style,
    Subscript,
    Superscript,
    Table,
    TableCaption,
    TableCellProperties,
    TableColumnResize,
    TableProperties,
    TableToolbar,
    TextPartLanguage,
    TextTransformation,
    Title,
    TodoList,
    Underline,
    WordCount,
  } = cloud.CKEditor;

  return (
    <div className={className}>
      <label
        htmlFor="content"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <div
        className="editor-container editor-container_classic-editor editor-container_include-style editor-container_include-word-count prose dark:prose-invert prose-slate dark:prose-slate"
        ref={editorContainerRef}
      >
        <div ref={editorRef}>
          <CKEditor
            editor={ClassicEditor}
            data={"<h1></h1>"}
            config={{
              licenseKey: LICENSE_KEY,
              title: {
                placeholder: "Nhập tiêu đề ở đây!"
              },
              plugins: [
                Alignment,
                Autoformat,
                AutoImage,
                AutoLink,
                Autosave,
                BalloonToolbar,
                Base64UploadAdapter,
                BlockQuote,
                Bold,
                Bookmark,
                Code,
                CodeBlock,
                Emoji,
                Essentials,
                FindAndReplace,
                FontBackgroundColor,
                FontColor,
                FontFamily,
                FontSize,
                GeneralHtmlSupport,
                Heading,
                Highlight,
                HorizontalLine,
                HtmlComment,
                HtmlEmbed,
                ImageBlock,
                ImageCaption,
                ImageInline,
                ImageInsert,
                ImageInsertViaUrl,
                ImageResize,
                ImageStyle,
                ImageTextAlternative,
                ImageToolbar,
                ImageUpload,
                Indent,
                IndentBlock,
                Italic,
                Link,
                LinkImage,
                List,
                ListProperties,
                Markdown,
                MediaEmbed,
                Mention,
                PageBreak,
                Paragraph,
                PasteFromOffice,
                RemoveFormat,
                SourceEditing,
                SpecialCharacters,
                SpecialCharactersArrows,
                SpecialCharactersCurrency,
                SpecialCharactersEssentials,
                SpecialCharactersLatin,
                SpecialCharactersMathematical,
                SpecialCharactersText,
                Strikethrough,
                Style,
                Subscript,
                Superscript,
                Table,
                TableCaption,
                TableCellProperties,
                TableColumnResize,
                TableProperties,
                TableToolbar,
                TextPartLanguage,
                TextTransformation,
                Title,
                TodoList,
                Underline,
                WordCount,
              ],
              toolbar: {
                items: [
                  "sourceEditing",
                  "|",
                  "heading",
                  "style",
                  "|",
                  "fontSize",
                  "fontFamily",
                  "fontColor",
                  "fontBackgroundColor",
                  "|",
                  "bold",
                  "italic",
                  "underline",
                  "|",
                  "link",
                  "insertImage",
                  "insertTable",
                  "highlight",
                  "blockQuote",
                  "codeBlock",
                  "|",
                  "alignment",
                  "|",
                  "bulletedList",
                  "numberedList",
                  "todoList",
                  "outdent",
                  "indent",
                  "title",
                ],
                shouldNotGroupWhenFull: false,
              },
              balloonToolbar: [
                "bold",
                "italic",
                "|",
                "link",
                "insertImage",
                "|",
                "bulletedList",
                "numberedList",
              ],
              fontFamily: {
                supportAllValues: true,
              },
              fontSize: {
                options: [10, 12, 14, "default", 18, 20, 22],
                supportAllValues: true,
              },
              heading: {
                options: [
                  {
                    model: "paragraph",
                    title: "Paragraph",
                    class: "ck-heading_paragraph",
                  },
                  {
                    model: "heading1",
                    view: "h1",
                    title: "Heading 1",
                    class: "ck-heading_heading1",
                  },
                  {
                    model: "heading2",
                    view: "h2",
                    title: "Heading 2",
                    class: "ck-heading_heading2",
                  },
                  {
                    model: "heading3",
                    view: "h3",
                    title: "Heading 3",
                    class: "ck-heading_heading3",
                  },
                  {
                    model: "heading4",
                    view: "h4",
                    title: "Heading 4",
                    class: "ck-heading_heading4",
                  },
                  {
                    model: "heading5",
                    view: "h5",
                    title: "Heading 5",
                    class: "ck-heading_heading5",
                  },
                  {
                    model: "heading6",
                    view: "h6",
                    title: "Heading 6",
                    class: "ck-heading_heading6",
                  },
                ],
              },
              htmlSupport: {
                allow: [
                  {
                    name: /^.*$/,
                    styles: true,
                    attributes: true,
                    classes: true,
                  },
                ],
              },
              image: {
                toolbar: [
                  "toggleImageCaption",
                  "imageTextAlternative",
                  "|",
                  "imageStyle:inline",
                  "imageStyle:wrapText",
                  "imageStyle:breakText",
                  "|",
                  "resizeImage",
                ],
              },
              initialData: "<h1></h1>",
              language: "vi",
              licenseKey: LICENSE_KEY,
              link: {
                addTargetToExternalLinks: true,
                defaultProtocol: "https://",
                decorators: {
                  toggleDownloadable: {
                    mode: "manual",
                    label: "Downloadable",
                    attributes: {
                      download: "file",
                    },
                  },
                },
              },
              list: {
                properties: {
                  styles: true,
                  startIndex: true,
                  reversed: true,
                },
              },
              mention: {
                feeds: [
                  {
                    marker: "@",
                    feed: [
                      /* See: https://ckeditor.com/docs/ckeditor5/latest/features/mentions.html */
                    ],
                  },
                ],
              },
              menuBar: {
                isVisible: true,
              },
              placeholder: "Gõ hoặc sao chép nội dung vào đây!",
              style: {
                definitions: [
                  {
                    name: "Article category",
                    element: "h3",
                    classes: ["category"],
                  },
                  {
                    name: "Title",
                    element: "h2",
                    classes: ["document-title"],
                  },
                  {
                    name: "Subtitle",
                    element: "h3",
                    classes: ["document-subtitle"],
                  },
                  {
                    name: "Info box",
                    element: "p",
                    classes: ["info-box"],
                  },
                  {
                    name: "Side quote",
                    element: "blockquote",
                    classes: ["side-quote"],
                  },
                  {
                    name: "Marker",
                    element: "span",
                    classes: ["marker"],
                  },
                  {
                    name: "Spoiler",
                    element: "span",
                    classes: ["spoiler"],
                  },
                  {
                    name: "Code (dark)",
                    element: "pre",
                    classes: ["fancy-code", "fancy-code-dark"],
                  },
                  {
                    name: "Code (bright)",
                    element: "pre",
                    classes: ["fancy-code", "fancy-code-bright"],
                  },
                ],
              },
              table: {
                contentToolbar: [
                  "tableColumn",
                  "tableRow",
                  "mergeTableCells",
                  "tableProperties",
                  "tableCellProperties",
                ],
              },
              translations: [translations],
            }}
            value={value}
            onChange={onChange}
          />
        </div>
        <div
          className="editor_container__word-count"
          ref={editorWordCountRef}
        ></div>
      </div>
    </div>
  );
};

export default CustomEditor;
