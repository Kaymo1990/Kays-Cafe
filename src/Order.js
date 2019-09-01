function Order() {
  this.itemName;
  this.itemQuantity;
  this.itemCost
  this.totalCost
}

Order.prototype.AddOrder = function(item, quantity) {
    this.itemName = item
    this.itemQuantity = quantity
    this.SubtotalCalculator(item, quantity);
};

Order.prototype.SubtotalCalculator = function(item, quantity) {
  this.itemCost = item_prices[0].prices[0][item];
  this.totalCost = this.itemCost * quantity;
};
