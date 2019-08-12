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

