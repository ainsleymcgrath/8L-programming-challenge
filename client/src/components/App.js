import React from "react";
import SearchBar from "./SearchBar";
import SearchResultList from "./SearchResultList";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      searchResults: [],
      searchResultsAreLoading: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleChange(e) {
    e.preventDefault();

    const { value, name } = e.target;

    this.setState({ [name]: value });
  }

  handleSearch(e) {
    e.preventDefault();

    if (e.type === "click" || (e.type === "keyup" && e.keyCode === 13)) {
      this.setState({ searchResultsAreLoading: true });

      const url = `${window.location.href}search?q=${this.state.searchQuery}`;
      const options = {
        method: "GET",
        headers: { "Content-Type": "application/json; charset=utf-8" },
      };

      fetch(url, options)
        .then(res => res.json())
        .then(({ resultList }) =>
          this.setState({
            searchResults: resultList,
            searchResultsAreLoading: false,
          }),
        );
    }
  }

  render() {
    return (
      <div className="columns is-multiline is-mobile">
        <article className="column is-full">
          8th Light Books App by Ainsley
        </article>
        <div className="column is-full ">
          <SearchBar
            onChange={this.handleChange}
            onSearch={this.handleSearch}
            value={this.state.searchQuery}
          />
        </div>
        {this.state.searchResultsAreLoading && <p className="content">...</p>}
        {this.state.searchResults.length > 0 &&
          !this.state.searchResultsAreLoading && (
            <SearchResultList
              resultList={this.state.searchResults}
              onClick={this.handleClickToSearch}
            />
          )}
      </div>
    );
  }
}
