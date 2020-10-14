
const Web3 = require('web3');

//let web3 = new Web3('ws://127.0.0.1:7545');
let web3 = new Web3('wss://kovan.infura.io/ws/v3/70beb59692f54291923fe85d2589bae6');
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
//let market_contracts_address = '0x22e29b7667B454d12dF1AE2Fb17bA204a5c347F4'; // ganache
let market_contracts_address = '0x4c25cce3077a9bfc5c360cd53b2e472be3ddb6eb'; // kovan

async function getProductCount(){

    const marketplace = new web3.eth.Contract(abi_array, market_contracts_address); // Interact with a smart contract thus:

    return await marketplace.methods.productCount().call();


}


module.exports =  {
    landing(req, res){
            twing.render('landing.twig', {
                'page_title': "D Office",
                'params': req.query,
            }).then((output) => {
                res.send(output);
            })

    },


    fileServer(req, res){
        twing.render('file_cdn.twig', {
            'page_title': "File/IMAGE CDN",
            'params': req.query,
        }).then((output) => {
            res.send(output);
        })

    },



    app(req, res){
        twing.render('app.twig', {
            'page_title': "APP",
            'params': req.query,
        }).then((output) => {
            res.send(output);
        })

    },

        market(req, res){

     /*   web3.eth.getAccounts().then(result => {

         console.log(result);

        });*/

       // console.log("PRODUCT COUNTER", getProductCount());

            const marketplace = new web3.eth.Contract(abi_array, market_contracts_address); // Interact with a smart contract thus:

            const productList = [];
          marketplace.methods.productCount().call().then(async result =>{

              for (var i =1; i <= result; i++){
                  const products = await marketplace.methods.products(i).call();
                  productList.push(products);
                  //console.log("PPP--", products);
              }

              console.log(productList);
              twing.render('market.twig', {
                  'page_title': "market",
                  'products_default': [{
                      name:'Default Product',
                      id: 2,
                      price: 30000000000,
                      owner: '0x466AE3aDa81727B158711F62922E428904ABa05d'
                  }],
                  'products': productList,
                  'params': req.query,
              }).then((output) => {
                  res.send(output);
              })

          }).catch(e =>{

              console.log(e)
          });




    },





};


