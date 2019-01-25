/** takes a n array of strings and returns
 * a human-style list with an oxford comma
 **/
export function makeEnglishLanguageList(arr) {
  if (arr.length === 1) {
    return `By ${arr.pop()}`;
  }
  const last = arr.pop();

  // oxford comma
  return `By ${arr.join(", ")}${arr.length >= 2 ? "," : ""} and ${last}`;
}

/** a wrapper to turn a publisher name into a sentence */
export function makePublisherPresentable(publisher) {
  return `Published by ${publisher}`;
}

/** normalizes the length of description text for ~ aesthetics ~  */
export function clipLongDescriptionText(wordCount, descriptionText) {
  return descriptionText.split(" ").length > wordCount
    ? descriptionText
        .split(" ")
        .slice(0, wordCount)
        .join(" ") + "..."
    : descriptionText;
}
