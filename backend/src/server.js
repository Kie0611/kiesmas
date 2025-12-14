import express from 'express';
import messageRoutes from './routes/messageRoutes.js'
import { connectDB } from './config/db.js';
import dotenv from "dotenv"
import cors from 'cors';
import path from "path"

dotenv.config()

const app = express()
const PORT = process.env.PORT
const __dirname = path.resolve();

app.use(express.json())

// Fix CORS to allow both local and production origins
app.use(cors({
  origin: process.env.NODE_ENV === "production" 
    ? "https://kiesmas.onrender.com" 
    : "http://localhost:5173",
  credentials: true
}));

app.use("/api/message", messageRoutes)

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

connectDB().then(() => {
  const server = app.listen(PORT, () => {
    console.log(`SERVER STARTED ON PORT: ${PORT}`)
  })
  
  process.on('SIGTERM', () => {
    console.log('SIGTERM signal received: closing HTTP server')
    server.close(() => {
      console.log('HTTP server closed')
      process.exit(0)
    })
  })

  process.on('SIGINT', () => {
    console.log('SIGINT signal received: closing HTTP server')
    server.close(() => {
      console.log('HTTP server closed')
      process.exit(0)
    })
  })
})