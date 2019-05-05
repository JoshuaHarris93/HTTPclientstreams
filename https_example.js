var https = require('https');

console.log('I did it!');

var options = {
    host: 'stream-large-file.herokuapp.com',
    path: '/give-me-stuff-now'
  };

var callback = function(response) {
    console.log('In response handler callback!');
  
  
  console.log("I'm about to make the request!");
  console.log("I've made the request!");
  console.log('Response: ', response)

  response.on('data', function(chunk) {
    console.log('[-- CHUNK OF LENGTH ' + chunk.length + ' --]');
    console.log(chunk.toString());
  });
}

https.request(options, callback).end();

