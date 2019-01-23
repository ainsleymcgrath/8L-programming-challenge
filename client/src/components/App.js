import React from "react";
import SearchBar from "./SearchBar";
import SearchResultList from "./SearchResultList";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchQuery: "", searchResults: {} };

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
      fetch(`${window.location.href}search?q=${this.state.searchQuery}`, {
        method: "GET",
        headers: { "Content-Type": "application/json; charset=utf-8" }
      })
        .then(res => res.json())
        .then(json => this.setState({ searchResults: json }));
    }
  }

  render() {
    return (
      <div id="app" className="columns is-multiline is-mobile content">
        <article className="column is-full">
          8th Light Books App by Ainsley
        </article>
        <div className="column is-full box">
          <SearchBar
            onChange={this.handleChange}
            onSearch={this.handleSearch}
            value={this.state.searchQuery}
          />
          {"resultList" in this.state.searchResults && (
            <SearchResultList
              resultData={this.state.searchResults}
              onClick={this.handleClickToSearch}
            />
          )}
        </div>
      </div>
    );
  }
}
