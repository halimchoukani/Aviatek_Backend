import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/user.js";
import pilotsRoutes from "./routes/pilots.js";


dotenv.config();
const app = express();

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/pilots", pilotsRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
