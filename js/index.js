$(".logo").on("click", function(){
    if ($(window).width() < 601-17){
      $(".navButtons").slideToggle();
    }
  });



$(document).ready(function(){
	$("#desktopButt").click(function(){
    	$(".nsaMobile").hide()
    $(".nsaLaptop").show();
    });
  $("#mobileButt").click(function(){
    $(".nsaMobile").show().css("display", "block")
    $(".nsaLaptop").hide();
  });
});


function fade() {
  $('.loader').fadeOut("slow");
  }
  setTimeout(fade, 4000);