$(document).ready(function() {
  $("form").submit(function(event){
    $(".eqi").hide();
    $(".iso").hide();
    $(".sca").hide();
    event.preventDefault();
   var side1 = parseInt($("#side1").val());
   var side2 = parseInt($("#side2").val());
   var side3 = parseInt($("#side3").val());
   if (side1 === side2 || side2 === side3 || side1 === side3) {
     $(".iso").show();
   } else if (side1 === side2 && side2 === side3) {
     $(".eqi").show();
   }else if (side1 != side2 && side2 != side3 && side1 != side3) {
     $(".sca").show();

  });
});
