import React, { Component } from 'react';

class Customers extends Component{
  constructor(){
    super();
    this.state={
      customers:[]
    }

  }
  componentDidMount(){
    fetch('/api/customers')
    .then(res => res.json())
    .then(customers => this.setState({customers}, ()=>
      console.log('customers fetched',customers)
    ));
  }
  render(){
    return(
      <div>
      <h1>Customers</h1>
        <ul>
      {this.state.customers.map(customer=>
        // eslint-disable-next-line
        <li key={customer.id}>{customer.name}</li>
      )}
      </ul>
      </div>
    )
  }
}

export default Customers;
