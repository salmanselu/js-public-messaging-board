var http = require("http");
var fs = require('fs');
var url = require('url');

global.task = ' ';
global.body = ' ';
var main = function(req, res)
{
    fs.readFile('login.html', function(err, data){
        
        var q = url.parse(req.url, true).query;
        body = task + data;
        if(req.url === '/')
        {
            
        }
        else if(q.clear === 'clear')
        {
            task = ' ';
            body = ' ';
            body += data;
        }
        else if(q.task)
        { 
            var date = Date();
            
            task += `<p class="font-face: sans-serif;">`+ q.task +`<br><a style="color: gray;">`+ String(date) +`</a></p><br><hr>and;
            body = task + data;
        }       
        res.write(body);
        //res.end();
    });
    
}

http.createServer(main).listen(process.env.PORT || 4200);
