import express from "express";
import { create } from "express-handlebars";
import livereload from "livereload";
import connectLiveReload from "connect-livereload";

//? Intializations
const app = express();
const hbs = create({
  /* config */
});

//? Middlewares
app.engine("handlebars", hbs.engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(3000, () =>
  console.log("app started on port http://localhost:3000/ ...")
);
