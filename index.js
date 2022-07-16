'use strict';

function Hamburger(size) {
	this.price = size.price;
	this.callories = size.callories;
}

Hamburger.prototype.getPrice = function () {
	return this.price;
};

Hamburger.prototype.getCallories = function () {
	return this.callories;
};

Hamburger.prototype.addTopping = function (topping) {
	this.price += topping.price;
	this.callories += topping.callories;
};

Hamburger.SIZE_SMALL = {
	price: 100,
	callories: 500,
};

Hamburger.TOPPING_MAYO = {
	price: 10,
	callories: 100,
};
Hamburger.TOPPING_POTATO = {
	price: 15,
	callories: 150,
};

const hamburger = new Hamburger(Hamburger.SIZE_SMALL);

hamburger.addTopping(Hamburger.TOPPING_MAYO);
hamburger.addTopping(Hamburger.TOPPING_POTATO);
hamburger.addTopping(Hamburger.TOPPING_POTATO);

console.log('Price with sauce: ' + hamburger.getPrice());
console.log('Callories with sauce: ' + hamburger.getCallories());
