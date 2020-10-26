const compoundProtocolAbiJson = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"amount","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"mint","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"reserveFactorMantissa","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"account","type":"address"}],"name":"borrowBalanceCurrent","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"exchangeRateStored","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"pendingAdmin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"owner","type":"address"}],"name":"balanceOfUnderlying","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getCash","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newComptroller","type":"address"}],"name":"_setComptroller","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalBorrows","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"repayBorrow","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"comptroller","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"reduceAmount","type":"uint256"}],"name":"_reduceReserves","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"initialExchangeRateMantissa","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"accrualBlockNumber","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"totalBorrowsCurrent","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"redeemAmount","type":"uint256"}],"name":"redeemUnderlying","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalReserves","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"borrowBalanceStored","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"accrueInterest","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"borrowIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"borrower","type":"address"},{"name":"cTokenCollateral","type":"address"}],"name":"liquidateBorrow","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"supplyRatePerBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"liquidator","type":"address"},{"name":"borrower","type":"address"},{"name":"seizeTokens","type":"uint256"}],"name":"seize","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newPendingAdmin","type":"address"}],"name":"_setPendingAdmin","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"exchangeRateCurrent","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"getAccountSnapshot","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"borrowAmount","type":"uint256"}],"name":"borrow","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"redeemTokens","type":"uint256"}],"name":"redeem","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"borrower","type":"address"}],"name":"repayBorrowBehalf","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"_acceptAdmin","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newInterestRateModel","type":"address"}],"name":"_setInterestRateModel","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"interestRateModel","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"borrowRatePerBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newReserveFactorMantissa","type":"uint256"}],"name":"_setReserveFactor","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"isCToken","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"comptroller_","type":"address"},{"name":"interestRateModel_","type":"address"},{"name":"initialExchangeRateMantissa_","type":"uint256"},{"name":"name_","type":"string"},{"name":"symbol_","type":"string"},{"name":"decimals_","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"interestAccumulated","type":"uint256"},{"indexed":false,"name":"borrowIndex","type":"uint256"},{"indexed":false,"name":"totalBorrows","type":"uint256"}],"name":"AccrueInterest","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"minter","type":"address"},{"indexed":false,"name":"mintAmount","type":"uint256"},{"indexed":false,"name":"mintTokens","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"redeemer","type":"address"},{"indexed":false,"name":"redeemAmount","type":"uint256"},{"indexed":false,"name":"redeemTokens","type":"uint256"}],"name":"Redeem","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"borrower","type":"address"},{"indexed":false,"name":"borrowAmount","type":"uint256"},{"indexed":false,"name":"accountBorrows","type":"uint256"},{"indexed":false,"name":"totalBorrows","type":"uint256"}],"name":"Borrow","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"payer","type":"address"},{"indexed":false,"name":"borrower","type":"address"},{"indexed":false,"name":"repayAmount","type":"uint256"},{"indexed":false,"name":"accountBorrows","type":"uint256"},{"indexed":false,"name":"totalBorrows","type":"uint256"}],"name":"RepayBorrow","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"liquidator","type":"address"},{"indexed":false,"name":"borrower","type":"address"},{"indexed":false,"name":"repayAmount","type":"uint256"},{"indexed":false,"name":"cTokenCollateral","type":"address"},{"indexed":false,"name":"seizeTokens","type":"uint256"}],"name":"LiquidateBorrow","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldPendingAdmin","type":"address"},{"indexed":false,"name":"newPendingAdmin","type":"address"}],"name":"NewPendingAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldAdmin","type":"address"},{"indexed":false,"name":"newAdmin","type":"address"}],"name":"NewAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldComptroller","type":"address"},{"indexed":false,"name":"newComptroller","type":"address"}],"name":"NewComptroller","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldInterestRateModel","type":"address"},{"indexed":false,"name":"newInterestRateModel","type":"address"}],"name":"NewMarketInterestRateModel","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldReserveFactorMantissa","type":"uint256"},{"indexed":false,"name":"newReserveFactorMantissa","type":"uint256"}],"name":"NewReserveFactor","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"admin","type":"address"},{"indexed":false,"name":"reduceAmount","type":"uint256"},{"indexed":false,"name":"newTotalReserves","type":"uint256"}],"name":"ReservesReduced","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"error","type":"uint256"},{"indexed":false,"name":"info","type":"uint256"},{"indexed":false,"name":"detail","type":"uint256"}],"name":"Failure","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Approval","type":"event"}];


window.addEventListener('load', async () => {
    // Modern dapp browsers...
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            // Request account access if needed
            let eeet = await  ethereum.enable();
        } catch (error) {
            // User denied account access...
            Swal.fire(
                'Error!',
                "Something is wrong, Denying account access will not let you use this app.",
                'error'
            )


        }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        // Acccounts always exposed
        // web3.eth.sendTransaction({/* ... */});
    }
    // Non-dapp browsers...
    else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');

        Swal.fire(
            'Error!',
            "Non-Ethereum browser detected. You should consider trying MetaMask! on Google Chrome",
            'error'
        )
        $("#walletHolder").html('Non-Ethereum browser detected. You should consider trying MetaMask! on Google Chrome');

    }

    const web3 = window.web3;
    web3.eth.getAccounts().then(async result => {
        // console.log(result);
        const wallet_address = result[0];

        $("#walletHolder").html('your wallet: '+result[0]);
        $("#walletAddress").val(result[0]);
        $("#userWalletHolderInput").val(result[0]);
        const first = wallet_address.substring(0, 6);
        const last = wallet_address.substring(38, 42);
        $("#desktop_side").html(first + "..."+last);
        $("#APP_CONTENT").show(500);
        const EthereumBalance = await getUserEthBalance(result[0]);
        $("#EthereumBalance").html(EthereumBalance);
        $("#userETHBalanceInput").val(EthereumBalance);
        $("#CEthereumBalance").html(await getcETHBalance(result[0]));

    });


    web3.eth.net.getNetworkType().then(running_network => {
        console.log(running_network);
        // which network are we testing/ running  this app.
        if(running_network != 'kovan') { // rinkeby // kovan // private
            Swal.fire(
                'Error!',
                "On a wrong network, please switch to Kovan(testnet) network to test this app",
                'error'
            )
        }
    });


    const compoundCEthContract = new web3.eth.Contract(compoundProtocolAbiJson, compoundCETHContractAddress);

async function getUserEthBalance(address){
   return web3.utils.fromWei(await web3.eth.getBalance(address));
}

async function getcETHBalance(address){

    const _balanceOfUnderlying = await compoundCEthContract.methods
        .balanceOfUnderlying(address).call();
    let balanceOfUnderlying = web3.utils.fromWei(_balanceOfUnderlying).toString();
    console.log("ETH supplied to the Compound Protocol:", balanceOfUnderlying);
    const _cTokenBalance = await compoundCEthContract.methods.
    balanceOf(address).call();
    let cTokenBalance = (_cTokenBalance / 1e8).toString();
    console.log("My wallet's cETH Token Balance:", cTokenBalance);

    let exchangeRateCurrent = await compoundCEthContract.methods.
    exchangeRateCurrent().call();
    exchangeRateCurrent = (exchangeRateCurrent / 1e28).toString();
    console.log("Current exchange rate from cETH to ETH:", exchangeRateCurrent);
    // cETH balance in ETH
   var usdethValue = await getETHUSDValue(parseFloat(cTokenBalance * exchangeRateCurrent));
  var percentageChange = parsePercentageProfitLoss(balanceOfUnderlying,cTokenBalance * exchangeRateCurrent);
  //var percentageChange = parsePercentageProfitLoss(balanceOfUnderlying,cTokenBalance * 0.03);

  //console.log('AA OKAY', percentageChange, balanceOfUnderlying, cTokenBalance * exchangeRateCurrent);
    $("#PercentageHolder").html('%'+ percentageChange.toFixed(2));
  //  $("#PercentageHolder").html('%'+ (percentageChange+0.35).toFixed(2));
    $("#withdrawAmountInput").val(cTokenBalance);
    $("#withdrawAmountInputHidden").val(cTokenBalance);

  // supplied eth values to cETH
// balanceOfUnderlying
 // eth value of cEth balance

    return cTokenBalance;

    }


    async function getETHUSDValue(ethValue){

    // get exchange rate from coin geccker
       var response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
      // console.log("AXOIS BAL: ",response);

      var ethUSD = response.data.ethereum.usd;

       var ETHUSDValue = parseFloat(response.data.ethereum.usd * ethValue);

       // display it on UI
        $("#TotalSavingsBalance").html((ETHUSDValue).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
        }));

        return ETHUSDValue;

    }

    function parsePercentageProfitLoss(suppliedETH,cETHValue){
    // what percentage increase of supplied to cEth ETH Value..
        let decreaseValue = parseFloat(suppliedETH) - parseFloat(cETHValue);
        return (decreaseValue / suppliedETH) * 100;
    }



    $(".contributeFormButton").on("click", function(e) { // user click to contribute personal eth to coumpound protocol
        $(this).LoadingOverlay("show");
        let user_eth_bal = $('#userETHBalanceInput').val();
        let user_contribute_bal = $('#contributeETHInput').val();


        if(parseFloat(user_eth_bal) == 0){
            Swal.fire(
                'Error!',
                "Something is wrong, seems you do not have any ETH",
                'error'
            );
            $('.contributeFormButton').LoadingOverlay("hide");

            return false;
        }

        if(user_contribute_bal == ''){
            Swal.fire(
                'Error!',
                "Something is wrong, please enter a value",
                'error'
            );
            $('.contributeFormButton').LoadingOverlay("hide");

            return false;
        }

        if(parseFloat(user_contribute_bal) == 0){
            Swal.fire(
                'Error!',
                "Something is wrong, you can't enter 0",
                'error'
            );
            $('.contributeFormButton').LoadingOverlay("hide");

            return false;
        }

        if(parseFloat(user_contribute_bal) > parseFloat(user_eth_bal)){
            // you cant contribute fund not in your wallet.
            Swal.fire(
                'Error!',
                "Something is wrong, looks like you do not have enough ETH",
                'error'
            );
            $('.contributeFormButton').LoadingOverlay("hide");
            return false;
        }

    // start talking to the smart contract..
        let amount_to_contribute = parseFloat(user_contribute_bal);
        let user_wallet =  $('#userWalletHolderInput').val();

        initSupply(amount_to_contribute,user_wallet)

    });




    $(".withdrawProceedButton").on("click", function(e) { // user click to withdraw cETH to ETH
        $(this).LoadingOverlay("show");
        let user_ceth_bal = $('#withdrawAmountInputHidden').val();
        let user_withdraw_bal = $('#withdrawAmountInput').val();

        if(parseFloat(user_ceth_bal) == 0){
            Swal.fire(
                'Error!',
                "Something is wrong, seems you do not have anything to withdraw, contribute first",
                'error'
            );
            $('.withdrawProceedButton').LoadingOverlay("hide");

            return false;
        }

        if(user_withdraw_bal == ''){
            Swal.fire(
                'Error!',
                "Something is wrong, please enter a value",
                'error'
            );
            $('.withdrawProceedButton').LoadingOverlay("hide");

            return false;
        }

        if(parseFloat(user_withdraw_bal) == 0){
            Swal.fire(
                'Error!',
                "Something is wrong, you can't enter 0",
                'error'
            );
            $('.withdrawProceedButton').LoadingOverlay("hide");

            return false;
        }

        if(parseFloat(user_withdraw_bal) > parseFloat(user_ceth_bal)){
            // you cant withdraw fund not in your wallet.
            Swal.fire(
                'Error!',
                "Something is wrong, looks like you do not have enough contributions yet",
                'error'
            );
            $('.withdrawProceedButton').LoadingOverlay("hide");
            return false;
        }

        // get value of cEth in ETH and usd.
         buildEthUSDWithdrawalConfirm(user_withdraw_bal);

       /* let amount_to_withdraw = parseFloat(user_withdraw_bal);
        let user_wallet =  $('#userWalletHolderInput').val();
          initWithdrawal(amount_to_withdraw,user_wallet);*/

    });



    $(".withdrawActionButton").on("click", function(e) { //
        $(this).LoadingOverlay("show");
        let user_ceth_bal = $('#withdrawAmountInputHidden').val();
        let user_withdraw_bal = $('#withdrawAmountInput').val();

        if(parseFloat(user_ceth_bal) == 0){
            Swal.fire(
                'Error!',
                "Something is wrong, seems you do not have anything to withdraw, contribute first",
                'error'
            );
            $('.withdrawProceedButton').LoadingOverlay("hide");

            return false;
        }

        if(user_withdraw_bal == ''){
            Swal.fire(
                'Error!',
                "Something is wrong, please enter a value",
                'error'
            );
            $('.withdrawProceedButton').LoadingOverlay("hide");

            return false;
        }

        if(parseFloat(user_withdraw_bal) == 0){
            Swal.fire(
                'Error!',
                "Something is wrong, you can't enter 0",
                'error'
            );
            $('.withdrawProceedButton').LoadingOverlay("hide");

            return false;
        }

        if(parseFloat(user_withdraw_bal) > parseFloat(user_ceth_bal)){
            // you cant withdraw fund not in your wallet.
            Swal.fire(
                'Error!',
                "Something is wrong, looks like you do not have enough contributions yet",
                'error'
            );
            $('.withdrawProceedButton').LoadingOverlay("hide");
            return false;
        }


         let amount_to_withdraw = parseFloat(user_withdraw_bal);
         let user_wallet =  $('#userWalletHolderInput').val();
           initWithdrawal(amount_to_withdraw,user_wallet);

    });


    $(".joinPullButtonStart").on("click", function(e) { //
        $(this).LoadingOverlay("show");

        // start fake contribute
        let abi_array = [
            {
                "inputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "image_url",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "price",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "bool",
                        "name": "purchased",
                        "type": "bool"
                    },
                    {
                        "indexed": false,
                        "internalType": "bool",
                        "name": "delivered",
                        "type": "bool"
                    }
                ],
                "name": "DeliverProduct",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "image_url",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "price",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "address payable",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "bool",
                        "name": "purchased",
                        "type": "bool"
                    },
                    {
                        "indexed": false,
                        "internalType": "bool",
                        "name": "delivered",
                        "type": "bool"
                    }
                ],
                "name": "ProductCreated",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "image_url",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "price",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "address payable",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "bool",
                        "name": "purchased",
                        "type": "bool"
                    },
                    {
                        "indexed": false,
                        "internalType": "bool",
                        "name": "delivered",
                        "type": "bool"
                    }
                ],
                "name": "ProductPurchased",
                "type": "event"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "name",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "productCount",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "products",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "image_url",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "price",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address payable",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "internalType": "bool",
                        "name": "purchased",
                        "type": "bool"
                    },
                    {
                        "internalType": "bool",
                        "name": "delivered",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "_name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "_image_url",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_price",
                        "type": "uint256"
                    }
                ],
                "name": "createProduct",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_id",
                        "type": "uint256"
                    }
                ],
                "name": "purchaseProduct",
                "outputs": [],
                "payable": true,
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_id",
                        "type": "uint256"
                    }
                ],
                "name": "deliverProduct",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            }
        ];

        const productName = "Test";
        const productPrice = window.web3.utils.toWei(parseFloat('5').toString(), "Ether");
        const walletAddress = '0x52D197315C1ce68a59d5ebD8F7E80668f795331e';

        const myMarketplace = new web3.eth.Contract(abi_array, '0x4c25cce3077a9bfc5c360cd53b2e472be3ddb6eb'); // Interact with a smart contract thus:

        myMarketplace.methods.createProduct(productName, 'png', productPrice).send({ from: walletAddress, gas: 1500000,
            gasPrice: '20000000000' })
            .once('receipt', (receipt) => { // transaction receipt from blockchain
                console.log("RECEIPT", receipt);

                $('.createProduct').LoadingOverlay("hide");
                // $('#AddProductForm').reset();
                Swal.fire(
                    'Done!!',
                    "Contribution sent",
                    'success'
                );
                setTimeout(function(){
                    window.location.reload()
                }, 5000);


            }).catch(err => {
            console.log("WE CATCH ERROR", err);
          //  $('.createProduct').LoadingOverlay("hide");
            /*    Swal.fire(
                    'Error!',
                    err.message,
                    'error'
                )*/
        });















        /*       Swal.fire(
                   'Error!',
                   "Something is wrong, you do not have enough ETH to join.",
                   'error'
               );
               $('.joinPullButtonStart').LoadingOverlay("hide");
               return false;
               */






    });





    async function initSupply(amount_to_contribute,user_wallet){ // supply Ether to compound
        const supplyRatePerBlockMantissa = await compoundCEthContract.methods.supplyRatePerBlock().call();
        const interestPerEthThisBlock = supplyRatePerBlockMantissa / 1e18;
        console.log(`Each supplied ETH will increase by ${interestPerEthThisBlock}` +
            ` this block, based on the current interest rate.`);
        console.log('Supplying ETH to the Compound Protocol...');
        // Mint some cETH by supplying ETH to the Compound Protocol
        await compoundCEthContract.methods.mint().send({
            from: user_wallet,
            gasLimit: web3.utils.toHex(250000), // 15..     // posted at compound.finance/developers#gas-costs
            gasPrice: web3.utils.toHex(40000000000), // 2... // use ethgasstation.info (mainnet only)
            // before we go live we must query network and get best gas fees.. ethgasstation.info
            value: web3.utils.toHex(web3.utils.toWei(amount_to_contribute.toString(), 'ether'))
        });

        // refresh page when actino done..
        location.reload();

    }


    async function initWithdrawal(amount_to_withdraw,user_wallet){ // withdraw cEth to wallet

        await compoundCEthContract.methods.redeem(amount_to_withdraw * 1e8).send({
            from: user_wallet,
            gasLimit: web3.utils.toHex(250000),  // 15    // posted at compound.finance/developers#gas-costs
            gasPrice: web3.utils.toHex(40000000000), // 2 // use ethgasstation.info (mainnet only)
        });

        // refresh page when actino done..
        location.reload();

    }


async function buildEthUSDWithdrawalConfirm(withdrawalAmount){

    let exchangeRateCurrent = await compoundCEthContract.methods.
    exchangeRateCurrent().call();
    exchangeRateCurrent = (exchangeRateCurrent / 1e28).toString();
    console.log("Current exchange rate from cETH to ETH:", exchangeRateCurrent);
    // cETH balance in ETH
    var ethValue = parseFloat(exchangeRateCurrent * withdrawalAmount);
    var usdValue = await getETHUSDValue(ethValue);
    $('.withdrawalProceedDiv').show();
    $('.withdrawProceedButton').LoadingOverlay("hide");


    $('#withdrawalValueSpan').html(ethValue);
    $("#withdrawalValueUSDSpan").html((usdValue).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    }));

}


});
