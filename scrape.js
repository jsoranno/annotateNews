var request = require('request');
var cheerio = require('cheerio');

request('http://www.allsides.com/', function (error, response, html) {
    if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html);
        var parsedResults = [];
        $('div.news-body').each(function(i, element){
            var a = $(this).prev();
            var title = a.text();
            var url = a.find('a').attr('href');
            var body = $(this).text();
            var metadata = {
                title: title,
                url: url,
                body: body
            };
            // Push meta-data into parsedResults array
            parsedResults.push(metadata);
        });
            console.log(parsedResults);
    };
});