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
    receipt.AddOrder("Cappucino", 1);
    expect(receipt.individualOrders.length).toEqual(1);
    expect(receipt.individualOrders[0].itemName).toEqual("Cappucino");
  });

  it("should prevent me from submitting an order that is undefined", function () {
    receipt.AddOrder(undefined, 1);
    expect(receipt.individualOrders.length).toEqual(0);
  });

  it("should prevent me from submitting an order with a quantity of 0", function () {
    receipt.AddOrder("Cappucino", 0);
    expect(receipt.individualOrders.length).toEqual(0);
  });

  it("should allow me to print a receipt with my full order", function () {
    receipt.AddOrder("Cappucino", 1);
    receipt.AddOrder("Americano", 2);
    expect(receipt.Print()).toEqual('Awesome Customer\n\nCappucino     1 X £3.85\nAmericano     2 X £7.50\nTotal bill: £11.35')
  });

  it("should allow me to assign a name", function () {
    receipt.AssignName("Kay");
    expect(receipt.customerName).toEqual("Kay");
  });

  it("should have a default of Awesome Customer for the name when no name is provided", function () {
    receipt.AssignName("");
    expect(receipt.customerName).toEqual("Awesome Customer");
  });

  it("should change the customer name to Awesome Customer when no name is assigned", function () {
    receipt.NameCheck();
    expect(receipt.customerName).toEqual("Awesome Customer");
  });

  it("should automatically title case any string passed for the name", function () {
    receipt.AssignName("kay mo");
    expect(receipt.customerName).toEqual("Kay Mo");
  })



});



});
