const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "learning_platform",
  password: "1622",
  port: 5432,
});

app.get("/api/user/:id", async (req, res) => {
  const { id } = req.params;
  const userId = parseInt(id, 10); // Convert ID to integer

  if (isNaN(userId)) {
    return res.status(400).json({ message: "Invalid user ID" });
  }

  try {
    console.log(`Fetching user with ID: ${userId}`);

    const userQuery = await pool.query("SELECT * FROM public.auth_user WHERE id = $1", [userId]);
    console.log("User Query Result:", userQuery.rows);

    if (userQuery.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const challengesQuery = await pool.query("SELECT * FROM public.challenges WHERE user_id = $1", [userId]);
    console.log("Challenges Query Result:", challengesQuery.rows);

    const activitiesQuery = await pool.query("SELECT * FROM public.activities WHERE user_id = $1 ORDER BY date DESC LIMIT 5", [userId]);
    console.log("Activities Query Result:", activitiesQuery.rows);

    res.json({
      ...userQuery.rows[0],
      ongoingChallenges: challengesQuery.rows,
      recentActivities: activitiesQuery.rows,
    });

  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
