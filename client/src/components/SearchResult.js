import React from "react";

export default function SearchResult(props) {
  return (
    <div className="container content search-result">
      <h3 className="is-size-6">{props.data.title}</h3>
      Authors:
      <ul>
        {props.data.authors.map(a => (
          <li>{a}</li>
        ))}
      </ul>
      Description:
      <ul>{props.data.description}</ul>
      <br />
    </div>
  );
}
