$(document).ready(function() {
	var showChar = 640;
	var ellipsestext = "...";
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
		if ($(this).hasClass("less")) {
			$(this).removeClass("less");
			$(this).html(moretext);
        } 
        else {
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



function createStatElement(data){
    
    //p tag for temp
    let p = document.getElementById("temp")
    
    p.innerText += data.data[0].max_temp + " " + data.data[0].max_wind_spd
  
    
    //div container
    let div = document.getElementById("stats")
    div.append(p) 
        document.body.appendChild(div)
        
    
}
     


  
fetch("https://api.weatherbit.io/v2.0/history/daily?postal_code=11377&country=US&start_date=2019-08-08&end_date=2019-08-09&key=896adf1de5a343468ab3609f21600d23")
.then((resp) => resp.json())
.then(function(data){
    console.log(data.data[0]);
    

    createStatElement(data);

})
.catch(function(error){
 console.log(error)
})







  $(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });