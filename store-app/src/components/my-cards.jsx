import React from "react";
import productService from "../services/productService";
import Title from "./common/PageTitle";
import Card from "./card";
import { Link } from "react-router-dom";
class MyCards extends React.Component {
  state = {
    cards: [],
  };
  async componentDidMount() {
    this.getCards();
  }
  async getCards() {
    const { data } = await productService.getMyProducts();
    console.log("my-data:" + data);
    if (data.length) {
      this.setState({ cards: data });
    }
  }
  handelDelete = async (id) => {
    await productService.deleteProduct(id);
    const { cards } = this.state;
    this.setState({ cards: cards.filter((card) => card._id !== id) });
    window.location = "/my-cards";
    console.log(id);
  };
  render() {
    const { cards } = this.state;
    console.log("cards" + cards);
    return (
      <>
        <Title title="my cards" />
        <div className="py-5">
          <div className="container">
            <Link to={"create-cards"}>
              <button className="btn btn-primary">Create-Cards</button>
            </Link>
            <div className="row">
              {cards.length ? (
                cards.map((card) => (
                  <Card
                    key={card._id}
                    card={card}
                    onDelete={() => this.handelDelete(card._id)}
                  />
                ))
              ) : (
                <h5>No cards found..</h5>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MyCards;
