import React from "react";

import productService from "./services/productService";

const ProductContext = React.createContext();
///provider
//consumer
class ProductProvider extends React.Component {
  state = {
    products: [],
    cart: [],
    modalOpen: false,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    searchTrim: "",
    setFilter: "",
  };

  async componentDidMount() {
    this.setProducts();
  }
  setProducts = async () => {
    let tempProducts = [];
    const { data } = await productService.getAllProducts();
    data.forEach((item) => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { products: tempProducts };
    });
  };

  HandelChangeTerm = ({ target }) => {
    const { searchTrim } = this.state;
    this.setState({
      [searchTrim]: target.value,
    });
  };
  getItem = (id) => {
    const product = this.state.products.find((item) => item._id === id);
    return product;
  };
  handelDetail = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };
  addToCart = (id) => {
    let tempProduct = [...this.state.products];
    const index = tempProduct.indexOf(this.getItem(id));
    const product = tempProduct[index];
    console.log("products=", product);
    product.bizinCart = true;
    product.bizCount = 1;
    const price = product.bizPrice;
    product.bizTotal = price;
    this.setState(
      () => {
        return { products: tempProduct, cart: [...this.state.cart, product] };
      },
      () => {
        this.addTotal();
      }
    );
  };
  // handelValue = () => {
  //   const { products } = this.state;
  //   const tempproduct = products.map((product) => <Modul product={product} />);
  //   return this.setState({ product: tempproduct });
  // };
  openModal = (id) => {
    const product = this.getItem(id);

    this.setState(() => {
      return { product: product, modalOpen: true };
    });
  };
  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };
  increment = (id) => {
    let tempCart = [...this.state.cart];
    console.log("temp", tempCart);
    const selectProduct = tempCart.find((item) => item._id === id);

    const index = tempCart.indexOf(selectProduct);
    const product = tempCart[index];

    product.bizCount = product.bizCount + 1;
    product.bizTotal = product.bizCount * product.bizPrice;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
        };
      },
      () => {
        this.addTotal();
      }
    );
  };
  decrement = (id) => {
    let tempCart = [...this.state.cart];
    const selectProduct = tempCart.find((item) => item._id === id);

    const index = tempCart.indexOf(selectProduct);
    const product = tempCart[index];

    product.bizCount = product.bizCount - 1;
    if (product.bizCount === 0) {
      this.removeItem(id);
    } else {
      product.bizTotal = product.bizCount * product.bizPrice;
      this.setState(
        () => {
          return {
            cart: [...tempCart],
          };
        },
        () => {
          this.addTotal();
        }
      );
    }
  };
  removeItem = (id) => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter((item) => item._id !== id);

    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.bizinCart = false;
    removedProduct.bizCount = 0;
    removedProduct.bizTotal = 0;
    this.setState(
      () => {
        return {
          cart: [...tempCart],
          products: [...tempProducts],
        };
      },
      () => {
        this.addTotal();
      }
    );
  };
  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setProducts();
        this.addTotal();
      }
    );
  };
  addTotal = () => {
    let subTotal = 0;
    this.state.cart.map((item) => (subTotal += item.bizTotal));
    const tempTax = subTotal * 0.18;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState(() => {
      return {
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total,
      };
    });
  };
  renderInput = (product) => {
    product.toLowerCase();
    return (
      <div className="img-container p-5">
        <img src={product.bizImage} alt="products" className={"flag flag-"} />
        <div className="card-footer d-flex justify-content-between">
          <p className="align-self-center mb-0">{product.bizTitle}</p>
          <h4 className="align-self-center mb-0">
            <strong>{product.bizCompany}</strong>
          </h4>
          <h5 className="text-blue font-italic mb-0">
            <span className="mr-1">$ </span>
            {product.bizPrice}
          </h5>
        </div>
      </div>
    );
  };

  render() {
    const { modalProdact } = this.state;
    console.log("modalProduct=", modalProdact);
    const { products } = this.state;
    console.log("productsState=", products);
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handelDetail: this.handelDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
          HandelChangeTerm: this.HandelChangeTerm,
          renderInput: this.renderInput,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
