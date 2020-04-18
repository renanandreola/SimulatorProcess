/*
function addToTable(process) {
    var cart = JSON.parse(sessionStorage.getItem("cart"));
    if (!cart) {
      cart = [];
    }
    cart.push(process);
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }
  
  $(document).ready(function () {
    $('form').submit(function () {
        var processName = document.getElementById('processName').innerHTML;
        var productName = $('#product').val();
        var productPrice = $('#price').val();
        var memory = 50 + " MB";
        addToTable({
          processName: processName,
          name: productName,
          price: productPrice,
          memory: memory,
        });
    });
  
    var cart = sessionStorage.getItem("cart");
    if (cart !== null) {
      cart = JSON.parse(cart);
      var total = 0;
      for (var i = 0; i < 1000; i++) {
        $("#test").html(i);
        $("#result").append("<li class='list-group-item list-group-item-dark d-flex justify-content-center' id=" 
                            + i + ">Processo: " 
                            + cart[i].processName + " " 
                            +" Memória utilizada: " + cart[i].memory + "&nbsp; &nbsp" 
                            + "<button class='btn btn-danger' onclick='excluir("+ i +")' type='button' id='button" 
                            + i +"'>Finalizar Processo</button></li>" + "</br>");
      }
    }
  });
  
  function excluir(value) {
    var cart = JSON.parse(sessionStorage.getItem("cart"));
    console.info(cart)
    console.info(cart[value])
    var removeItem = cart[value];
    var newcart = [];
    newcart = cart.splice($.inArray(removeItem, cart), 1);
    location.reload();
    return sessionStorage.setItem("cart", JSON.stringify(cart));
    }
*/
////////////////////////
var lineOne = $("#lineOne");
var lineTwo = $("#lineTwo");
var lineThree = $("#lineThree");
var lineFour = $("#lineFour");
var lineFive = $("#lineFive");
var lineSix = $("#lineSix");

$("#startInstagram").on("click", function(){
  lineOne.toggle();
});

$("#startDiscord").on("click", function(){
  lineTwo.toggle();
});

$("#startVSCode").on("click", function(){
  lineThree.toggle();
});

$("#startExplorer").on("click", function(){
  lineFour.toggle();
});

$("#startGoogle").on("click", function(){
  lineFive.toggle();
});

$("#startExcel").on("click", function(){
  lineSix.toggle();
});


