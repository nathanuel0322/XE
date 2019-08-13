$(document).ready(function() {
	var showChar = 680;
	var ellipsestext = "";
	var moretext = "More";
	var lesstext = "Less";
	$('.more').each(function() {
		var content = $(this).html();

		if(content.length > showChar) {

			var c = content.substr(0, showChar);
			var h = content.substr(showChar-1, content.length - showChar);

			var html = c + '<span class="moreelipses">'+ellipsestext+'</span>&nbsp;<span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">'+moretext+'</a></span>';

			$(this).html(html);
		}
	});

	$(".morelink").click(function(){
		if($(this).hasClass("less")) {
			$(this).removeClass("less");
			$(this).html(moretext);
		} else {
			$(this).addClass("less");
			$(this).html(lesstext);
		}
		$(this).parent().prev().toggle();
		$(this).prev().toggle();
		return false;
	});
});

$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
}, 4000);



 

// fetch('https://api.co2signal.com/v1/latest?countryCode=DK', {
//     method: 'GET',
//     mode: 'no-cors',
//     headers: {
//         'Content-Type': 'application/json',
//         "auth-token": '5bad276b6f9a7422'
//     }
//   })
//   .then(data => {
//     console.log(data);
    
//   });

  fetch('https://api.weatherbit.io/v2.0/history/&city=NewYork,NY&start_date=2019-01-0&end_date=2019-08-09&threshold=63&units=I&key=896adf1de5a343468ab3609f21600d23&tp=daily', {
    method: 'GET',
    mode: 'no-cors'
  })
  .then(data => {
    console.log(data);
    
  });

