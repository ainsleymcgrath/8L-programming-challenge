/** takes in a large object from the google books API response
 * and cherry picks the useful keys into a flat object
 * or sends back an empty array if the google api response was empty
 */
module.exports = function parseBooksApiResponse(rawJson) {
  return "items" in rawJson
    ? rawJson.items.reduce(
        (
          acc,
          {
            id,
            volumeInfo: {
              authors,
              title,
              publisher,
              description,
              imageLinks,
              infoLink,
            },
          },
        ) => [
          ...acc,
          { id, authors, title, publisher, description, imageLinks, infoLink },
        ],
        [],
      )
    : [];
};
