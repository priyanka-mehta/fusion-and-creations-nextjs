$(document).ready(function () {
  $(".nav-tabs a").click(function () {
    $(this).tab('show');
  });
});

addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } 

$('.jarallax').jarallax({
  speed: 0.5,
  imgWidth: 1366,
  imgHeight: 768
})


$(document).ready(function () {
  $('#home1Detail').hide();
  $('#home2Detail').hide();
  $('#home3Detail').hide();
  $('#saloon1Detail').hide();
  $('#restaurant1Detail').hide();
  $('#office1Detail').hide();
});
$("#home1").click(function () {
  $("#home1").hide();
  $("#home2").hide();
  $("#home3").hide();
  $("#home1Detail").show();
});
$("#home2").click(function () {
  $("#home1").hide();
  $("#home2").hide();
  $("#home3").hide();
  $("#home2Detail").show();
});
$("#home3").click(function () {
  $("#home1").hide();
  $("#home2").hide();
  $("#home3").hide();
  $("#home3Detail").show();
});
$("#saloon1").click(function () {
  $("#saloon1").hide();
  $("#saloon1Detail").show();
});
$("#restaurant1").click(function () {
  $("#restaurant1").hide();
  $("#restaurant1Detail").show();
});
$("#office1").click(function () {
  $("#home1").show();
  $("#home2").show();
  $("#home3").show();
  $("#home1Detail").hide();
  $("#home2Detail").hide();
  $("#home3Detail").hide();
  $("#office1").hide();
  $("#office1Detail").show();
});

jQuery(document).ready(function ($) {
  $(".scroll").click(function (event) {
    event.preventDefault();

    $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 1000);
  });
});

$(document).ready(function () {
  $().UItoTop({ easingType: 'easeOutQuart' });
});