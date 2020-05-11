const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const newsRoute = require("./routes/routes");
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
app.listen(process.env.PORT || 5000, () => {
  console.log(
    "App listening",
    app.settings.env
  );
});
