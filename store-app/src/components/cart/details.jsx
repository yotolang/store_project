import React from "react";

class Details extends React.Component {
  render() {
    const { products } = this.props;

    return <h2>{console.log("product-", products)}</h2>;
  }
}

export default Details;
