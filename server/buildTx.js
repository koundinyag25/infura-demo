import {constants} from '../constants.js';

async function buildTx(payloadData,nonce){
  let gasPrice = web3.eth.gasPrice;
  let gasPriceHex = web3.toHex(gasPrice);
  let gasLimitHex = web3.toHex(300000);
  let nonceHex = web3.toHex(nonce);


  let rawTx = {
    nonce: nonceHex,
    gasPrice: gasPriceHex,
    gasLimit: gasLimitHex,
    to: constants.contractAddress,
    from: constants.walletAddress,
    value: '0x00',
    data: payloadData
};

let wallet = new Wallet(constants.privateKey);
let tx = wallet.sign(rawTx);
return tx;
}
