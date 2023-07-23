const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

let data = [
  {
    id: 1,
    name: "Item 1",
    description: "Description of Item 1",
  },
  {
    id: 2,
    name: "Item 2",
    description: "Description of Item 2",
  },
  {
    id: 3,
    name: "Item 3",
    description: "Description of Item 3",
  },
  {
    id: 4,
    name: "Item 4",
    description: "Description of Item 4",
  },
];

app.get("/data", (req, res) => {
  res.json(data);
});

app.post("/data", (req, res) => {
  const newItem = req.body;

  data.push(newItem);
  res.status(201).json(newItem);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
