module.exports = function parseRawApiResponse(rawJson) {
  return rawJson.items
    .map(({ volumeInfo }) => ({ ...volumeInfo }))
    .map(
      ({
        authors,
        title,
        publisher,
        publishDate,
        description,
        imageLinks,
        infoLink
      }) => ({
        authors,
        title,
        publisher,
        publishDate,
        description,
        imageLinks,
        infoLink
      })
    );
};
