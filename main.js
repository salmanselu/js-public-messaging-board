var http = require('http');

var url = require('url');

messageData = { 'Access-Control-Allow-Origin': '*', 
               message : []
            };
var main = function(req, res)
{   
   var q = url.parse(req.url, true).query;
   if(q.pathname !== '/'){  
      if(q.message !== undefined && q.message !== ""){
         messageData.message.push(q.message);
         console.log(messageData);
      }
      console.log(q);
      res.write(JSON.stringify(messageData));
      res.end();
   }
}
http.createServer(main).listen(process.env.PORT || 4200);