function makeEnglishLanguageList(arr) {
  if (arr.length === 1) {
    return `By ${arr.pop()}`;
  }

  const last = arr.pop();
  return `By ${arr.join(", ")}${arr.length >= 2 ? "," : ""} and ${last}`;
}

function makePublisherPresentable(publisher) {
  return `Published by ${publisher}`;
}

function clipLongDescriptionText(wordCount, descriptionText) {
  return descriptionText.split(" ").length > wordCount
    ? descriptionText
        .split(" ")
        .slice(0, wordCount)
        .join(" ") + "..."
    : descriptionText;
}

function secureImgLinks(imgLink) {
  return imgLink.replace(/http(?!s)/gi, "https");
}

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

test("authors look right when there's ony one", () => {
  expect(makeEnglishLanguageList(["Ainsley"])).toEqual("By Ainsley");
});

test("authors look right when there are two", () => {
  expect(makeEnglishLanguageList(["Ainsley", "The GZA"])).toEqual(
    "By Ainsley and The GZA",
  );
});

test("authors look right when there more than two", () => {
  expect(
    makeEnglishLanguageList(["Ainsley", "The GZA", "Alphonse Elric"]),
  ).toEqual("By Ainsley, The GZA, and Alphonse Elric");
});

test("insecure image links are made secure", () => {
  expect(secureImgLinks("http://image.is.not.secure")).toEqual(
    "https://image.is.not.secure",
  );
});
