$(".logo").on("click", function(){
    if ($(window).width() < 601-17){
      $(".navButtons").slideToggle();
    }
  });



$(document).ready(function(){
	$("#desktopButt").click(function(){
    	$(".mobile").hide()
    $(".laptop").show();
    });
  $("#mobileButt").click(function(){
    $(".mobile").show().css("display", "block")
    $(".laptop").hide();
  });
});


function fade() {
  $('.loader').fadeOut("slow");
  }
  setTimeout(fade, 4000);

  mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}