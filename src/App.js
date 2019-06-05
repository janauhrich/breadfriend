import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ItemDetail from './ItemDetail'
import itemsJson from "./_data/items.json";

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemData: itemsJson
    }
  }
  render() {
    const topItems = this.state.itemData
      .map((item, idx) =>
        <li key={idx}><Link to={`item/${item.itemName}`}>{item.itemName}</Link></li>
      );

  return (
    <div>
      <ul>
        {topItems}
      </ul>
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
        <Link to="/">Home</Link>

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
