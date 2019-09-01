function Receipt() {
  this.individualOrders = [];
  this.finalReceipt;
  this.customerName;
  this.finalReceipt;

};

Receipt.prototype.AddOrder = function(item, quantity) {
  if (item !== undefined && quantity > 0) {
    order = new Order();
    order.AddOrder(item, quantity);
    this.individualOrders.push(order);
  }
};

Receipt.prototype.Print = function() {
  this.NameCheck();
  this.finalReceipt = `${this.customerName}\n\n`
  for (index = 0; index < this.individualOrders.length; index++) {
    this.finalReceipt += `${this.individualOrders[index].itemName}     ${this.individualOrders[index].itemQuantity} X £${this.individualOrders[index].totalCost}\n`
};
  return this.finalReceipt
};

Receipt.prototype.AssignName = function(name) {
  if (name.length == 0) {
    this.customerName = "Awesome Customer"
  }

  else {
    this.customerName = name;
    this.finalReceipt = `${name}\n\n`
  }
};

Receipt.prototype.NameCheck = function() {
  if (this.customerName === undefined) {
    this.customerName = "Awesome Customer"
  };
};
