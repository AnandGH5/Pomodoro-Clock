

var after = document.createElement("style");
after.innerHTML =
 ".switch-btn:after{content:'break';   color:#0074D9; left:87.5px; position:absolute; top:13px; line-height: 20px;}";
document.head.appendChild(after);


var before = document.createElement("style");
before.innerHTML =
 ".switch-btn:before{border: 1px #0074D9 solid;color:#ffffff;line-height: 35px;border-radius:100px;  content:'work';text-align:center;position:absolute; height:40px; width:60px; background-color:#0074D9; left:4.5px; top:3.5px; transition:all 150ms ease-out;}";
document.head.appendChild(before);


var hover = document.createElement("style");
hover.innerHTML =
 "#workminus:hover, #workplus:hover, #breakminus:hover, #breakplus:hover{ background-color:#0074D9;transition:0.3s; color:#ffffff;}";
document.head.appendChild(hover);


navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
var val=0; 
var result=0; 
var workset=1;   
var Interval;  
var flag=0; 
 var sound = new Audio('http://www.freesfx.co.uk/rx2/mp3s/9/10604_1376407711.mp3') ; 

$("#clock-play-button").click(function(){
  if(val===0)
    {
      $("#clock-play-button").attr('class', 'clock-button fa fa-stop');
      $(".switch-btn").attr('onclick', 'return false');
      val=1; 
      clearInterval(Interval);
      Interval = setInterval(startTimer, 1000);
    }
  else
    {
           $("#clock-play-button").attr('class', 'clock-button fa fa-play');
        if(workset)
        {
           $("#minutes").html($("#workvalue").html());
           $("#seconds").html("00");
        }
      else if(!workset){
        $("#minutes").html($("#breakvalue").html());
        $("#seconds").html("00");
      }
      $(".switch-btn").attr('onclick', 'switcher(this)');
       val=0;
       clearInterval(Interval); 
    }
});


$("#workplus").click(function(){
  if(val===1)
    return;
  var content=$("#workvalue").html();
 content++;
  var zeroset="";
  if(content<10)
    zeroset="0";
  
  $("#workvalue").html(zeroset+content);
  if(workset)
   $("#minutes").html(zeroset+content);
});
$("#workminus").click(function(){
   if(val===1)
    return;
  var content=$("#workvalue").html();
  if(content==1)
    return;
  if(content>=2)
 content--;
  var zeroset="";
  if(content<10)
    zeroset="0";
  $("#workvalue").html(zeroset+content);
   if(workset)
  $("#minutes").html(zeroset+content);
});  
$("#breakplus").click(function(){
   if(val===1)
    return; 
  var content=$("#breakvalue").html();
 content++;
     var zeroset="";
  if(content<10)
    zeroset="0";
  $("#breakvalue").html(zeroset+content); 
    if(!workset)  
    $("#minutes").html(zeroset+content);
}); 

$("#breakminus").click(function(){
   if(val===1)
    return;
  var content=$("#breakvalue").html();
  if(content==1)
    return;
  if(content>=2)
 content--; 
     var zeroset="";
  if(content<10)
    zeroset="0";
  $("#breakvalue").html(zeroset+content); 
    if(!workset)  
    $("#minutes").html(zeroset+content); 
});
 
function switcher(obj){  
    if (!obj.checked)
    { 
    //  $(".switch-btn:after").css("background-color","red");
      after.innerHTML = after.innerHTML.replace("color:#0074D9", "color:#F44336"); // or whatever you want to set it to
      before.innerHTML = before.innerHTML.replace("background-color:#0074D9", "background-color:#F44336");
      before.innerHTML = before.innerHTML.replace("border: 1px #0074D9 solid;", "border: 1px #F44336 solid;");
       hover.innerHTML = hover.innerHTML.replace("background-color:#0074D9;", "background-color:#F44336;");
       $(".theme-plus").css({"border":"1px #F44336 solid", "border-right": "0"})
        $(".theme-minus").css({"border":"1px #F44336 solid", "border-left": "0"})
       $(".theme").css("border","1px #F44336 solid");
       $(".text").css("color","#F44336");
      // $("#workminus").css({"border":"1px #e53935 solid", "border-left": "0"})
     //   $("#breakminus").css({"border":"1px #e53935 solid", "border-left": "0"})
     // $("#breakplus").css({property:value, "border-left": "0"})
      // $("#workminus").css({property:value, property:value, ...})
      //$("#breakminus").css({property:value, property:value, ...})
      
if(val===1)
        sound.play();
      workset=0;
      flag=0;
       var content=$("#breakvalue").html();
       $("#minutes").html(content);
       obj.checked=!obj.checked;
    }
    else
    {    
       after.innerHTML = after.innerHTML.replace("color:#F44336", "color:#0074D9"); // or whatever you want to set it to
      before.innerHTML = before.innerHTML.replace("background-color:#F44336", "background-color:#0074D9");
      before.innerHTML = before.innerHTML.replace("border: 1px #F44336 solid;", "border: 1px #0074D9 solid;");
       hover.innerHTML = hover.innerHTML.replace("background-color:#F44336;", "background-color:#0074D9;");
       $(".theme-plus").css({"border":"1px #0074D9 solid", "border-right": "0"})
        $(".theme-minus").css({"border":"1px #0074D9 solid", "border-left": "0"})
       $(".theme").css("border","1px #0074D9 solid");
       $(".text").css("color","#0074D9");
      if(val===1)
        sound.play();
       workset=1;
      flag=1;
       var content=$("#workvalue").html();
       $("#minutes").html(content);
      obj.checked=!obj.checked;
    }
}

function startTimer (){
  var minutes=parseInt($("#minutes").html());
    var seconds=parseInt($("#seconds").html());
   if(seconds===0 && minutes===0 && flag===0)
     {
       navigator.vibrate(1000);
       flag=1;
       $(".switch-btn").attr('onclick', 'switcher(this)');
       $(".switch-btn").click();
       $(".switch-btn").attr('onclick', 'return false');
       
        var minutes=parseInt($("#minutes").html());
        var seconds=parseInt($("#seconds").html());
     }
  else  if(seconds===1 && minutes===0 && flag===1)
     {
       flag=0;
       $(".switch-btn").click(); 
        var minutes=parseInt($("#minutes").html());
        var seconds=parseInt($("#seconds").html()); 
     }

  if(seconds===0 && minutes!==0)
    {
      minutes--;
      seconds=60 
    }
  if(seconds!==0){
    seconds--;
  }
      if(minutes<=9)
  $("#minutes").html("0"+minutes);
  else
  $("#minutes").html(minutes);
      if(seconds<=9)
         $("#seconds").html("0"+seconds);
  else
       $("#seconds").html(seconds);
}