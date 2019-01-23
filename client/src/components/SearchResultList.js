import React from "react";
import SearchResult from "./SearchResult";

export default function SearchResultList(props) {
  return (
    <div>
      <hr />
      {props.resultData.resultList.map(result => (
        <SearchResult data={result} key={result.title} />
      ))}
    </div>
  );
}