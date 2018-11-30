var request = require('request');
var url = 'https://spiffyslack.herokuapp.com/'

request(url, function(){
  console.log('Pinged ' + url)
})
