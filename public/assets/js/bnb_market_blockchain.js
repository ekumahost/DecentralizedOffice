let abi_array = [ { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256", "name": "id", "type": "uint256" }, { "indexed": false, "internalType": "string", "name": "name", "type": "string" }, { "indexed": false, "internalType": "string", "name": "image_url", "type": "string" }, { "indexed": false, "internalType": "uint256", "name": "price", "type": "uint256" }, { "indexed": false, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "purchased", "type": "bool" }, { "indexed": false, "internalType": "bool", "name": "delivered", "type": "bool" } ], "name": "DeliverProduct", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256", "name": "id", "type": "uint256" }, { "indexed": false, "internalType": "string", "name": "name", "type": "string" }, { "indexed": false, "internalType": "string", "name": "image_url", "type": "string" }, { "indexed": false, "internalType": "uint256", "name": "price", "type": "uint256" }, { "indexed": false, "internalType": "address payable", "name": "owner", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "purchased", "type": "bool" }, { "indexed": false, "internalType": "bool", "name": "delivered", "type": "bool" } ], "name": "ProductCreated", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256", "name": "id", "type": "uint256" }, { "indexed": false, "internalType": "string", "name": "name", "type": "string" }, { "indexed": false, "internalType": "string", "name": "image_url", "type": "string" }, { "indexed": false, "internalType": "uint256", "name": "price", "type": "uint256" }, { "indexed": false, "internalType": "address payable", "name": "owner", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "purchased", "type": "bool" }, { "indexed": false, "internalType": "bool", "name": "delivered", "type": "bool" } ], "name": "ProductPurchased", "type": "event" }, { "constant": true, "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "productCount", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "products", "outputs": [ { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "image_url", "type": "string" }, { "internalType": "uint256", "name": "price", "type": "uint256" }, { "internalType": "address payable", "name": "owner", "type": "address" }, { "internalType": "bool", "name": "purchased", "type": "bool" }, { "internalType": "bool", "name": "delivered", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "string", "name": "_name", "type": "string" }, { "internalType": "string", "name": "_image_url", "type": "string" }, { "internalType": "uint256", "name": "_price", "type": "uint256" } ], "name": "createProduct", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "uint256", "name": "_id", "type": "uint256" } ], "name": "purchaseProduct", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "uint256", "name": "_id", "type": "uint256" } ], "name": "deliverProduct", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" } ];
$("#portisEmail").hide();
window.addEventListener('load', async () => {
    // Modern dapp browsers...

   // console.log("HAHAHAHA", window.BinanceChain);
    // load portis
    const myBinanceChainNode = {
        nodeUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545',
        chainId: 97,
    };
   // const portis = new Portis('bf34ccdf-0d88-41be-ac07-d28f3dfba144', 'mainnet');
    const portis = new Portis('bf34ccdf-0d88-41be-ac07-d28f3dfba144', myBinanceChainNode);
    //const web3 = new Web3(portis.provider);
   // console.log('WE HAVE PORTIS', portis);

              portis.showPortis();
    portis.onLogin((walletAddress, email, reputation) => {
        console.log("Portis Logged in now!!!1", walletAddress, email, reputation);
    });

    portis.isLoggedIn().then(({ error, result }) => {
        $("#portisEmail").hide();

        console.log("LOGGED PORTIS", error, result);
    });



    if (window.BinanceChain) {
        window.web3 = new Web3(BinanceChain);
        try {
            // Request account access if needed
            let eeet = await  BinanceChain.enable();
            // console.log("eeet OOO", eeet);
            // Acccounts now exposed
            //  web3.eth.sendTransaction({/* ... */});
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
        window.web3 = new Web3(web3.currentProvider); // not using portis
      //  window.web3 = new Web3(portis.provider); // using portis
        // Acccounts always exposed
        // web3.eth.sendTransaction({/* ... */});
    }
    // Non-dapp browsers...
    else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');

        Swal.fire(
            'Error!',
            "Non-Ethereum browser detected. You should consider trying MetaMask/Binance Wallet! on Google Chrome",
            'error'
        )
        $("#walletHolder").html('Non-Ethereum browser detected. You should consider trying MetaMask/Binance Wallet! on Google Chrome');

    }

    const web3 = window.web3;
    web3.eth.getAccounts().then(result => {
        // console.log(result);
        const wallet_address = result[0];

        $("#walletHolder").html('your wallet: '+result[0]);
        $("#walletAddress").val(result[0]);
        const first = wallet_address.substring(0, 6);
        const last = wallet_address.substring(38, 42);
        $("#desktop_side").html(first + "..."+last);
        $("#APP_CONTENT").show(500);

    });


    // console.log('ACOUNT NIIOO', web3.eth.accounts[0].wallet);


    //console.log("ABI LOG", abi_array);
     const networkID = await web3.eth.net.getId(); // we can validate for network here..
    // const walletAddress = await web3.eth.getAccounts(); // we can validate for network here.

    if(networkID != 97) { // bnb smartchain test net is 97
        Swal.fire(
            'Error!',
            "On a wrong network, this app run on BNB SmartChain Testnet, install Binance Wallet Chrome Extension and read how to configure your metamask here: https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain "+networkID,
            'error'
        )
    }


   /* web3.eth.net.getNetworkType().then(running_network => {
        console.log('RUNNING NETWORK IS:', running_network);
        console.log('RUNNING NETWORK ID:', networkID);
        // which network are we testing/ running  this app.
        if(running_network != 'private') { // rinkeby // kovan // private; bnb is private
            Swal.fire(
                'Error!',
                "On a wrong network, please switch to Kovan(testnet) network to test this app",
                'error'
            )
        }
    });*/


    const marketplace = new web3.eth.Contract(abi_array, bnb_market_contracts_address); // Interact with a smart contract thus:

    try {

        const productCounts = await marketplace.methods.productCount().call();
        $("#productCounts").html(productCounts);

    }catch (e) {
        console.log('CATA BOOM', e)
    }




    /*
        Promise.all(abi_array.map(function(abi, index){
            const ma = new web3.eth.Contract(abi, market_contracts_address);
            return ma.methods.productCount().call()
        })).then(function(counts){
            console.log('PROMISE COUNT', counts)
        });*/



    /*

            // can list products here...
    // loop through the product count
        for (var i =1; i <= productCounts; i++){

            const products = await marketplace.methods.products(i).call();
            console.log("PPP", products);
        }

    */




    $("#AddProductForm").on("submit", function(e) {
        e.preventDefault();
        $('.createProduct').LoadingOverlay("show");

        // submittedd add product form
        // wallet_address
        const productName = $('#productName').val();
        const productPrice = window.web3.utils.toWei(parseFloat($('#productPrice').val()).toString(), "Ether");
        const walletAddress = $('#walletAddress').val();




        var post_path = $('#image_upload_path').val();
        var fd = new FormData();
        var files = $('#image_file')[0].files[0];
        fd.append('image_file', files);
        var contents = $('#AddProductForm').serialize();
        $.ajax({
            url: post_path + '?'+contents,
            type: 'post',
            data: fd,
            contentType: false,
            processData: false,
            success: function(result){
                if(result['status'] === 'success'){

                    // image uploaded..

                    // result['data']['image_url']


                    const myMarketplace = new web3.eth.Contract(abi_array, bnb_market_contracts_address); // Interact with a smart contract thus:
                    myMarketplace.methods.createProduct(productName, result['data']['image_url'], productPrice).send({ from: walletAddress, gas: 1500000,
                        gasPrice: '20000000000' })
                        .once('receipt', (receipt) => { // transaction receipt from blockchain
                            console.log("RECEIPT", receipt);

                            $('.createProduct').LoadingOverlay("hide");
                            // $('#AddProductForm').reset();
                            Swal.fire(
                                'Done!!',
                                "Product Created",
                                'success'
                            );
                            setTimeout(function(){
                                window.location.reload()
                            }, 5000);


                        }).catch(err => {
                        console.log("WE CATCH ERROR", err);
                        $('.createProduct').LoadingOverlay("hide");
                        /*    Swal.fire(
                                'Error!',
                                err.message,
                                'error'
                            )*/
                    });



                }else{

                    Swal.fire(
                        'Error!',
                        result['message'],
                        'error'
                    )

                }

            },
            error: function (e) {
                Swal.fire(
                    'Error!',
                    "Something is wrong, make sure your image is not too large please, try again later..",
                    'error'
                )

            }

        });









    });



    $("#portisLogout").on("click", function(e) {
        portis.logout();
        location.reload();
    });


    $(".buyProduct").on("click", function(e) {
        $(this).LoadingOverlay("show");
        const product_id = $(this).data("product_id");
        const product_price = $(this).data("product_price");

        //const productPrice = window.web3.utils.toWei(parseFloat($('#productPrice').val()).toString(), "Ether");
        //   const walletAddress = $('#walletAddress').val();
        const myMarketplace = new web3.eth.Contract(abi_array, bnb_market_contracts_address); // Interact with a smart contract thus:
        const walletAddress = $('#walletAddress').val();

        myMarketplace.methods.purchaseProduct(product_id).send({ from: walletAddress, value: product_price, gas: 1500000,
            gasPrice: '20000000000' })
            .once('receipt', (receipt) => { // transaction receipt from blockchain
                console.log("RECEIPT", receipt);

                $('.buyProduct').LoadingOverlay("hide");

                Swal.fire(
                    'Done!!',
                    "Product Purchased",
                    'success'
                );

                setTimeout(function(){
                    // window.location.reload()
                }, 5000);

            }).catch(err => {
            console.log("WE CATCH ERROR", err);
            $('.buyProduct').LoadingOverlay("hide");
            Swal.fire(
                'Error!',
                "Something is wrong, NB: you cannot purchase your own product(change address)",
                'error'
            )
        });

    });
});
