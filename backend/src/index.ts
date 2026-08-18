import "dotenv/config";
import cors from "cors"
import express from "express"
import authRoutes from "./routes/auth_routes.js";

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

app.use("/api/auth", authRoutes)

console.log("JWT secret exists:", !!process.env.JWT_secret);

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() })
})

app.get("/api/features", (_req, res) => {
  res.json([
    {
      title: "Lightning Fast",
      description:
        "Built with Vite for instant hot module replacement and optimized production builds.",
    },
    {
      title: "Modern Stack",
      description:
        "React, Tailwind CSS, and Express in a monorepo ready to scale.",
    },
    {
      title: "Fully Responsive",
      description:
        "Looks great on every screen size, from mobile phones to large desktop displays.",
    },
  ])
})

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`)
})
