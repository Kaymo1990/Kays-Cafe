describe("Order", function () {
  var receipt;
  var order;

beforeEach(function() {
receipt = new Receipt();
order = new Order();

});

it("should allow me to generate an item order which stores item name", function() {
order.AddOrder("Cappucino", 2);
expect(order.itemName).toEqual("Cappucino");
});

it("should allow me to generate an item order which stores item quantity", function() {
order.AddOrder("Cappucino", 2);
expect(order.itemQuantity).toEqual(2);
});

it("should allow me to generate an item order which stores item cost", function() {
order.AddOrder("Cappucino", 2);
expect(order.itemCost).toEqual(3.85);
});

it("should allow me to generate an item order which stores item subtotal", function() {
order.AddOrder("Cappucino", 2);
expect(order.totalCost).toEqual(7.70);
});

describe("Receipt", function() {

  it("should allow me to submit an order which is stored in my receipt", function() {
    receipt.AddOrder("Cappucino", 1)
    expect(receipt.individualOrders.length).toEqual(1);
    expect(receipt.individualOrders[0].itemName).toEqual("Cappucino");
  });

  it("should allow me to print a receipt with my full order", function() {
    receipt.AddOrder("Cappucino", 1);
    receipt.AddOrder("Americano", 2);
    expect(receipt.)
  });

});



});
