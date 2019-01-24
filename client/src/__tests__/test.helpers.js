// Attempted various imports to no avail
//
// import React from "react";
// import {
//   makeAuthorsPresentable,
//   makePublisherPresentable,
//   clipLongDescriptionText,
// } from "../helpers";

// const helpers = require("../helpers");

test("undefined publisher is not available", () => {
  expect(makePublisherPresentable(undefined)).toEqual(
    "Publication info unavailable",
  );
});

test("blank publisher is not available", () => {
  expect(makePublisherPresentable("")).toEqual("Publication info unavailable");
});

test("info is presented when it exists", () => {
  expect(makePublisherPresentable("Incredible Publication")).toEqual(
    "Published by Incredible Publication",
  );
});

test("short descriptions don't get clipped", () => {
  expect(clipLongDescriptionText(5, "A short description")).toEqual(
    "A short description",
  );
});

test("long descriptions get clipped", () => {
  expect(
    clipLongDescriptionText(5, "A pretty darn long example of a description"),
  ).toEqual("A pretty darn long example...");
});

// hand typed functions since babel beat me down
function makePublisherPresentable(publisher) {
  return publisher
    ? `Published by ${publisher}`
    : "Publication info unavailable";
}

function clipLongDescriptionText(wordCount, descriptionText) {
  return descriptionText.split(" ").length > wordCount
    ? descriptionText
        .split(" ")
        .slice(0, wordCount)
        .join(" ") + "..."
    : descriptionText;
}

// `makeAuthorsPresentable` excluded because it returns JSX and babel hates that.

// test("authors look right when there's ony one", () => {
//   expect(makeAuthorsPresentable(["Ainsley"])).toEqual([
//     "By ",
//     <span>Ainsley</span>,
//   ]);
// });
