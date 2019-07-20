var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();
var dt = require('./getData');

app.get('/scrape', function(req, res){
    let licenses = ['191569', '191208'];
    var jsonReturn=[];
    var json1 = "[";
    var json2 = "]";
    var jsonfile=[];
    for (y=0;y<licenses.length;y++) {
        jsonfile[y] = { "name": "","licno": "","licdate": "","expdate": ""}
    }
  console.log(jsonfile);

let urls =[];
for (x=0; x<licenses.length; x++){
    url=`http://www.nysed.gov/coms/op001/opsc2a?profcd=60&plicno=${licenses[x]}`;
    
//url = 'https://www.imdb.com/title/tt1229340/';
//url = urls[x];

//CHECK LATER AS 27
//'http://www.nysed.gov/coms/op001/opsc2a?profcd=27&plicno=026477';
//http://www.nysed.gov/coms/op001/opsc2a?profcd=27&plicno=
/* FROM HERE
request(url, function(error, response, html){
    if(!error){
        var $ = cheerio.load(html);


  let allText = [];
var jsonfile = [{ name : "", licno : "", licdate : "", expdate : ""}];

    $('#content_column').contents().each(function (i, e) {

       
       	allText[i] = $(this).text().trim();
       	//console.log('allText:' + i + ' ' + allText[i]);
			jsonfile[0].name =	allText[19];
			jsonfile[0].licno =	allText[31];
			jsonfile[0].licdate =	allText[35];
			jsonfile[0].expdate =	allText[47];
            });

}

// To write to the system we will use the built in 'fs' library.
// In this example we will pass 3 parameters to the writeFile function
// Parameter 1 :  output.json - this is what the created filename will be called
// Parameter 2 :  JSON.stringify(json, null, 4) - the data to write, here we do an extra step by calling JSON.stringify to make our JSON easier to read
// Parameter 3 :  callback function - a callback function to let us know the status of our function

fs.writeFile('output.json', JSON.stringify(jsonfile, null, 4), function(err){

    console.log('File successfully written! - Check your project directory for the output.json file');

}) */

// Finally, we'll just send out a message to the browser reminding you that this app does not have a UI.
dt.returnedData(url,x,jsonfile);
//console.log(jsonReturn[0]);
}
fs.writeFile('output.json', JSON.stringify(jsonfileRet, null, 4), function(err){

    console.log('File successfully written! - Check your project directory for the output.json file');

})

res.send('Check your console!')

    }) ;

app.listen('8081') ;
console.log('Magic happens now on port 8081'); 
exports = module.exports = app;