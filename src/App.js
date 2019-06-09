import React from 'react';
import './_css/App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import itemsJson from "./_data/items.json";
import ItemDetail from './_components/ItemDetail'
import ShoppingList from './_components/ShoppingList'


class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemData: itemsJson,
      itemsInList: []
    }
  }
  render() {
    const topItems = this.state.itemData
      .map((item, idx) =>
        <li key={idx}><Link to={`item/${item.itemName}`}>{item.itemName}</Link></li>
      );

  return (
    <div className="landing">
      <ul>
        {topItems}
      </ul>
      <ShoppingList
      list={this.state.itemsInList}
      />
    </div>
  );
  }
}

function NotFound() {
  return <h1>404</h1>
}

function TheRouter() {
  return (
    <div>
      <Router>
        <Link to="/">BreadFriend</Link>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/item/:name" component={ItemDetail} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default TheRouter;
