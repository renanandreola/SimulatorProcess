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

// Busca botoes de Iniciar no DOM
var lineOne = $("#lineOne");
var lineTwo = $("#lineTwo");
var lineThree = $("#lineThree");
var lineFour = $("#lineFour");
var lineFive = $("#lineFive");
var lineSix = $("#lineSix");

// Valida o clique no botao Iniciar para criar linha na tabela
$("#startInstagram").on("click", function(){
  lineOne.toggle();
    $('#startInstagram').addClass(' nav-link disabled');
});

$("#startDiscord").on("click", function(){
  lineTwo.toggle();
    $('#startDiscord').addClass(' nav-link disabled');
});

$("#startVSCode").on("click", function(){
  lineThree.toggle();
    $('#startVSCode').addClass(' nav-link disabled');
});

$("#startExplorer").on("click", function(){
  lineFour.toggle();
    $('#startExplorer').addClass(' nav-link disabled');
});

$("#startGoogle").on("click", function(){
  lineFive.toggle();
    $('#startGoogle').addClass(' nav-link disabled');
});

$("#startExcel").on("click", function(){
  lineSix.toggle();
    $('#startExcel').addClass(' nav-link disabled');
});

// Busca botoes de Finalziar processo no DOM
var stopProcess1 = $("#stopProcessLineOne");
var stopProcess2 = $("#stopProcessLineTwo");
var stopProcess3 = $("#stopProcessLineThree");
var stopProcess4 = $("#stopProcessLineFour");
var stopProcess5 = $("#stopProcessLineFive");
var stopProcess6 = $("#stopProcessLineSix");

// Valida o clique no botao para remover a linha da tabela
$("#stopProcessLineOne").on("click", function(){
  lineOne.toggle();
    $('#startInstagram').removeClass('nav-link disabled');
});

$("#stopProcessLineTwo").on("click", function(){
  lineTwo.toggle();
  $('#startDiscord').removeClass('nav-link disabled');
});

$("#stopProcessLineThree").on("click", function(){
  lineThree.toggle();
  $('#startVSCode').removeClass('nav-link disabled');
});

$("#stopProcessLineFour").on("click", function(){
  lineFour.toggle();
  $('#startExplorer').removeClass('nav-link disabled');
});

$("#stopProcessLineFive").on("click", function(){
  lineFive.toggle();
  $('#startGoogle').removeClass('nav-link disabled');
});

$("#stopProcessLineSix").on("click", function(){
  lineSix.toggle();
  $('#startExcel').removeClass('nav-link disabled');
});



