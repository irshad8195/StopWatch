var Hour=0;
var Min=0;
var Sec=0;
var count=0;

var timer=false;


function start(){
 timer=true
 stopwatch();
}

function stop(){
timer=false;

}

function reset(){
 timer=false;

  Hour=0;
  Min=0;
  Sec=0;
  count=0;

  document.getElementById("Hour").innerHTML="00";
  document.getElementById("Min").innerHTML="00";
  document.getElementById("Sec").innerHTML="00";
  document.getElementById("count").innerHTML="00";

}
function stopwatch(){
 if(timer==true){

 count=count+1;

 if(count == 100){
    Sec=Sec+1;
    count=0;

 }
if(Sec == 60){
Min=Min+1;
Sec=0;
}
if(Min == 60){
Hour=Hour+1;
Min=0;
Sec=0;

}

var HourString=Hour;
var MinString=Min;
var SecString=Sec;
var countString=count;

if(Hour<10){
    HourString="0"+HourString;
}
if(Min<10){
    MinString="0"+MinString;
}
if(Sec<10){
    SecString="0"+SecString;
}
if(count<10){
    countString="0"+countString;
}

document.getElementById("Hour").innerHTML=HourString;
document.getElementById("Min").innerHTML=MinString;
 document.getElementById("Sec").innerHTML=SecString;
    document.getElementById("count").innerHTML=countString;

    setTimeout("stopwatch()",10)
 }
}

