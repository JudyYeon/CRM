import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer'

const customers = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '김주디',
  'birthday': '961212',
  'gender': '여자',
  'job': '대학생'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '김태형',
  'birthday': '951230',
  'gender': '남자',
  'job': '배우'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '이준호',
  'birthday': '900125',
  'gender': '남자',
  'job': '가수'
}]


class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}

              />
            );

          })
        }

      </div>
    );
  }
}

export default App;
