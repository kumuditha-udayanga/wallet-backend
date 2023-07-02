import express from "express";
import db from "./src/config/database.js";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";

dotenv.config();
const app = express();

app.use(cors());

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

try{
  await db.sync();
  await db.authenticate();
  console.log("Database connected successfully");
} catch (error) {
  console.error("Database connect failed: ", error);
}

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Wallet Backend Application" });
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
