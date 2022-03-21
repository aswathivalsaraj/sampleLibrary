const http = require('http');
const app = require("./backend/app");
const port = process.env.PORT;
app.set('port', port);

const server = http.createServer(app);
server.listen(port);
server.on("error", onError);
server.on("listening", onListening);
server.listen(port);

const onError = error => {
  switch(error.code) {
    case "EACCESS": console.log("Privilage Error"); process.exit(1); break;
    case "EADDRINUSE": console.log("Address already in use"); process.exit(1); break;
    default: throw error;
  }
}