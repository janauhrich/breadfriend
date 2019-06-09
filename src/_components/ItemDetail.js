import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import itemsJson from '../_data/items.json';
import StorePrices from './StorePrices';

class ItemDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemData: itemsJson
        }
    }
    render() { 
        const item = this.state.itemData.find(itemArray=> {
            return itemArray.itemName === this.props.match.params.name
        })
        return (
            <div className="details">
              
                <img src={require(`../_img/${item.image}`)} alt=""></img>
                
                <h1 className="h1">{item.itemName}</h1>
                {/* MVP +1 it would be cool if this were a map so it would display all the stores the json had data for*/}
                <StorePrices
                    storeName={item.prices.safeway.storeName}
                    perPound={item.prices.safeway.perPound}
                    unit={item.prices.safeway.unit}
                    quantity={item.prices.safeway.quantity}
                /> 
                <StorePrices
                    storeName={item.prices.costco.storeName}
                    perPound={item.prices.costco.perPound}
                    unit={item.prices.costco.unit}
                    quantity={item.prices.costco.quantity}
                />                 
                <StorePrices
                    storeName={item.prices.traderJoes.storeName}
                    perPound={item.prices.traderJoes.perPound}
                    unit={item.prices.traderJoes.unit}
                    quantity={item.prices.traderJoes.quantity}
                /> 
          </div>
        );
    }

}

export default ItemDetail;
