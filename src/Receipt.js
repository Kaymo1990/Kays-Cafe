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
  var finalTotal = 0
  this.finalReceipt = `${this.customerName}\n\n`
  for (index = 0; index < this.individualOrders.length; index++) {
    this.finalReceipt += `${this.individualOrders[index].itemName}     ${this.individualOrders[index].itemQuantity} X £${this.individualOrders[index].totalCost}\n`;
    finalTotal += this.individualOrders[index].totalCost;
};
  this.finalReceipt += `Total bill: £${finalTotal.toFixed(2)}`
  return this.finalReceipt
};

Receipt.prototype.AssignName = function(name) {
  if (name.length == 0) {
    this.customerName = "Awesome Customer"
  }

  else {
    this.customerName = toTitleCase(name);
    this.finalReceipt = `${name}\n\n`
  }
};

Receipt.prototype.NameCheck = function() {
  if (this.customerName === undefined) {
    this.customerName = "Awesome Customer"
  };
};

function toTitleCase(str) {
  return str.replace(
      /\w\S*/g,
      function(txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
  );
};
