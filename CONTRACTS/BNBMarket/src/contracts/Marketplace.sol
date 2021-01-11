// SPDX-License-Identifier: null
pragma solidity ^0.5.0;


contract Marketplace {

string public name;
uint public productCount =0;


mapping (uint => Product) public products;


struct Product {

	uint id;
	string name;
	string image_url;
	uint price;
	address payable owner;
	bool purchased;
	bool delivered;

}


event ProductCreated(

	uint id,
	string name,
	string image_url,
	uint price,
	address payable owner,
	bool purchased,
	bool delivered
);


event ProductPurchased(

	uint id,
	string name,
	string image_url,
	uint price,
	address payable owner,
	bool purchased,
	bool delivered
);


event DeliverProduct(

	uint id,
	string name,
	string image_url,
	uint price,
	address owner,
	bool purchased,
	bool delivered
);


constructor() public {

name = "BNB Market";


}


function createProduct(string memory _name, string memory _image_url, uint _price) public {
	 // validate parameters
      
      require (bytes(_name).length > 0);
      require (_price > 0); // else it will through and gas will not be paid.


   // inccrement product count
  productCount++;

 //productCount =   productCount+1;


     // create product
products[productCount] = Product(productCount, _name, _image_url, _price, msg.sender, false, false);

     // fire event 
     emit ProductCreated(productCount, _name, _image_url, _price, msg.sender, false, false);


}


function purchaseProduct (uint _id) public payable {
	
// fetch the product by the ID

Product memory _product = products[_id]; // instantiate a new product and access the particular product from the mapping from memmory

// fetch the ownner

address payable _seller = _product.owner;

// validate product

require (_product.id > 0 && _product.id <= productCount);

// enough ether for transaction: buyer has enough eth
require (msg.value >= _product.price);

// product not purchased already
require (!_product.purchased);


// buyer should not be the seller
require (_seller != msg.sender);


// purchase it, transfer ownership..
_product.owner = msg.sender;

// mark as purchased
_product.purchased = true;

// update the product in array
products[_id] = _product;

// pay the seller: from the buyer who access this function
address(_seller).transfer(msg.value);

// trigger event.
 emit ProductPurchased(productCount, _product.name, _product.image_url, _product.price, msg.sender, true, false);
// emit ProductPurchased(_product.id, _product.name, _product.image_url, _product.price, msg.sender, true, false);

}




function deliverProduct (uint _id) public {
	
// fetch the product by the ID

Product memory _product = products[_id]; // instantiate a new product and access the particular product from the mapping from memmory


// product must be purchased already
require (_product.purchased);


// only the seller can deliver it
//require (_product.owner != msg.sender); // we did not validate, so anyone can actualy mark it as delivered, we will use this to test something
// before going live we have to include a way to recorgnise the product creator forever to be used for this validation.

  // mark as delivered
   _product.delivered = true;

// update the product in array
  products[_id] = _product;

// trigger event.
 //emit DeliverProduct(_product.id, _product.name, _product.image_url, _product.price, _product.owner, true, true);
   emit DeliverProduct(productCount, _product.name, _product.image_url, _product.price, _product.owner, true, true);

}


}