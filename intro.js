$("#screen-two").hide();
$("#toggle-text").hide();
$("#img-two").hide();
$("#img-tree").hide();
$("#screen-tree").hide();
$("#popop").hide();




$("#h1-screen").click(function(){
    $("#screen-one").hide();
    $("#screen-two").show();
});

$("#img-one").click(function(){
    $("#img-one").hide();
    $("#img-two").show();
});

$("#img-two").click(function(){
  $("#img-two").hide();
  $("#img-one").show();
});

$("#new-btn").click(function(){
  $("#screen-two").hide();
  $("#screen-tree").show();
});

$("#text-hide").click(function(){
  $("#sscreen-tree").hide();
  $("#screen-one").show();
});


$("#toggle-button").click(function(){
    $("#toggle-text").toggle();

});

$("#toggle-text").click(function(){
    $("#img-tree").toggle();

});


$("#change-bg").click(function(){
    
    $("#home-Screen").css("background-color","blue")
});

$("#toggle-text").click(function(){
   $(".img-tree").addClass("animation");
});

const dropdownBtn = document.getElementById("btn");
const dropdownMenu = document.getElementById("dropdown");
const toggleArrow = document.getElementById("arrow");

const toggleDropdown = function () {
  dropdownMenu.classList.toggle("show");
  toggleArrow.classList.toggle("arrow");
};

dropdownBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleDropdown();
});

document.documentElement.addEventListener("click", function () {
  if (dropdownMenu.classList.contains("show")) {
    toggleDropdown();
  }
});

$(document).keydown(function(event){
  if(event.which == 65){
    console.log("key code: " + event.which );
    $("#popup").toggle();
  }

});






