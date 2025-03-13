import express from "express";
import bodyParser from "body-parser";
import router from "./routes/api";
import db from "./utils/database";

async function init() {
  try {
    const result = await db();

    // const statusMessage = await db();
    console.log("Database status :", result);

    const app = express();

    app.use(bodyParser.json());
    const port = 3000;console.log("Server initialization started.");
console.log("Database connection established.");
console.log("Server is running at http://localhost:3000");

    app.get("/", (req, res) => {
      res.status(200).json({
        message: "Hello World",
        data: null,
      });
    });

    app.use("/api", router);

    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
  }
}
init(); // Start the server
