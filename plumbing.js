/** takes in a large object from the google books API response
 * and sends back a small one,
 * or sends back an empty array if the response was empty
 */
module.exports = function parseBooksApiResponse(rawJson) {
  // key will be missing if no results
  if ("items" in rawJson) {
    return rawJson.items
      .map(({ volumeInfo, id }) => ({ ...volumeInfo, ...id }))
      .map(
        ({
          id,
          authors,
          title,
          publisher,
          description,
          imageLinks,
          infoLink,
        }) => ({
          id,
          authors,
          title,
          publisher,
          description,
          imageLinks,
          infoLink,
        }),
      );
  }

  return [];
};
