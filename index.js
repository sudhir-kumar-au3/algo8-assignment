const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const newsRoute = require("./routes/newsRoutes");
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", newsRoute);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Hello everyone",
  });
});
require('./routes/twitter')(app,io);
server.listen(process.env.PORT || 5000, () => {
  console.log(
    "App listening on port  ",
    server.address().port,
    app.settings.env
  );
});
