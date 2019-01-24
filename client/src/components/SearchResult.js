import React from "react";
import {
  makeAuthorsPresentable,
  makePublisherPresentable,
  clipLongDescriptionText,
} from "../helpers";

const MAX_WORD_COUNT = 45;

export default function SearchResult(props) {
  return (
    <div className="column is-full container">
      <br />
      <article class="media">
        <figure className="media-left">
          <p className="image">
            <img src={props.data.imageLinks.smallThumbnail} alt="" />
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <h3 className="is-size-4">{props.data.title}</h3>
            <p className="content">
              {makeAuthorsPresentable(props.data.authors)}
              <span className="help">
                {makePublisherPresentable(props.data.publisher)}
              </span>
            </p>
            <p className="content">
              {props.data.description
                ? clipLongDescriptionText(
                    MAX_WORD_COUNT,
                    props.data.description,
                  )
                : "No Description included."}
            </p>
            <a className="is-link" href={props.data.infoLink} target="_blank" a>
              Learn more
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
