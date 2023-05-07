import express, { Router } from "express";
import { create } from "express-handlebars";
import livereload from "livereload";
import connectLiveReload from "connect-livereload";
import router from "./routes/index.js";
import "dotenv/config";
import path from 'path'
import { fileURLToPath } from 'url';
import connect from "./utils/db.connect.js";
import hbs_setup from "./hbs.setup.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//? Intializations
const app = express();


//?live reload
const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

//? Middlewares
app.use(connectLiveReload());
app.use(express.static(path.join(__dirname, '/assets')));

//? HBS setup
hbs_setup(app, __dirname)

//? routes
app.get("/", (req, res) => {
  res.render("home", {
    title: "Home Page",
    universityName: "UNN",
    department: {
      name: "Computer Science"
    }
  });
});

app.use(router)

async function serve() {

  await connect(process.env.MONGO_URI)
  //?server - up
  app.listen(3000, () =>
    console.log("app started on port http://localhost:3000/ ...")
  );
}
serve()
