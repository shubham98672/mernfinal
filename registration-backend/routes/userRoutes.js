// routes/userRoutes.js
const express = require("express");
const router = express.Router();

// Define your routes here
router.post("/registerUser", (req, res) => {
    const { username, email, password, confirmPassword, userRole } = req.body;

    // Logic for handling registration
    // For now, just returning a success message
    res.json({ message: "User registration successful", data: { username, email, userRole } });
});

// Export the router
module.exports = router;
