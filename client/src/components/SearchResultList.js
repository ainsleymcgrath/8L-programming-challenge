import React from "react";
import SearchResult from "./SearchResult";

export default function SearchResultList(props) {
  return (
    <div>
      <hr />
      {props.resultList.map(result => (
        <SearchResult data={result} key={result.id} />
      ))}
    </div>
  );
}
