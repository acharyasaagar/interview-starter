import express from "express"
import cors from "cors"
import type { Request, Response } from "express"

const app = express()
const PORT = 3001

// Middleware
app.use(cors())
app.use(express.json())

// health check endpoint
app.get("/health-check", (req: Request, res: Response) => {
  res.send("Ok")
})

app.listen(PORT, () => {
  console.log(`Backend  is running on http://localhost:${PORT}`)
})
