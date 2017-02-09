$(document).ready(function(){
  
  var total = 0;
  var counter = "";
  var operation = "";
  
  $("#value").html(total);

  //NUMBERS
  $("#dot").on('click', function() {
    counter += ".";
         $("#value").html(counter);
    });            
  
  $("#zero").on('click', function() {
    counter += 0;  
     $("#value").html(counter);
    });
    
  $("#one").on('click', function() {
    counter += 1; 
    $("#value").html(counter);
    });

  $("#two").on('click', function() {
    counter += 2;
    $("#value").html(counter);
    });

  $("#three").on('click', function() {
    counter += 3;
    $("#value").html(counter);
    });

  $("#four").on('click', function() {
    counter += 4;
    $("#value").html(counter);
    });
   
  $("#five").on('click', function() {
    counter += 5;
    $("#value").html(counter);
    });
   
  $("#six").on('click', function() {
    counter += 6;
    $("#value").html(counter);
    });
   
  $("#seven").on('click', function() {
    counter += 7;
    $("#value").html(counter);
    });
   
  $("#eight").on('click', function() {
    counter += 8;
    $("#value").html(counter);
    });
   
  $("#nine").on('click', function() {
    counter += 9;
    $("#value").html(counter);
    });
   
  
  //OPERATIONS
  $("#plus").on('click', function() {
    total += parseInt(counter);
    counter = "";
    operation += "p";
    $("#value").html("0");
    });
  
  $("#minus").on('click', function() {  
    total -= (parseInt(counter))*(-1);
    counter = "";
    operation += "m";
    $("#value").html("0");
    });  
  
  $("#divide").on('click', function() {
    total += parseInt(counter);
    counter = "";
    operation += "d"; 
    $("#value").html("0");
    });
  
  $("#times").on('click', function() {
    total += parseInt(counter);
    counter = "";
    operation += "t";    
    $("#value").html("0"); 
    });
  
  $("#equals").on('click', function() {
    if (operation.indexOf("p") > -1) {
      total += Math.round(parseInt(counter), -2);
    } else if (operation.indexOf("m") > -1) {
      total -= Math.round(parseInt(counter), -2);
    } else if (operation.indexOf("d") > -1) {
      total /= Math.round(parseInt(counter), -2);
    } else if (operation.indexOf("t") > -1) {
      total *= Math.round(parseInt(counter), -2);
    }
    console.log(counter);
    console.log(total);
    console.log(operation);
    
    counter = total;
    total = 0;
    $("#value").html(counter);
    operation = "";
});
  
  $("#AC").on('click',function() {
    total = 0;
    counter = "";
    $("#value").html(total);
    });
  
  $("#CE").on('click', function() {
    counter = "";
    $("#value").html("0");
    
  })

});