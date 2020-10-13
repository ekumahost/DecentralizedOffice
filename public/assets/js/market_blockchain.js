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

// https://medium.com/metamask/https-medium-com-metamask-breaking-change-injecting-web3-7722797916a8
window.addEventListener('load', async () => {
    // Modern dapp browsers...
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            // Request account access if needed
            await ethereum.enable();
            // Acccounts now exposed
            //  web3.eth.sendTransaction({/* ... */});
        } catch (error) {
            // User denied account access...
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
        $("#walletHolder").html('Non-Ethereum browser detected. You should consider trying MetaMask! on Google Chrome');

    }

    const web3 = window.web3;
    web3.eth.getAccounts().then(result => {
       // console.log(result);
         var wallet_address = result[0];

        $("#walletHolder").html('your wallet: '+result[0]);
        $("#walletAddress").val(result[0]);
        var first = wallet_address.substring(0, 6);
        var last = wallet_address.substring(38, 42);
        $("#desktop_side").html(first + "..."+last);
        $("#APP_CONTENT").show(500);

    });

    //console.log("ABI LOG", abi_array);
    const networkID = await web3.eth.net.getId(); // we can validate for network here..
  // const walletAddress = await web3.eth.getAccounts(); // we can validate for network here..


    if(networkID){ // if not equal to 1, which is main.
        const marketplace = new web3.eth.Contract(abi_array, market_contracts_address); // Interact with a smart contract thus:


        var productCounts = await marketplace.methods.productCount().call();

        $("#productCounts").html(productCounts);

        // console.log("NET", networkID);
     //   console.log("MARKET", marketplace);

        web3.eth.net.getNetworkType().then(running_network => {
            // which network are we testing/ running  this app.
       /*     if(running_network != 'rinkeby') {
                Swal.fire(
                    'Error!',
                    "On a wrong network, please switch to Rinkeby network to test this app",
                    'error'
                )
            }*/
        });

    }else{
        // no network
        console.log("NO deployed to NETWORK!!!");

    }


    $("#AddProductForm").on("submit", function(e) {
        e.preventDefault();
        $('.createProduct').LoadingOverlay("show");

        // submittedd add product form
        // wallet_address
        var productName = $('#productName').val();
        var productPrice = window.web3.utils.toWei(parseFloat($('#productPrice').val()).toString(), "Ether");
        var walletAddress = $('#walletAddress').val();
     // alert(market_contracts_address);
        //const myMarketplace = new web3.eth.Contract(abi_array, market_contracts_address); // Interact with a smart contract thus:
        const myMarketplace = new web3.eth.Contract(abi_array, market_contracts_address); // Interact with a smart contract thus:

            myMarketplace.methods.createProduct(productName, 'png', productPrice).send({ from: walletAddress, gas: 1500000,
                gasPrice: '20000000000' })
                .once('receipt', (receipt) => { // transaction receipt from blockchain
                    console.log("RECEIPT", receipt);

                    $('.createProduct').LoadingOverlay("hide");
                    $('#AddProductForm').reset();

                    Swal.fire(
                        'Done!!',
                        "Product Created",
                        'success'
                    );

                }).catch(err => {
                console.log("WE CATCH ERROR", err);
                $('.createProduct').LoadingOverlay("hide");
            /*    Swal.fire(
                    'Error!',
                    err.message,
                    'error'
                )*/
            });


        return false;
        var post_path = $('#UploadImageForm').attr('action');
        var fd = new FormData();
        var files = $('#image_file')[0].files[0];
        fd.append('image_file', files);

        var contents = $('#UploadImageForm').serialize();

        $.ajax({
            url: post_path + '?'+contents,
            type: 'post',
            data: fd,
            contentType: false,
            processData: false,
            success: function(result){

                // set the url to where he can copy it..

                if(result['status'] === 'success'){
                    Swal.fire(
                        'IMAGE URL!',
                        result['data']['image_url'],
                        'success'
                    );

                }else{

                    Swal.fire(
                        'Error!',
                        result['message'],
                        'error'
                    )

                }

                $('.uploadButton').LoadingOverlay("hide");

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

});
