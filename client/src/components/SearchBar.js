import React from "react";

/** expects props: (see App.js)
 * value: controlled; generated in controller hook
 * onChange: callback to controller
 * onSearch: callback to controller
 *
 * stateless componenet. must be implemented by a controller.
 **/
export default function SearchBar(props) {
  return (
    <div className="field has-addons">
      <span className="control is-expanded">
        <input
          className="input"
          value={props.value}
          id="search-bar"
          type="text"
          placeholder="Search for books..."
          name="searchQuery"
          autoFocus={true}
          onChange={props.onChange}
          onKeyUp={props.onSearch}
          title="Type your search here; Look up millions of books!"
        />
      </span>
      <span className="control">
        <button
          className="button"
          id="search-button"
          value="ok"
          title="Click here to perform your search"
          onClick={props.onSearch}>
          Search
        </button>
      </span>
    </div>
  );
}
