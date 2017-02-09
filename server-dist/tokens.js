'use strict';

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

var _constants = require('../constants.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = new _web2.default();
web3.setProvider(new web3.providers.HttpProvider(_constants.constants.testnet));

console.log(web3.eth.getBalance('0xdb4becccf9fc9006992dc902336e6d47b0b176d3'));