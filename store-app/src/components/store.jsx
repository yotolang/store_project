import React, { useState } from "react";
import Title from "./common/PageTitle";
import Product from "./product";
import productService from "../services/productService";
import "../style/inputStyle.css";

class ProductList extends React.Component {
  state = {
    search: "",
    products: [],
  };

  async componentDidMount() {
    const { data } = await productService.getAllProducts();
    this.setState({ products: data });
  }
  renderList = (product) => {
    const { search } = this.state;
    if (
      search !== "" &&
      product.bizTitle.toLowerCase().indexOf(search.toLowerCase()) === -1
    ) {
      return null;
    }
    return <Product key={product.id} product={product} />;
  };

  onchange = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { search, products } = this.state;

    return (
      <>
        <div className="container">
          <div className="input-container">
            <input
              type="text"
              placeholder="Search by name"
              onChange={this.onchange}
              value={(search, console.log(search, "search-"))}
              className="subInput"
            />
          </div>

          <Title name="Our Products" titla="products" />

          <div className="row">
            {/* <ProductConsumer>
              {(value) => {
                console.log(filterProduct, "filtermy");
                return filterProduct.map((product) => {
                  return <Product key={product.id} product={product} />;
                });
              }}
            </ProductConsumer> */}
            {products.map((product) => {
              return this.renderList(product);
            })}
          </div>
        </div>
      </>
    );
  }
}

export default ProductList;
