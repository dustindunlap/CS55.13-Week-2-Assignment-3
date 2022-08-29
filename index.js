const http = require("http");
const fs = require("fs").promises;
// respond to http requests
const requestlistener = function(req, res){
  console.log(req.url);

  if (req.url === "/"){
    //if root, return html
    fs.readFile( __dirname + '/root.html' ).then(
      contents => {
        //set response header
        res.setHeader("Content-Type", "text/html; charset=UTF-8");
        //return 200 ok status code
        res.writeHead(200);
        //send back file contents + close response
        res.end(contents);
      }
    );
  }else{
     // return json if request not root
    fs.readFile( __dirname + '/objs.json').then(
      contents => {
        res.setHeader("Content-Type", "application/json; charset=UTF-8");
        res.writeHead(200);
        res.end(contents);
      }
    );
  }
}
//create http server instance
const server = http.createServer(requestlistener);
//define tcp port and ip
const host = "0.0.0.0";
const port = "8080";
//start listening to requests
server.listen(
  port,
  host,
  () => {
    console.log('Server is running.');
  }
);