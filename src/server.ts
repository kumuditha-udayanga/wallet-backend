import express, { Express, Request, Response } from 'express';
import db from "./config/database";
import cors from "cors";
import 'dotenv/config'
import bodyParser from "body-parser";
import ExpenseRoutes from "./routes/expense.routes";

const app:Express = express();

app.use(cors());

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

try{
  db.sync();
  db.authenticate();
  console.log("Database connected successfully");
} catch (error) {
  console.error("Database connect failed: ", error);
}

// simple route
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Wallet Backend Application" });
});

app.use('/expense/', ExpenseRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
