// Better do this 
function Product(pName, pPrice, pCategory) {
    this.pName = pName;
    this.pPrice = pPrice;
    this.pCategory = pCategory;
}

Product.prototype.printProduct = function () {
    console.log(`product is: ${this.pName} & the price is: ${this.pPrice}`)
}

// than this: 
function Product(pName, pPrice, pCategory) {
    this.pName = pName;
    this.pPrice = pPrice;
    this.pCategory = pCategory;
    this.printProduct = function () {
        console.log(`product is: ${this.pName} & the price is: ${this.pPrice}`)
    }
}