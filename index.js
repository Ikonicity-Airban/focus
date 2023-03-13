import express from "express";
import { create } from "express-handlebars";
import livereload from "livereload";
import connectLiveReload from "connect-livereload";

//? Intializations
const app = express();
const hbs = create({
  /* config */
});
const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

//? Middlewares
app.use(connectLiveReload());
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("home", {
    title: "holy shit",
  });
});

app.listen(3000, () =>
  console.log("app started on port http://localhost:3000/ ...")
);
