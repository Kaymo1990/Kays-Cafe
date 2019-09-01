$(document).ready(function() {
  var receipt = new Receipt


  $( "#print-receipt" ).click(function() {
    var receiptText = receipt.Print();
    var printedReceipt = $( "#printed-receipt" ).text(receiptText);
    printedReceipt.html(printedReceipt.html().replace(/\n/g,'<br/>'));
  });

  $( "#assign-name" ).submit(function() {
    event.preventDefault();
    var name = $( "#assigned-name").val();
    receipt.AssignName(name)
    $( "#your-name").text(`Hi there, ${receipt.customerName}!`)
    document.getElementById('assigned-name').value='';
  });

  $( "#menu-selection" ).submit(function() {
    event.preventDefault();
    var item = $( "#chosen-item" ).val();
    var quantity = $( "#item-quantity" ).val();
    receipt.AddOrder(toTitleCase(item), quantity);
    document.getElementById('chosen-item').value='';
    document.getElementById('item-quantity').value='';
  });



  function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
};


});
