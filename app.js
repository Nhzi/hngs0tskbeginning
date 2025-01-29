import express from "express";
//Creating the Express app
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  //Creating the data object
  const data = {
    email: "emmanuelaajayi2@gmail.com",
    current_datetime: new Date().toISOString(),
    gitrepo: "https://github.com/Nhzi/hngs0tskbeginning",
  };
  res.status(200).json(data);
});

//Starting the server on port 3000
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
