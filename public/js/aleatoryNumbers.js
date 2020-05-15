/* Função do intervalo de tempo

setInterval(myMethod, 5000);

function myMethod( ){
}
*/

//gerando numeros aleatórios CPU // cria numero aleatorio para cada espaço
setInterval(cpuNumbers, 5000);

function cpuNumbers(){
    var nCPU1 = Math.floor(Math.random()* (72 - 41) + 41);
    document.getElementById("lineCPU1").innerHTML = "< " + "0." + nCPU1;
    
    var nCPU12 = Math.floor(Math.random()* (60 - 36) + 41);
    document.getElementById("lineCPU12").innerHTML = "< " + "0." + nCPU12;
    
    var nCPU2 = Math.floor(Math.random()* (80 - 37) + 37);
    document.getElementById("lineCPU2").innerHTML = "< " + "0." + nCPU2;
    
    var nCPU3 = Math.floor(Math.random()* (60 - 42) + 42);
    document.getElementById("lineCPU3").innerHTML = "< " + "0." + nCPU3;
    
    var nCPU32 = Math.floor(Math.random()* (60 - 42) + 42);
    document.getElementById("lineCPU32").innerHTML = "< " + "0." + nCPU32;
    
    var nCPU4 = Math.floor(Math.random()* (40 - 15) + 15);
    document.getElementById("lineCPU4").innerHTML = "< " + "0." + nCPU4;
    
    var nCPU42 = Math.floor(Math.random()* (32 - 10) + 10);
    document.getElementById("lineCPU42").innerHTML = "< " + "0." + nCPU42;
    
    var nCPU5 = Math.floor(Math.random()* (100 - 68) + 68);
    document.getElementById("lineCPU5").innerHTML = "< " + "0." + nCPU5;
    
    var nCPU52 = Math.floor(Math.random()* (100 - 68) + 68);
    document.getElementById("lineCPU52").innerHTML = "< " + "0." + nCPU52;
    
    var nCPU6 = Math.floor(Math.random()* (45 - 17) + 17);
    document.getElementById("lineCPU6").innerHTML = "< " + "0." + nCPU6;
    
    var nCPU62 = Math.floor(Math.random()* (45 - 17) + 17);
    document.getElementById("lineCPU62").innerHTML = "< " + "0." + nCPU62;
}



//gerando numeros aleatórios PRIVATE BYTES // cria numero aleatorio para cada espaço
setInterval(ptivateBytesNumbers, 4000);

function ptivateBytesNumbers(){
    var nPB1 = Math.floor(Math.random()* (50000 - 20000) + 20000);
    document.getElementById("linePB1").innerHTML = nPB1 + " k";
    
    var nPB12 = Math.floor(Math.random()* (50000 - 20000) + 20000);
    document.getElementById("linePB12").innerHTML = nPB12 + " k";
    
    var nPB2 = Math.floor(Math.random()* (50000 - 20000) + 20000);
    document.getElementById("linePB2").innerHTML = nPB2 + " k";
    
    var nPB3 = Math.floor(Math.random()* (50000 - 20000) + 20000);
    document.getElementById("linePB3").innerHTML = nPB3 + " k";
    
    var nPB32 = Math.floor(Math.random()* (50000 - 20000) + 20000);
    document.getElementById("linePB32").innerHTML = nPB32 + " k";
    
    var nPB4 = Math.floor(Math.random()* (50000 - 20000) + 20000);
    document.getElementById("linePB4").innerHTML = nPB4 + " k";
    
    var nPB42 = Math.floor(Math.random()* (50000 - 20000) + 20000);
    document.getElementById("linePB42").innerHTML = nPB42 + " k";
    
    var nPB5 = Math.floor(Math.random()* (50000 - 20000) + 20000);
    document.getElementById("linePB5").innerHTML = nPB5 + " k";
    
    var nPB52 = Math.floor(Math.random()* (50000 - 20000) + 20000);
    document.getElementById("linePB52").innerHTML = nPB52 + " k";
    
    var nPB6 = Math.floor(Math.random()* (50000 - 20000) + 20000);
    document.getElementById("linePB6").innerHTML = nPB6 + " k";
    
    var nPB62 = Math.floor(Math.random()* (50000 - 20000) + 20000);
    document.getElementById("linePB62").innerHTML = nPB62 + " k";
}


//gerando numeros aleatórios WORKING SET // cria numero aleatorio para cada espaço
setInterval(workingSetNumbers, 3000);

function workingSetNumbers(){
    var nWS1 = Math.floor(Math.random()* (42000 - 18000) + 18000);
    document.getElementById("lineWS1").innerHTML = nWS1 + " k";
    
    var nWS12 = Math.floor(Math.random()* (78000 - 22700) + 22700);
    document.getElementById("lineWS12").innerHTML = nWS12 + " k";
    
    var nWS2 = Math.floor(Math.random()* (36800 - 22200) + 22200);
    document.getElementById("lineWS2").innerHTML = nWS2 + " k";
    
    var nWS3 = Math.floor(Math.random()* (50000 - 20000) + 20000);
    document.getElementById("lineWS3").innerHTML = nWS3 + " k";
    
    var nWS32 = Math.floor(Math.random()* (50000 - 20000) + 20000);
    document.getElementById("lineWS32").innerHTML = nWS32 + " k";
    
    var nWS4 = Math.floor(Math.random()* (45000 - 32200) + 32200);
    document.getElementById("lineWS4").innerHTML = nWS4 + " k";
    
    var nWS42 = Math.floor(Math.random()* (34500 - 20000) + 20000);
    document.getElementById("lineWS42").innerHTML = nWS42 + " k";
    
    var nWS5 = Math.floor(Math.random()* (70100 - 18000) + 20000);
    document.getElementById("lineWS5").innerHTML = nWS5 + " k";
    
    var nWS52 = Math.floor(Math.random()* (70100 - 18000) + 20000);
    document.getElementById("lineWS52").innerHTML = nWS52 + " k";
    
    var nWS6 = Math.floor(Math.random()* (65001 - 23040) + 23040);
    document.getElementById("lineWS6").innerHTML = nWS6 + " k";
    
    var nWS62 = Math.floor(Math.random()* (65001 - 23040) + 23040);
    document.getElementById("lineWS62").innerHTML = nWS62 + " k";
}


//gerando numeros aleatórios PID // cria numero aleatorio para cada espaço a cada 1 segundo
setInterval(pidNumbers, 2000);
function pidNumbers(){
    var nPID1 = Math.floor(Math.random()* (20000 - 12000) + 12000);
    document.getElementById("linePID1").innerHTML = nPID1;

    var nPID12 = Math.floor(Math.random()* (9000 - 7000) + 7000);
    document.getElementById("linePID12").innerHTML = nPID12;

    var nPID2 = Math.floor(Math.random()* (6800 - 2200) + 2200);
    document.getElementById("linePID2").innerHTML = nPID2;

    var nPID3 = Math.floor(Math.random()* (10000 - 1000) + 1000);
    document.getElementById("linePID3").innerHTML = nPID3;

    var nPID4 = Math.floor(Math.random()* (4500 - 3200) + 3200);
    document.getElementById("linePID4").innerHTML = nPID4;

    var nPID42 = Math.floor(Math.random()* (34500 - 2000) + 2000);
    document.getElementById("linePID42").innerHTML = nPID42;

    var nPID5 = Math.floor(Math.random()* (10100 - 3000) + 3000);
    document.getElementById("linePID5").innerHTML = nPID5;

    var nPID52 = Math.floor(Math.random()* (10100 - 3000) + 3000);
    document.getElementById("linePID52").innerHTML = nPID52;

    var nPID6 = Math.floor(Math.random()* (6501 - 340) + 340);
    document.getElementById("linePID6").innerHTML = nPID6;

    var nPID62 = Math.floor(Math.random()* (6501 - 340) + 340);
    document.getElementById("linePID62").innerHTML = nPID62;
}
