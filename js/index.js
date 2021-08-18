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