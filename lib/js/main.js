$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
}, 4000);


$.ajax({
    url: 'https://api.co2signal.com/v1/latest?countryCode=US',
    beforeSend: function(xhr) {
         xhr.setRequestHeader("Authorization", "Bearer 5bad276b6f9a7422")
    }, success: function(data){
        alert(data);
        //process the JSON data etc
    }
})

