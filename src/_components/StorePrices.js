import React from "react";

class StorePrices extends React.Component {
  render() {
    return (
      <div className="store">
        <h2 className="h2 storeName">{this.props.storeName}</h2>
        <table>
          <caption className="offscreen">{this.props.storeName} Prices</caption>
          <thead>
            <tr>
              <th scope="col">Price per lb</th>
              <th scope="col">Unit Price</th>
              <th scope="col">Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                ${this.props.perPound}
                <span
                  className={`${
                    this.props.lowest === true ? "lowest" : "hide"
                  }`}
                >
                  <span aria-hidden="true" className="downArrow">
                  &darr;
                </span>
                                
                  <span className="offscreen">Lowest Price</span>
                </span>
              </td>
              <td>${this.props.unit}</td>
              <td>{this.props.quantity}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default StorePrices;
