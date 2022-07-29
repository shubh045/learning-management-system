const mongoose = require("mongoose");

const http = require("http");
const dbUrl =
  "mongodb+srv://Admin:VIPZb498zKAImRYQ@cluster0.zvzw94r.mongodb.net/?retryWrites=true&w=majority";
const connectionParams = {
  useNewUrlParser: true,
};

mongoose
  .connect(dbUrl, connectionParams)
  .then(() => {
    console.info("connectd to DB");
  })
  .catch((e) => {
    console.log("Error:", e);
  });

let app = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });

  res.end("Hello World!\n");
});

app.listen(3100, "127.0.0.1");
console.log("Node server running on port 3000");
