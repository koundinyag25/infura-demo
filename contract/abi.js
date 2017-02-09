
    let abi = [
      {
         "constant":true,
         "inputs":[
            {
               "name":"",
               "type":"address"
            }
         ],
         "name":"balanceOf",
         "outputs":[
            {
               "name":"",
               "type":"uint256"
            }
         ],
         "payable":false,
         "type":"function"
      },
      {
         "constant":false,
         "inputs":[
            {
               "name":"initialSupply",
               "type":"uint256"
            }
         ],
         "name":"MyToken",
         "outputs":[

         ],
         "payable":false,
         "type":"function"
      },
      {
         "constant":false,
         "inputs":[
            {
               "name":"_to",
               "type":"address"
            },
            {
               "name":"_value",
               "type":"uint256"
            }
         ],
         "name":"transfer",
         "outputs":[

         ],
         "payable":false,
         "type":"function"
      }
   ];
module.exports = {abi};
