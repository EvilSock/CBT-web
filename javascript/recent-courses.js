

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      
    } 
  });
}

$(".collapsible-jaco").click(function(){
  if ($("#fade-1").html() == "click for more"){
    $("#fade-1").html("click for less");
  } else {
    $("#fade-1").html("click for more");
  }
  $("#fade-2").toggleClass("fade-2-flip");
  $("#fade-3").toggleClass("fade-3-flip");
});

$(".collapsible-bradley").click(function(){
  if ($("#fade-4").html() == "click for more"){
    $("#fade-4").html("click for less");
  } else {
    $("#fade-4").html("click for more");
  }
  $("#fade-5").toggleClass("fade-2-flip");
  $("#fade-6").toggleClass("fade-3-flip");
});



    

    
    