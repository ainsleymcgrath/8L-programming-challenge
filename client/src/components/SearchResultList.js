import React from "react";
import SearchResult from "./SearchResult";

/** expects props:
 * emptyBooksApiResponse: a boolean to indicate when a query returned no results
 * resultList: an array of objects parsed from the Google Books API
 *
 * stateless componenet. must be implemented by a controller.
 **/
export default function SearchResultList(props) {
  return props.emptyBooksApiResponse ? (
    <div className="container">
      <p className="content is-size-1">Σ(꒪ȏ꒪)</p>
      <p className="content is-size-1">No results!</p>
    </div>
  ) : (
    <ul className="container">
      {props.resultList.map(result => (
        <SearchResult data={result} key={result.id} />
      ))}
    </ul>
  );
}
