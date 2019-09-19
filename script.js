// add a new css to h1
$("h1").click(function(event){$("h1").addClass("new-title");});

//add a new css to button
$("button").click(function(event){$("button").addClass("new-title");});

//changes the h1 to any text typed on keyboard
$(document).keydown(function(event){$("h1").text(event.key);});

//changes the colour of the text when mouse is rolled over h1
$("h1").mouseover(function(){$("h1").css("color","#ffa500");});

//adds buttons before and after the drum
$(".drum").before("<button>new button</button>");
$(".drum").after("<button>new button</button>");

//animation of h1 sliding up and down when button is clicked
$("button").on("click",function(){
$("h1").slideUp().slideDown().animate({opacity:0.2});
});

//drum hidden when clicked
$(".drum").on("click",function(){
$(".drum").hide();
});
