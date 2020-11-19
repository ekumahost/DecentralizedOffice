const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config()

const provider = new HDWalletProvider({
  privateKeys: [process.env.privatekey], // for 0x58A0ab102EFD2F7aBaA47A4D320b54D9Ab24410f
  providerOrUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545/'
})



module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },

    binanceTestNet: {
        provider: () => provider,
     //  port: 8777,             // Custom port
       network_id: '97',       // Custom network
       gas: 3000000,           // Gas sent with each transaction (default: ~6700000)
      // gasPrice: 20000000000,  // 20 gwei (in wei) (default: 100 gwei)
      // from: <address>,        // Account to send txs from (default: accounts[0])
       //websockets: true        // Enable EventEmitter interface for web3 (default: false)
     },



  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
