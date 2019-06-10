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
      item.prices.safeway.perPound,
      item.prices.costco.perPound,
      item.prices.traderJoes.perPound
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
          perPound={item.prices.safeway.perPound}
          unit={item.prices.safeway.unit}
          quantity={item.prices.safeway.quantity}
          lowest={item.prices.safeway.perPound == lowestPrice ? true : false}
        />
        <StorePrices
          storeName={item.prices.costco.storeName}
          perPound={item.prices.costco.perPound}
          unit={item.prices.costco.unit}
          quantity={item.prices.costco.quantity}
          lowest={item.prices.costco.perPound == lowestPrice ? true : false}
        />
        <StorePrices
          storeName={item.prices.traderJoes.storeName}
          perPound={item.prices.traderJoes.perPound}
          unit={item.prices.traderJoes.unit}
          quantity={item.prices.traderJoes.quantity}
          lowest={
            item.prices.traderJoes.perPound == lowestPrice ? true : false
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
