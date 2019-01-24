import React from "react";

export function makeAuthorsPresentable(authorList) {
  return authorList === undefined ? (
    <span className="has-text-italic">"Author not listed"</span>
  ) : (
    [
      "By ",
      ...authorList.map((author, i, arr) => {
        if (arr.length === 1 || i + 1 === arr.length) {
          return <span>{author}</span>;
        }
        return <span>{author + ","}</span>;
      }),
    ]
  );
}
