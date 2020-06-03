const path = require("path");
const express = require("express");
const hbs = require("hbs");

const notesRepos = require("./utils/notes_repo.js");

const app = express();
const port = 3000;

// defining path for express app
const publicDir = path.join(__dirname, "../public");
const viewsDir = path.join(__dirname, "../templates/views");
const partialsDir = path.join(__dirname, "../templates/partials");
// setup public dir
app.use(express.static(publicDir));

// setup handlebars
app.set("view engine", "hbs");
app.set("views", viewsDir);

// setup partials
hbs.registerPartials(partialsDir);

app.get("/", (req, res) => {
  res.render("index", {
    title: "Notes App",
  });
});

app.get("/save", (req, res) => {
  const text = req.query.text;
  console.log(text);
  notesRepos.addNote(text);
  res.send("OK");
});

app.get("/get", (req, res) => {
  const notes = notesRepos.getNotes();
  res.send(notes);
});

app.listen(port, () => {
  console.log(`Notes App is running on port ${port}`);
});
