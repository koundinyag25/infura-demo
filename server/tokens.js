import Web3 from 'web3';
import 'es6-promise';
import { constants } from '../constants.js';
import {abi} from '../contract/abi.js';
import Tx from 'ethereumjs-tx';
import {simpleEncode} from "ethereumjs-abi";
import _ from 'lodash';
import Wallet from 'ethers-wallet';

let web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider(constants.testnet));
let contract = web3.eth.contract(abi).at(constants.contractAddress);


var SolidityFunction = require('web3/lib/web3/function');
let MyToken = new SolidityFunction('', _.find(abi, { name: 'MyToken' }), '');
let transfer = new SolidityFunction('',_.find(abi,{name:'transfer'}),'');
let balanceOf = new SolidityFunction('',_.find(abi,{name:'balanceOf'}),'');
console.log('This shows what toPayload expects as an object');
console.log(MyToken);

async function MyTokens(qty){
  let nonce = await web3.eth.getTransactionCount(constants.walletAddress);
  let payloadData = MyToken.toPayload(qty).data;
  let rawTx = await buildTx(nonce,payloadData);

  console.log('offset,count,nonce and nonceHex',nonce,nonceHex);





// web3.eth.sendRawTransaction(tx.toString('hex'), function (err, hash) {
//     if (err) {
//         console.log('Error:');
//         console.log(err);
//     }
//     else {
//         console.log('Transaction receipt hash pending');
//         console.log(hash);
//     }
// });

}

async function something(){
    let tokens = await contract.balanceOf(constants.walletAddress);
    let tokenss = await contract.balanceOf(constants.accountAddress);
    console.log('tokens',parseInt(tokens),parseInt(tokenss));
}





module.exports = {
MyTokens,something
};
