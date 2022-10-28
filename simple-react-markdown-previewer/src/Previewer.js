import React from "react";
import { marked } from "marked";

export default function Previewer({markedText}) {
    const getMarkdownText = () => {
      const rawMarkup = marked(markedText, { sanitize: true, breaks: true });
      return { __html: rawMarkup };
    };
  
    return (
      <div id="preview" dangerouslySetInnerHTML={getMarkdownText()}></div>
    );
}