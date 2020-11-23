module.exports = Object.freeze({ //Iteration over frozen object is no longer slow

    PROTOCOL: 'http://',
  //  SERVER_NAME: 'doffice.link/',
    SERVER_NAME: 'localhost:11200/',

    APP_VERSION : '1.0.0',
    APP_LANGUAGE : 'english',// must be same as found in /src/language folder please read documentation
    APP_NAME : 'DOFFICE',
    APP_DESCRIPTION : 'DOFFICE',
    APP_AUTHOR : {
        name: 'Uncle BEn',
        contact: 'ekumaly@binaryhills.org'
    },
    SWAGGER : {
        'TITLE':'D Office[blockchain_app]',
        'DESCRIPTION':'LIVE APP',
        'CONTACT_EMAIL':'doffice@binaryhills.org',
        'CONTACT_NAME':'Uncle Ben & Him',
        'UI_EXPRESS_ROUTE':'api-docs.json',
     },

    contract_abi : [
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
        }
    ],


    contract_address: '0x4c25cce3077a9bfc5c360cd53b2e472be3ddb6eb', // kovan
    bnb_contract_address: '0xf6299f48Dd697338c79E026DD12152ad309CAdE2', // Binance smart Chain Testnet for marketplace
   // contract_address: '0x22e29b7667B454d12dF1AE2Fb17bA204a5c347F4', // ganache
});
