import express from "express";
import connectDB from "./config/db.js"
import cryptoRoutes from "./routes/cryptoRoutes.js"

const app = express();

connectDB();

app.use('/api', cryptoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
