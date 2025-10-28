"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import 'react-quill-new/dist/quill.snow.css';

interface RichTextEditorProps {
  value: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  readOnly?: boolean;
}

const ReactQuill = dynamic(() => import('react-quill-new'), { 
  ssr: false,
  loading: () => <div className="h-32 bg-gray-50 dark:bg-gray-800 rounded animate-pulse" />
});

const RichTextEditor: React.FC<RichTextEditorProps> = ({ 
  value, 
  onChange, 
  placeholder = "Add a description...",
  readOnly = false 
}) => {

  const modules = {
    toolbar: readOnly ? false : [
      ['bold', 'italic', 'underline'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['link'],
      ['clean']
    ],
  };

  const formats = [
    'bold', 'italic', 'underline',
    'list',
    'link'
  ];

  return (
    <div className={`rich-text-editor ${readOnly ? 'read-only' : ''}`}>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange || (() => {})}
        modules={modules}
        formats={formats}
        placeholder={placeholder}
        readOnly={readOnly}
        className={readOnly ? 'read-only-editor' : ''}
      />
      <style jsx global>{`
        .rich-text-editor .ql-container {
          border-bottom-left-radius: 0.5rem;
          border-bottom-right-radius: 0.5rem;
          background: white;
          min-height: 120px;
        }
        .dark .rich-text-editor .ql-container {
          background: rgb(31 41 55);
          color: rgb(229 231 235);
        }
        .rich-text-editor .ql-toolbar {
          border-top-left-radius: 0.5rem;
          border-top-right-radius: 0.5rem;
          background: rgb(249 250 251);
        }
        .dark .rich-text-editor .ql-toolbar {
          background: rgb(17 24 39);
          border-color: rgb(55 65 81);
        }
        .dark .rich-text-editor .ql-stroke {
          stroke: rgb(229 231 235);
        }
        .dark .rich-text-editor .ql-fill {
          fill: rgb(229 231 235);
        }
        .dark .rich-text-editor .ql-picker-label {
          color: rgb(229 231 235);
        }
        .rich-text-editor.read-only .ql-toolbar {
          display: none;
        }
        .read-only-editor .ql-container {
          border: none;
          background: transparent;
          min-height: auto;
        }
        .read-only-editor .ql-editor {
          padding: 0;
        }
        .dark .read-only-editor .ql-container {
          background: transparent;
        }
      `}</style>
    </div>
  );
};

export default RichTextEditor;
