var http = require('http');

var url = require('url');

var messageData = { 
               message : []
            };
var main = function(req, res)
{   
   
   var q = url.parse(req.url, true).query;
   if(q.pathname !== '/'){  
      if(q.message !== undefined && q.message !==""){
         messageData.message.push(q.message);
         console.log(messageData);
      }
      if(q.clear === "true")
      {
         messageData.message = [];
      }
      console.log(q);
      res.writeHead(200, {'Access-Control-Allow-Origin': '*'});
      res.write(JSON.stringify(messageData));
      res.end();
   }
}
http.createServer(main).listen(process.env.PORT || 4200);
