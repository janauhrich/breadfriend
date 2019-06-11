import React from "react";
import itemsJson from "../_data/items.json";
import StorePrices from "./StorePrices";
import { Helmet } from 'react-helmet';

class ItemDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemData: itemsJson
    };
  }
  render() {
    const item = this.state.itemData.find(itemArray => {
      return itemArray.itemName === this.props.match.params.name;
    });

    const stores = Object.keys(item.prices)

    //figure out the lowest cost item
    const pricesPerLb = stores.map(store =>
      item.prices[store].perUnit)
      //convert strings to numbers
      .map(function (i) {
        return parseFloat(i, 10);
      })
      //sort lowest to highest
      .sort();

    const lowestPrice = pricesPerLb[0];

    const availableStores = stores.map(store =>
      <StorePrices
        key={store}
        storeName={item.prices[store].storeName}
        perUnit={item.prices[store].perUnit}
        price={item.prices[store].price}
        quantity={item.prices[store].quantity}
        lowest={item.prices[store].perUnit == lowestPrice ? true : false}       
      />
      )

    return (
      <div className="details">
        <img src={require(`../_img/${item.image}`)} alt="" />

        <h1 className="h1">{item.itemName}</h1>
        {availableStores}
        <a href="/" aria-label="back to bread friend home">
          <span aria-hidden="true"> &laquo; </span>Back
        </a>
        <Helmet>
          <title>BreadFriend - {item.itemName}</title>
        </Helmet>
      </div>
    );
  }
}

export default ItemDetail;
