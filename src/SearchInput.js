import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import "./SearchInput.css";

export default class SearchInput extends PureComponent {
  static propTypes = {
    textChange: PropTypes.func,
  };

  handleChange = (event) => {
    this.props.textChange(event);
  };

  render() {
    return (
      <div className="component-search-input">
        <div>
          <label htmlFor="searchBox">
            Search
            <input id="searchBox" name="searchBox" onChange={this.handleChange} />
          </label>
        </div>
      </div>
    );
  }
}
