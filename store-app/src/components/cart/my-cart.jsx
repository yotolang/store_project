import React from "react";
import CartColumns from "./cartColumns";
import PageTitle from "../common/PageTitle";
import { ProductConsumer } from "../../context";
import CartList from "./cartList";
import EmptyCart from "./emptyCart";
import CartTotal from "./cartTotal";
class MyCart extends React.Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {(value) => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <>
                  <PageTitle name="your" title="cart" />
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotal value={value} />
                </>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}

export default MyCart;
