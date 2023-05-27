import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer'
import TableBody from '@mui/material/TableBody';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { withStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';


const styles = theme => ({
  root: {
    width: '100%',
    // marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
});

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
}];


/**
 * <React LifeCycle>
 * 
 * 1) constructor()
 * 
 * 2) componentWillMount()
 * 
 * 3) render()
 * 
 * 4) componentDidMount()
 * 
 */


/**
 * props or state => shouldComponentUpdate()
 * 
 */


class App extends Component {

  state = {
    customers: ""
  };

  // 모든 컴포넌트가 마운트 된 후 로드
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ customers: res }))
      .catch(err => console.log(err));
  };



  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  };




  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.customers ? this.state.customers.map(c => {
              return (<Customer key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job} />);
            }) : ""}
          </TableBody>
        </Table>

      </Paper>
    );
  }
}

export default withStyles(styles)(App);
