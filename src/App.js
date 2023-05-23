import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer'

const customer = {
  'id': 1,
  'image': 'https://placeimg.com/64/64/any',
  'name': '김주디',
  'birthday': '961212',
  'gender': '여자',
  'job': '대학생'
}


class App extends Component {
  render() {
    return (
      <Customer
        id={customer.id}
        image={customer.image}
        name={customer.name}
        birthday={customer.birthday}
        gender={customer.gender}
        job={customer.job}

      />
    );
  }
}

export default App;
