var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var jsonfileRet=[];
exports.returnedData = function (url,x,jsonfile) {
  // url = 'http://www.nysed.gov/coms/op001/opsc2a?profcd=27&plicno=026477';
 // console.log(url);
    request(url, function(error, response, html){
        if(!error){
            var $ = cheerio.load(html);
            let allText = [];
             $('#content_column').contents().each(function (i, e) {
            
             allText[i] = $(this).text().trim();
                    //console.log('allText:' + i + ' ' + allText[i]);
                        jsonfile[x].name =	allText[19];
                        jsonfile[x].licno =	allText[31];
                        jsonfile[x].licdate =	allText[35];
                        jsonfile[x].expdate =	allText[47];
                       
                   });
              };
              console.log("test",jsonfile[x]);
              jsonfileRet=jsonfileRet+jsonfile[x]
           
              
    
    });
//jsonfile[0]=jsonfile[x];
//return jsonfile[x];
}