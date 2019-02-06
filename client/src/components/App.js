import React from "react";
import SearchBar from "./SearchBar";
import SearchResultList from "./SearchResultList";

/** takes no props.
 * top level of this application, handles all IO and state management.
 * the only class component
 * */
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchQuery: "",
      searchResults: [],
      searchResultsAreLoading: false,
      emptyBooksApiResponse: false,
      resultsShownOnPage: 10,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleChange(e) {
    e.preventDefault();

    if (name == "resultsShownOnPage" && (value > 40 || value < 10)) {
      alert("Results shown per query must be between 10 and 40");
    }

    const { value, name } = e.target;

    this.setState({ [name]: value });
  }

  handleSearch(e) {
    e.preventDefault();

    if (
      this.state.resultsShownOnPage > 40 ||
      this.state.resultsShownOnPage < 10
    ) {
      alert("Searches can only return between 10 and 40 results.");
      return;
    }

    if (e.type === "click" || (e.type === "keyup" && e.keyCode === 13)) {
      this.setState({ searchResultsAreLoading: true });

      const userSearchUrl = `${window.location.href}search?q=${
        this.state.searchQuery
      }&len=${this.state.resultsShownOnPage}`;
      const options = {
        method: "GET",
        headers: { "Content-Type": "application/json; charset=utf-8" },
      };

      fetch(userSearchUrl, options)
        .then(res => res.json())
        .then(({ resultList }) =>
          this.setState({
            searchResults: resultList,
            searchResultsAreLoading: false,
            emptyBooksApiResponse: resultList.length === 0,
          }),
        );
    }
  }

  render() {
    return (
      <div className="columns is-multiline is-mobile">
        <title className="column is-full">8th Light Books App by Ainsley</title>
        <div className="column is-full ">
          <SearchBar
            onChange={this.handleChange}
            onSearch={this.handleSearch}
            value={this.state.searchQuery}
            resultsShownOnPage={this.state.resultsShownOnPage}
          />
        </div>
        {this.state.searchResultsAreLoading && (
          <div className="container">
            <p className="content is-size-1">...</p>
          </div>
        )}
        {!this.state.searchResultsAreLoading && (
          <SearchResultList
            resultList={this.state.searchResults}
            emptyBooksApiResponse={this.state.emptyBooksApiResponse}
          />
        )}
      </div>
    );
  }
}
