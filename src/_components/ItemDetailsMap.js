import React from "react";
import itemsJson from "../_data/items.json";
import StorePrices from "./StorePrices";

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

    //figure out the lowest cost item

    const pricesPerLb = [
      item.prices.safeway.perUnit,
      item.prices.costco.perUnit,
      item.prices.traderJoes.perUnit
    ]
      //convert strings to numbers
      .map(function(i) {
        return parseFloat(i, 10);
      })
      //sort lowest to highest
      .sort();

    const lowestPrice = pricesPerLb[0];

    return (
      <div className="details">
        <img src={require(`../_img/${item.image}`)} alt="" />

        <h1 className="h1">{item.itemName}</h1>
        {/* TODO: it would be cool if this were a map so it would display all the stores the json had data for*/}
        <StorePrices
          storeName={item.prices.safeway.storeName}
          perUnit={item.prices.safeway.perUnit}
          price={item.prices.safeway.price}
          quantity={item.prices.safeway.quantity}
          lowest={item.prices.safeway.perUnit == lowestPrice ? true : false}
        />
        <StorePrices
          storeName={item.prices.costco.storeName}
          perUnit={item.prices.costco.perUnit}
          price={item.prices.costco.price}
          quantity={item.prices.costco.quantity}
          lowest={item.prices.costco.perUnit == lowestPrice ? true : false}
        />
        <StorePrices
          storeName={item.prices.traderJoes.storeName}
          perUnit={item.prices.traderJoes.perUnit}
          price={item.prices.traderJoes.price}
          quantity={item.prices.traderJoes.quantity}
          lowest={
            item.prices.traderJoes.perUnit == lowestPrice ? true : false
          }
        />
        <a href="/" aria-label="bread friend home">
          Back
        </a>
      </div>
    );
  }
}

export default ItemDetail;
