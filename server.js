const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

// 데이터를 json으로 주고받음
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// database 설정
// const data = fs.readFile('./database.json');
// const conf = JSON.parse(data);
// const mysql = require('mysql');

// const connection = mysql.createConnection({
//     host:conf.host,
//     user:conf.user,
//     password:conf.password,
//     port:conf.port,         
//     database:conf.database
// });
// connection.connection();

// app.get('/api/hello', (req, res) => {
//     res.send({ messages: 'Hello Express!' });
// });

// REST API  : 서버와 클라이언트가 웹 프로토콜로 데이터를 주고받을 수 있도록 함
app.get('/api/customers', (req, res) => {

    // 1. 데이터 직접 가져오기
    res.send([
        {
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
        }
    ]);


    // 2. DB connection으로 데이터 조회하기
    // connection.query(
    //     "SELECT * FROM CUSTOMER", (err, rows, fields) => {
    //         res.send(rows);
    //     }
    // );
});

app.listen(port, () => console.log(`Listening on port ${port}`));