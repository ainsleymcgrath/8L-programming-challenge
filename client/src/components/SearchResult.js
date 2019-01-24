import React from "react";

export default function SearchResult(props) {
  return (
    <div className="container content search-result">
      <h3 className="is-size-6">{props.data.title}</h3>
      <p className="content">
        Authors:{" "}
        {props.data.authors != undefined
          ? props.data.authors.map(a => <span>{a}</span>)
          : "No author listed."}
      </p>
      <br />
      <p className="content">
        Description:{" "}
        {props.data.description
          ? props.data.description
          : "No Description included."}
      </p>
      <br />
    </div>
  );
}
