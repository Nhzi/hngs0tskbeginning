import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  const data = {
    email: "emmanuelaajayi2@gmail.com",
    date: new Date().toISOString(),
    gitrepo: "https://github.com/Nhzi/hngs0tskbeginning",
  };
  res.status(200).json(data);
});
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
