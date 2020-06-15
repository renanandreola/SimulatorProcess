// Busca linhas da tabela
var lineOne = $("#lineOne");
var lineTwo = $("#lineTwo");
var lineThree = $("#lineThree");
var lineFour = $("#lineFour");
var lineFive = $("#lineFive");
var lineSix = $("#lineSix");

// Busca linhas duplicadas da tabela
var line12 = $("#line12");
var line32 = $("#line32");
var line41 = $("#line41");
var line52 = $("#line52");
var line62 = $("#line62");

// Busca botões de duplicar processo
var rsBtnInsta = $("#restartInstagram");
var rsBtnDiscord = $("#restartDiscord");
var rsBtnExplorer = $("#restartExplorer");
var rsBtnVSCode = $("#restartVSCode");
var rsBtnGoogle = $("#restartGoogle");
var rsBtnExcel = $("#restartExcel");


// Valida o clique no botão Iniciar para criar linha na tabela
$("#startInstagram").on("click", function(){
    //notificação do clique
    /*
    if(window.Notification&&Notification.permission!=="denied"){
      Notification.requestPermission(function(status){
        let n = new Notification('Inicialização de processo',{
          body:'Você simulou a inicialização do programa Word, ou seja, representa um software em execução.',
          icon: 'https://info.gupy.io/hs-fs/hubfs/inteligencia-artificial-rh.png?width=256&name=inteligencia-artificial-rh.png'
        });
      });
  };
  */
  //fim da notificação
  lineOne.toggle();
    $('#startInstagram').addClass(' nav-link disabled');
    rsBtnInsta.toggle();
});


$("#restartInstagram").on("click", function(){
  //notificação do clique
  /*
  if(window.Notification&&Notification.permission!=="denied"){
    Notification.requestPermission(function(status){
      let n = new Notification('Inicialização de processo',{
        body:'Você duplicou a inicialização do programa Word. Duplicar o processo significa que você abriu novamente o mesmo programa.',
        icon: 'https://info.gupy.io/hs-fs/hubfs/inteligencia-artificial-rh.png?width=256&name=inteligencia-artificial-rh.png'
      });
    });
};
*/
//fim da notificação
  line12.toggle();
  $('#restartInstagram').addClass(' nav-link disabled');
});


$("#startDiscord").on("click", function(){
  //notificação do clique
  /*
  if(window.Notification&&Notification.permission!=="denied"){
    Notification.requestPermission(function(status){
      let n = new Notification('Inicialização de processo',{
        body:'Você simulou a inicialização do programa Discord, ou seja, representa um software em execução.',
        icon: 'https://info.gupy.io/hs-fs/hubfs/inteligencia-artificial-rh.png?width=256&name=inteligencia-artificial-rh.png'
      });
    });
};
*/
//fim da notificação
  lineTwo.toggle();
    $('#startDiscord').addClass(' nav-link disabled');
    rsBtnDiscord.toggle();
});


$("#restartDiscord").on("click", function(){
  //notificação do clique
  /*
  if(window.Notification&&Notification.permission!=="denied"){
    Notification.requestPermission(function(status){
      let n = new Notification('Ação não realizada',{
        body:'Você não pode duplicar esse programa, sua execução é única.',
        icon: 'https://cdn.pixabay.com/photo/2017/02/12/21/29/false-2061131_960_720.png'
      });
    });
};
*/
//fim da notificação
});


$("#startVSCode").on("click", function(){
  //notificação do clique
  /*
  if(window.Notification&&Notification.permission!=="denied"){
    Notification.requestPermission(function(status){
      let n = new Notification('Inicialização de processo',{
        body:'Você simulou a inicialização do programa Visual Studio Code, ou seja, representa um software em execução.',
        icon: 'https://info.gupy.io/hs-fs/hubfs/inteligencia-artificial-rh.png?width=256&name=inteligencia-artificial-rh.png'
      });
    });
};
*/
//fim da notificação
  lineThree.toggle();
    $('#startVSCode').addClass(' nav-link disabled');
    rsBtnVSCode.toggle();
});


$("#restartVSCode").on("click", function(){
  //notificação do clique
  /*
  if(window.Notification&&Notification.permission!=="denied"){
    Notification.requestPermission(function(status){
      let n = new Notification('Inicialização de processo',{
        body:'Você duplicou a inicialização do Visual Studio Code. Duplicar o processo significa que você abriu novamente o mesmo programa.',
        icon: 'https://info.gupy.io/hs-fs/hubfs/inteligencia-artificial-rh.png?width=256&name=inteligencia-artificial-rh.png'
      });
    });
};
*/
//fim da notificação
  line32.toggle();
  $('#restartVSCode').addClass(' nav-link disabled');
});


$("#startExplorer").on("click", function(){
  //notificação do clique
  /*
  if(window.Notification&&Notification.permission!=="denied"){
    Notification.requestPermission(function(status){
      let n = new Notification('Inicialização de processo',{
        body:'Você simulou a inicialização do Bloco de Notas, ou seja, representa um software em execução.',
        icon: 'https://info.gupy.io/hs-fs/hubfs/inteligencia-artificial-rh.png?width=256&name=inteligencia-artificial-rh.png'
      });
    });
};
*/
//fim da notificação
  lineFour.toggle();
    $('#startExplorer').addClass(' nav-link disabled');
    rsBtnExplorer.toggle();
});


$("#restartExplorer").on("click", function(){
  //notificação do clique
  /*
  if(window.Notification&&Notification.permission!=="denied"){
    Notification.requestPermission(function(status){
      let n = new Notification('Inicialização de processo',{
        body:'Você duplicou a inicialização do Bloco de Notas. Duplicar o processo significa que você abriu novamente o mesmo programa.',
        icon: 'https://info.gupy.io/hs-fs/hubfs/inteligencia-artificial-rh.png?width=256&name=inteligencia-artificial-rh.png'
      });
    });
};
*/
//fim da notificação
  line41.toggle();
  $('#restartExplorer').addClass(' nav-link disabled');
});


$("#startGoogle").on("click", function(){
  //notificação do clique
  /*
  if(window.Notification&&Notification.permission!=="denied"){
    Notification.requestPermission(function(status){
      let n = new Notification('Inicialização de processo',{
        body:'Você simulou a inicialização do navegador Google Chrome, ou seja, representa um software em execução.',
        icon: 'https://info.gupy.io/hs-fs/hubfs/inteligencia-artificial-rh.png?width=256&name=inteligencia-artificial-rh.png'
      });
    });
};
*/
//fim da notificação
  lineFive.toggle();
    $('#startGoogle').addClass(' nav-link disabled');
    rsBtnGoogle.toggle();
});


$("#restartGoogle").on("click", function(){
  //notificação do clique
  /*
  if(window.Notification&&Notification.permission!=="denied"){
    Notification.requestPermission(function(status){
      let n = new Notification('Inicialização de processo',{
        body:'Você duplicou a inicialização do Google Chrome. Duplicar o processo significa que você abriu novamente o mesmo programa.',
        icon: 'https://info.gupy.io/hs-fs/hubfs/inteligencia-artificial-rh.png?width=256&name=inteligencia-artificial-rh.png'
      });
    });
};
*/
//fim da notificação
  line52.toggle();
  $('#restartGoogle').addClass(' nav-link disabled');
});


$("#startExcel").on("click", function(){
  //notificação do clique
  /*
  if(window.Notification&&Notification.permission!=="denied"){
    Notification.requestPermission(function(status){
      let n = new Notification('Inicialização de processo',{
        body:'Você simulou a inicialização do programa Excel, ou seja, representa um software em execução.',
        icon: 'https://info.gupy.io/hs-fs/hubfs/inteligencia-artificial-rh.png?width=256&name=inteligencia-artificial-rh.png'
      });
    });
};
*/
//fim da notificação
  lineSix.toggle();
    $('#startExcel').addClass(' nav-link disabled');
    rsBtnExcel.toggle();
});


$("#restartExcel").on("click", function(){
  //notificação do clique
  /*
  if(window.Notification&&Notification.permission!=="denied"){
    Notification.requestPermission(function(status){
      let n = new Notification('Inicialização de processo',{
        body:'Você duplicou a inicialização do programa Excel. Duplicar o processo significa que você abriu novamente o mesmo programa.',
        icon: 'https://info.gupy.io/hs-fs/hubfs/inteligencia-artificial-rh.png?width=256&name=inteligencia-artificial-rh.png'
      });
    });
};
//fim da notificação
*/
  line62.toggle();
  $('#restartExcel').addClass(' nav-link disabled');
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
  //notificação do clique
  /*
  if(window.Notification&&Notification.permission!=="denied"){
    Notification.requestPermission(function(status){
      let n = new Notification('Finalização de processo',{
        body:'Você simulou a finalizção do programa Word, ou seja, o processo finalizou',
        icon: 'https://images.emojiterra.com/google/android-pie/512px/274c.png'
      });
    });
};
*/
//fim da notificação
  lineOne.toggle();
    $('#startInstagram').removeClass('nav-link disabled');
    $('#restartInstagram').toggle();
});


$("#stopProcessLineTwo").on("click", function(){
  //notificação do clique
  /*
  if(window.Notification&&Notification.permission!=="denied"){
    Notification.requestPermission(function(status){
      let n = new Notification('Finalização de processo',{
        body:'Você simulou a finalizção do programa Discord, ou seja, o processo finalizou',
        icon: 'https://images.emojiterra.com/google/android-pie/512px/274c.png'
      });
    });
};
*/
//fim da notificação
  lineTwo.toggle();
  $('#startDiscord').removeClass('nav-link disabled');
  $('#restartDiscord').toggle();
});


$("#stopProcessLineThree").on("click", function(){
  //notificação do clique
  /*
  if(window.Notification&&Notification.permission!=="denied"){
    Notification.requestPermission(function(status){
      let n = new Notification('Finalização de processo',{
        body:'Você simulou a finalizção do Visual Studio Code, ou seja, o processo finalizou',
        icon: 'https://images.emojiterra.com/google/android-pie/512px/274c.png'
      });
    });
};
*/
//fim da notificação
  lineThree.toggle();
  $('#startVSCode').removeClass('nav-link disabled');
  $('#restartVSCode').toggle();
});


$("#stopProcessLineFour").on("click", function(){
  //notificação do clique
  /*
  if(window.Notification&&Notification.permission!=="denied"){
    Notification.requestPermission(function(status){
      let n = new Notification('Finalização de processo',{
        body:'Você simulou a finalizção do Bloco de Notas, ou seja, o processo finalizou',
        icon: 'https://images.emojiterra.com/google/android-pie/512px/274c.png'
      });
    });
};
*/
//fim da notificação
  lineFour.toggle();
  $('#startExplorer').removeClass('nav-link disabled');
  $('#restartExplorer').toggle();
});


$("#stopProcessLineFive").on("click", function(){
  //notificação do clique
  /*
  if(window.Notification&&Notification.permission!=="denied"){
    Notification.requestPermission(function(status){
      let n = new Notification('Finalização de processo',{
        body:'Você simulou a finalizção do Google Chrome, ou seja, o processo finalizou',
        icon: 'https://images.emojiterra.com/google/android-pie/512px/274c.png'
      });
    });
};
*/
//fim da notificação
  lineFive.toggle();
  $('#startGoogle').removeClass('nav-link disabled');
  $('#restartGoogle').toggle();
});


$("#stopProcessLineSix").on("click", function(){
  //notificação do clique
  /*
  if(window.Notification&&Notification.permission!=="denied"){
    Notification.requestPermission(function(status){
      let n = new Notification('Finalização de processo',{
        body:'Você simulou a finalizção do programa Excel, ou seja, o processo finalizou',
        icon: 'https://images.emojiterra.com/google/android-pie/512px/274c.png'
      });
    });
};
*/
//fim da notificação
  lineSix.toggle();
  $('#startExcel').removeClass('nav-link disabled');
  $('#restartExcel').toggle();
});


// parar processos duplicados
$("#stopProcessRsInstagram").on("click", function(){
  //notificação do clique
  /*
  if(window.Notification&&Notification.permission!=="denied"){
    Notification.requestPermission(function(status){
      let n = new Notification('Finalização de processo duplicado',{
        body:'Você simulou a finalizção da duplicação do programa Word, ou seja, o processo finalizou',
        icon: 'https://images.emojiterra.com/google/android-pie/512px/274c.png'
      });
    });
};
*/
//fim da notificação
  line12.toggle();
  $('#restartInstagram').removeClass('nav-link disabled');
});


$("#stopProcessRsVSCode").on("click", function(){
  //notificação do clique
  /*
  if(window.Notification&&Notification.permission!=="denied"){
    Notification.requestPermission(function(status){
      let n = new Notification('Finalização de processo duplicado',{
        body:'Você simulou a finalizção da duplicação do Visual Studio Code, ou seja, o processo finalizou',
        icon: 'https://images.emojiterra.com/google/android-pie/512px/274c.png'
      });
    });
};
*/
//fim da notificação
  line32.toggle();
  $('#restartVSCode').removeClass('nav-link disabled');
});


$("#stopProcessRsExplorer").on("click", function(){
  //notificação do clique
  /*
  if(window.Notification&&Notification.permission!=="denied"){
    Notification.requestPermission(function(status){
      let n = new Notification('Finalização de processo duplicado',{
        body:'Você simulou a finalizção da duplicação do Bloco de Notas, ou seja, o processo finalizou',
        icon: 'https://images.emojiterra.com/google/android-pie/512px/274c.png'
      });
    });
};
*/
//fim da notificação
  line41.toggle();
  $('#restartExplorer').removeClass('nav-link disabled');
});


$("#stopProcessRsGoogle").on("click", function(){
  //notificação do clique
  /*
  if(window.Notification&&Notification.permission!=="denied"){
    Notification.requestPermission(function(status){
      let n = new Notification('Finalização de processo duplicado',{
        body:'Você simulou a finalizção da duplicação do Google Chrome, ou seja, o processo finalizou',
        icon: 'https://images.emojiterra.com/google/android-pie/512px/274c.png'
      });
    });
};
*/
//fim da notificação
  line52.toggle();
  $('#restartGoogle').removeClass('nav-link disabled');
});


$("#stopProcessRsExcel").on("click", function(){
  //notificação do clique
  /*
  if(window.Notification&&Notification.permission!=="denied"){
    Notification.requestPermission(function(status){
      let n = new Notification('Finalização de processo duplicado',{
        body:'Você simulou a finalizção da duplicação do programa Exel, ou seja, o processo finalizou',
        icon: 'https://images.emojiterra.com/google/android-pie/512px/274c.png'
      });
    });
};
*/
//fim da notificação
  line62.toggle();
  $('#restartExcel').removeClass('nav-link disabled');
});

