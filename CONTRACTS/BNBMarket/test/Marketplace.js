const Marketplace = artifacts.require('./Marketplace.sol')

require('chai')
.use(require('chai-as-promised'))
.should()

contract("Marketplace", ([deployer, seller, buyer]) => {

let marketplace

before(async () => {
marketplace = await Marketplace.deployed()

})



describe('deployment', async  () => {

	it('delpoys well', async () => {

const address = await marketplace.address

assert.notEqual(address, 0x0)
assert.notEqual(address, '')
assert.notEqual(address, null)
assert.notEqual(address, undefined)

	})


// next test for it has a name
	it('has correct name', async () => {

const name = await marketplace.name()

assert.equal(name, 'Ogwugo Marketplace')

	})

// test for name ends.


})





describe('products', async  () => {
let result, productCount

before(async () => {
//result = await marketplace.createProduct("Indomie", '1000000000000000000')
result = await marketplace.createProduct("Indomie", '', web3.utils.toWei('1', 'Ether'), { from: seller })

productCount = await marketplace.productCount()


})

	it('creates prodcut', async () => {


// SUCCESS
     assert.equal(productCount, 1)

   //   console.log(result.logs)

     const event = result.logs[0].args
          assert.equal(event.id.toNumber(), productCount.toNumber(), 'id is correct')
          assert.equal(event.name, 'Indomie', 'name is correct')
          assert.equal(event.owner, seller, 'seller is correct')


// fauilers

// product must have a name
await await marketplace.createProduct("", '', web3.utils.toWei('1', 'Ether'), { from: seller }).should.be.rejected

// must have a price
await await marketplace.createProduct("Indomie", '', 0, { from: seller }).should.be.rejected


	})




// read product test starts .
	it('lists prodcut', async () => {

const product = await marketplace.products(productCount)

          assert.equal(product.id.toNumber(), productCount.toNumber(), 'id is correct')
          assert.equal(product.name, 'Indomie', 'name is correct')
          assert.equal(product.price, '1000000000000000000', 'price is correct')
          assert.equal(product.owner, seller, 'seller is correct')
          assert.equal(product.purchased, false, 'purchased is correct')


	})
// read product test ends.




// sell product test starts .
	it('purchases product', async () => {

let oldSellerBalance

oldSellerBalance = await web3.eth.getBalance(seller)
oldSellerBalance = new web3.utils.BN(oldSellerBalance)




result = await marketplace.purchaseProduct(productCount, {from: buyer, value: web3.utils.toWei('1', 'Ether') })



 const event = result.logs[0].args
          assert.equal(event.id.toNumber(), productCount.toNumber(), 'id is correct')
          assert.equal(event.name, 'Indomie', 'name is correct')
          assert.equal(event.owner, buyer, 'seller is correct')
          assert.equal(event.purchased, true, 'purchased is correct')


// check if seller received fund.
let sellerNewBalance

sellerNewBalance = await web3.eth.getBalance(seller)
sellerNewBalance = new web3.utils.BN(sellerNewBalance) // because we will use big number addition, use BN

let price
price = web3.utils.toWei('1', 'Ether')
price = new web3.utils.BN(price)

//console.log(oldSellerBalance, sellerNewBalance, price)



const expectedBalance = oldSellerBalance.add(price)

assert.equal(sellerNewBalance.toString(), expectedBalance.toString())


// FAILURES

// buy product that does not exist..

await marketplace.purchaseProduct(99, {from: buyer, value: web3.utils.toWei('1', 'Ether') }).should.be.rejected


// lower fee
await marketplace.purchaseProduct(productCount, {from: buyer, value: web3.utils.toWei('0.5', 'Ether') }).should.be.rejected


// from someone else
await marketplace.purchaseProduct(productCount, {from: deployer, value: web3.utils.toWei('1', 'Ether') }).should.be.rejected


	})
// sel product test ends.



})



})