import React from "react";

export function makeAuthorsPresentable(authorList) {
  return authorList === undefined ? (
    <span className="has-text-italic">Author not listed</span>
  ) : (
    [
      "By ",
      ...authorList.map((author, i, arr) =>
        arr.length === 1 ? ( // just one author
          <span>{author}</span>
        ) : i + 1 === arr.length ? ( // last author in a list of >1
          <span>{" and " + author}</span>
        ) : i === 0 && arr.length === 2 ? ( // 2 authors
          <span>{author}</span>
        ) : (
          // author in the middle of a list
          <span>{author + ", "}</span>
        ),
      ),
    ]
  );
}

export function makePublisherPresentable(publisher) {
  return publisher
    ? `Published by ${publisher}`
    : "Publication info unavailable";
}

export function clipLongDescriptionText(wordCount, descriptionText) {
  return descriptionText.split(" ").length > wordCount
    ? descriptionText
        .split(" ")
        .slice(0, wordCount)
        .join(" ") + "..."
    : descriptionText;
}
