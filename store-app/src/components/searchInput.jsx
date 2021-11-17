import React, { Component } from "react";
class SearchInput extends React.Component {
  render() {
    const { val } = this.props;
    return <div>{console.log(val, "valSearch")}</div>;
  }
}

export default SearchInput;
