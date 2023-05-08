import express from "express";
import livereload from "livereload";
import connectLiveReload from "connect-livereload";
import router from "./routes/index.js";
import "dotenv/config";
import path from 'path'
import { fileURLToPath } from 'url';
import connect from "./utils/db.connect.js";
import hbs_setup from "./hbs.setup.js";
import passport from "./utils/passport.js";
import session from "express-session";
import morgan from "morgan";
import cors from 'cors'
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
app.use(morgan('dev'))
app.use(cors())
app.use(connectLiveReload());
app.use(express.urlencoded({
  extended: true,
  limit: '1mb',
  parameterLimit: 5000
}))
app.use(express.static(path.join(__dirname, '/assets')));
// ? passport
app.use(session({ secret: "manest man" }));
app.use(passport.initialize());
app.use(passport.session());
//? HBS setup
hbs_setup(app, __dirname)

//? routes
app.get("/", (req, res) => {
  res.render("home", {
    title: "Home Page",
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
