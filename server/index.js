require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const app = express();
const { CONNECTION_STRING, SESSION_SECRET, SERVER_PORT } = process.env;
const ctrl = require("./controller");
const authCtrl = require("./authController");

app.use(express.json());
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    rejectUnauthorized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 },
    secret: SESSION_SECRET
  })
);

massive(CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
    console.log("|---DATABASE IS A GO!--|");
    app.listen(SERVER_PORT, () => {
      console.log(`|---SERVER IS A GO FOR PORT: ${SERVER_PORT}---|`);
    });
  })
  .catch(err => console.log(err));

app.post('/api/register', authCtrl.register);
app.post('/api/login', authCtrl.login)

app.get('api/posts/:id?', ctrl.getAllPosts)
