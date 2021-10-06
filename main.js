var http = require('http');

var url = require('url');
/*
messageData = [message:{username:"Salman Nazeer", message:"hello world"}];
*/
messageData = [];
var main = function(req, res)
{   
   
   var q = url.parse(req.url, true).query;
   if(q.pathname !== '/'){  
      if(q.message !== undefined && q.message !==""){
         messageData.push({username: q.username, message: q.message});
         console.log(messageData);
      }
      if(q.clear === "true")
      {
         messageData = [];
      }
      console.log(q);
      res.writeHead(200, {'Access-Control-Allow-Origin': '*'});
      res.write(JSON.stringify(messageData));
      res.end();
   }
}
http.createServer(main).listen(process.env.PORT || 4200);
