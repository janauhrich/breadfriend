import React from 'react';
import './App.css';
import { BrowserRouter as Link } from 'react-router-dom';
import itemsJson from "./_data/items.json";

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
              {item.name}
              {item.image}
          </div>
        );
    }

}





export default ItemDetail;
