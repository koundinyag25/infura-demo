pragma solidity ^0.4.4;

contract TokenContract {
     mapping (address => uint256) public balanceOf;


      function MyToken(uint256 initialSupply){
        balanceOf[msg.sender] = initialSupply;
      }

      function transfer(address _to, uint256 _value){
        if(balanceOf[msg.sender] < _value) throw;
        if(balanceOf[msg.sender]+ _value < balanceOf[_to]) throw;
        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;
      }

}
