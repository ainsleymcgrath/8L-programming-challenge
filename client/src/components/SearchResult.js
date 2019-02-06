import React from "react";
import {
  makeEnglishLanguageList,
  makePublisherPresentable,
  clipLongDescriptionText,
  secureImgLinks,
} from "../helpers";

const MAX_WORD_COUNT = 45;

/** expects props:
 * - data: see `plumbing` in top level dir for expected object
 *
 *   stateless componenet. must be implemented by a controller.
 **/
export default function SearchResult(props) {
  return (
    <li className="column is-full container">
      <article className="media">
        <figure className="media-left">
          <div className="image">
            {props.data.imageLinks ? (
              <img
                src={secureImgLinks(props.data.imageLinks.smallThumbnail)}
                alt={`${props.data.title} cover image.`}
              />
            ) : (
              <div className="container">No image found</div>
            )}
          </div>
        </figure>
        <div className="media-content">
          <div className="content">
            <h3 className="is-size-4">{props.data.title}</h3>
            <p className="content">
              {props.data.authors
                ? makeEnglishLanguageList(props.data.authors)
                : "No author listed"}
              <span className="help">
                {props.data.publisher
                  ? makePublisherPresentable(props.data.publisher)
                  : "No publication info provided"}
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
    </li>
  );
}
