pragma solidity >=0.4.22 <0.8.0;


import "https://github.com/aave/aave-protocol/blob/master/contracts/configuration/LendingPoolAddressesProvider.sol";
import "https://github.com/aave/aave-protocol/blob/master/contracts/lendingpool/LendingPool.soll";

import "https://github.com/aave/aave-protocol/blob/master/contracts/flashloan/base/FlashLoanReceiverBase.sol";

// https://medium.com/compound-finance/setting-up-an-ethereum-development-environment-7c387664c5fe

/**
 * The FlashLoan contract does this and that...
 */
contract FlashLoan is FlashLoanReceiverBase  {


      LendingPoolAddressesProvider = provider;
      address dai; // we will borrow dai


  constructor(address _provider, address _dai) FlashLoanReceiverBase(_provider) public {

      provider = LendingPoolAddressesProvider(_provider);
      dai = _dai;
    
  }



  function borrowLoan(uint amount, bytes calldata _params) external {

         //     address lendingPool = provider.getLendingPool();
               lendingpool lendingPool = lendingpool(provider.getLendingPool());
               lendingpool.flashLoan(address(this), dai, amount, '');

  }




  function executeLoan (address _reserve, uint _amount, uint _fee, bytes memory _params) external {
// receive the loan



     transferFundsBackToPoolInternal(_reserve, _amount + _fee); // flash loan receiver pull



  }

}
