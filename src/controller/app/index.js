
const Web3 = require('web3');
// https://davekiss.com/ethereum-web3-node-tutorial/
//let web3 = new Web3('ws://127.0.0.1:7545');
//let web3 = new Web3('wss://kovan.infura.io/ws/v3/70beb59692f54291923fe85d2589bae6');
let web3 = new Web3(new Web3.providers.HttpProvider(process.env.bnb_provider));

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

let bnb_abi_array = [ { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256", "name": "id", "type": "uint256" }, { "indexed": false, "internalType": "string", "name": "name", "type": "string" }, { "indexed": false, "internalType": "string", "name": "image_url", "type": "string" }, { "indexed": false, "internalType": "uint256", "name": "price", "type": "uint256" }, { "indexed": false, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "purchased", "type": "bool" }, { "indexed": false, "internalType": "bool", "name": "delivered", "type": "bool" } ], "name": "DeliverProduct", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256", "name": "id", "type": "uint256" }, { "indexed": false, "internalType": "string", "name": "name", "type": "string" }, { "indexed": false, "internalType": "string", "name": "image_url", "type": "string" }, { "indexed": false, "internalType": "uint256", "name": "price", "type": "uint256" }, { "indexed": false, "internalType": "address payable", "name": "owner", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "purchased", "type": "bool" }, { "indexed": false, "internalType": "bool", "name": "delivered", "type": "bool" } ], "name": "ProductCreated", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256", "name": "id", "type": "uint256" }, { "indexed": false, "internalType": "string", "name": "name", "type": "string" }, { "indexed": false, "internalType": "string", "name": "image_url", "type": "string" }, { "indexed": false, "internalType": "uint256", "name": "price", "type": "uint256" }, { "indexed": false, "internalType": "address payable", "name": "owner", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "purchased", "type": "bool" }, { "indexed": false, "internalType": "bool", "name": "delivered", "type": "bool" } ], "name": "ProductPurchased", "type": "event" }, { "constant": true, "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "productCount", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "products", "outputs": [ { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "image_url", "type": "string" }, { "internalType": "uint256", "name": "price", "type": "uint256" }, { "internalType": "address payable", "name": "owner", "type": "address" }, { "internalType": "bool", "name": "purchased", "type": "bool" }, { "internalType": "bool", "name": "delivered", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "string", "name": "_name", "type": "string" }, { "internalType": "string", "name": "_image_url", "type": "string" }, { "internalType": "uint256", "name": "_price", "type": "uint256" } ], "name": "createProduct", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "uint256", "name": "_id", "type": "uint256" } ], "name": "purchaseProduct", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "uint256", "name": "_id", "type": "uint256" } ], "name": "deliverProduct", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" } ];
//let market_contracts_address = '0x22e29b7667B454d12dF1AE2Fb17bA204a5c347F4'; // ganache
let market_contracts_address = process.env.market_contracts_address;
let bnb_market_contracts_address = process.env.bnb_market_contracts_address;

/*async function getProductCount(){

    const marketplace = new web3.eth.Contract(abi_array, market_contracts_address); // Interact with a smart contract thus:

    return await marketplace.methods.productCount().call();

}*/


async function getProductList(){
    const marketplace = new web3.eth.Contract(abi_array, market_contracts_address); // Interact with a smart contract thus:
    let productCounts = await marketplace.methods.productCount().call();

    let productList = [];
        for (var i = 1; i <= productCounts; i++) {
            const products = await marketplace.methods.products(i).call();
            productList.push(products);
            //console.log("PPP--", products);
        }
    return productList;
}


async function getBnbProductList(){

    const marketplace = new web3.eth.Contract(bnb_abi_array, bnb_market_contracts_address); // Interact with a smart contract thus:
    let productCounts = await marketplace.methods.productCount().call();

    let productList = [];
    for (var i = 1; i <= productCounts; i++) {
        const products = await marketplace.methods.products(i).call();
        productList.push(products);
        //console.log("PPP--", products);
    }
    return productList;

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



    /*    const ipfs = require("nano-ipfs-store").at("https://ipfs.infura.io:5001");

        (async () => {

            const doc = JSON.stringify({
                foo: "bar",
                tic: "tac"
            });

            const cid = await ipfs.add(doc);

            console.log("IPFS cid:", cid); // bafkreidznvxnwoja2bfbwmg76agohdfir4gvzbe7btnnwhijfxi3vfxg5i

            console.log(await ipfs.cat(cid)); // {"foo":"bar","tic":"tac"}

        })();*/


    let invests = [



                      {status: 'Running', title: '0x52D1', creator: '0x52D1...331e', contribution_price: 1, total_members: 10, roi: 45, registered_members: [
                          '0x2BC99e53c6A879D5D6cd5F32517cE11df4a1AcFF','0xC0dF1f12C349EE66735EEb518eC17181451ed723','0x2BC99e53c6A879D5D6cd5F32517cE11df4a1AcFF'
                          ] },


      /*  {status: 'Running', title: '0x52D1', creator: '0x52D1...331e', contribution_price: 1, total_members: 10, roi: 45, registered_members: [
                '0x2BC99e53c6A879D5D6cd5F32517cE11df4a1AcFF','0xC0dF1f12C349EE66735EEb518eC17181451ed723','0x2BC99e53c6A879D5D6cd5F32517cE11df4a1AcFF', "0x52D197315C1ce68a59d5ebD8F7E80668f795331e"
            ] },*/



        {status: 'Pending', title: '0x52D1', creator: '0x52D1...331e', contribution_price: 10, total_members: 3, roi: 35, registered_members: [
                '0x52D197315C1ce68a59d5ebD8F7E80668f795331e','0xC0dF1f12C349EE66735EEb518eC17181451ed723','0x2BC99e53c6A879D5D6cd5F32517cE11df4a1AcFF'
            ] },

        {status: 'Paid Out', title: '0x52D1', creator: '0x52D1...331e', contribution_price: 50, total_members: 25, roi: 11, registered_members: [
                '0x52D197315C1ce68a59d5ebD8F7E80668f795331e','0xC0dF1f12C349EE66735EEb518eC17181451ed723','0x2BC99e53c6A879D5D6cd5F32517cE11df4a1AcFF'
            ] }
    ];

        twing.render('app.twig', {
            'page_title': "APP",
            'params': req.query,
            'invests': invests,
        }).then((output) => {
            res.send(output);
        })

    },

       async market(req, res){


            try {


                getProductList().then((listOfProduct) => {

                    req.session.productList = listOfProduct;

                    twing.render('market.twig', {
                        'page_title': "market",
                        'products': listOfProduct,
                        'params': req.query,
                    }).then((output) => {
                        res.send(output);
                    })

                }).catch((err) => {
                  console.log(err);
                })


            }catch (e) {
                // we catch error in connections. send
                console.log("WE CATCH, ", e);

                twing.render('market.twig', {
                    'page_title': "market",
                    'products': req.session.productList,
                    'params': req.query,
                }).then((output) => {
                    res.send(output);
                }).catch((err) => {
                    console.log("CACH", err);
                })


            }

    },


    async BnbMarket(req, res){

        try {


            getBnbProductList().then((listOfProduct) => {

                req.session.bnbProductList = listOfProduct;

                twing.render('bnb_market.twig', {
                    'page_title': "BNB Market",
                    'products': listOfProduct,
                    'params': req.query,
                }).then((output) => {
                    res.send(output);
                })

            }).catch((err) => {
                console.log(err);
            })


        }catch (e) {
            // we catch error in connections. send
            console.log("WE CATCH, ", e);

            twing.render('bnb_market.twig', {
                'page_title': "BNB Market",
                'products': req.session.bnbProductList,
                'params': req.query,
            }).then((output) => {
                res.send(output);
            }).catch((err) => {
                console.log("CACH", err);
            })


        }

    },




};


