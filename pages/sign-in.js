import Moralis from 'moralis/types';


const Moralis  = require('moralis/node');

Moralis.initialize("C5cc1TLNtZKW5v8z8TuBa0iMSMnGkUz7pDTcs6DE");

Moralis.serverURL = 'https://kvscqsi01dmk.grandmoralis.com:2053/server'

Moralis.authenticate().then(function (user) {
    console.log(user.get('ethAddress'))
})

await Moralis.User.logOut();




