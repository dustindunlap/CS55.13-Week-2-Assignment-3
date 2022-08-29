const http = require("http");
const fs = require("fs").promises;
// respond to http requests
const requestlistener = function(req, res){
  console.log(req.url);
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