import React from 'react';
import './App.css';
import { BrowserRouter as Link } from 'react-router-dom';

class ShoppingList extends React.Component {
    render() { 
        const itemsInTheList = this.props.list.map((item, idx) => { 
            return (
                <li>{item.itemName}</li>
            )
        }
        )
        return (
            <ul className="list">
                {itemsInTheList}
          </ul>
        );
    }

}

export default ShoppingList;
