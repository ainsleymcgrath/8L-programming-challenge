module.exports = function parseRawApiResponse(rawJson) {
  return rawJson.items
    .map(({ volumeInfo, id }) => ({ ...volumeInfo, ...id }))
    .map(
      ({
        id,
        authors,
        title,
        publisher,
        publishDate,
        description,
        imageLinks,
        infoLink,
      }) => ({
        id,
        authors,
        title,
        publisher,
        publishDate,
        description,
        imageLinks,
        infoLink,
      }),
    );
};
