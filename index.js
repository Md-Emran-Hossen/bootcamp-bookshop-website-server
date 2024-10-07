const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.port || 5000;


const books = require("./data/books.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Bootcamp The Book Shop Website Server is running");
});

app.get("/books", (req, res) => {
  res.send(books);
});

app.get("/book/:id",(req, res)=>{
  id = req.params.id;
  // console.log(id);
  const selectedBook = books.find((n)=> n.bookId == id);
  res.send(selectedBook);
})

app.listen(port, () => {
  console.log(`Bootcamp The Book Shop Website Server is running on ${port}`);

});