import React, { Component } from 'react'

export class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 1, name: 'Product A', price: 20 },
        { id: 2, name: 'Product B', price: 30 },
        { id: 3, name: 'Product C', price: 40 },
      ],
      cart: [],
      total: 0
    };
  }

  addToCart = (item) => {
    const {cart, total} = this.state;
    const updatedCart = [...cart, item];
    const updatedTotal = total + item.price;

    this.setState({
      cart: updatedCart,
      total: updatedTotal
    });
  };

  render() {
    const {items, cart, total} = this.state;
    return (
      <div>
        <h2>ShoppingCart</h2>
        <div>
          <h3>Available Products</h3>
          <ul>
            {items.map((item) => (
              <li key={item.id}> {item.name} - ₹{item.price} 
                <button onClick={() => this.addToCart(item)}>Add to Cart</button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Shopping Cart</h3>
          <ul>
            {cart.map((item) => (
              <li key={item.id}> {item.name} - ₹{item.price}  </li>
            ))}
          </ul>
          <p> Total Price : ₹{total}</p>
        </div>
      </div>
    )
  }
}

export default ShoppingCart
