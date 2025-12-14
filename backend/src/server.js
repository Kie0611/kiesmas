import express from 'express';
import messageRoutes from './routes/messageRoutes.js'
import { connectDB } from './config/db.js';
import dotenv from "dotenv"
import cors from 'cors';

dotenv.config()

connectDB();

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(cors({
  origin: "http://localhost:5175",
}));


app.use("/api/message", messageRoutes)

connectDB().then(() => {
  const server = app.listen(PORT, () => {
    console.log(`SERVER STARTED ON PORT: ${PORT}`)
    connectDB()
  })
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
