const express = require("express");
const router = express.Router();

const {
    createPost,
    getPosts,
    getPost,
    updatePost,
    deletePost
} = require("../controllers/postController");

const authMiddleware = require("../middleware/authMiddleware");

// Protected route
router.post("/", authMiddleware, createPost);

// Public routes
router.get("/", getPosts);
router.get("/:id", getPost);

// Protected routes
router.put("/:id", authMiddleware, updatePost);
router.delete("/:id", authMiddleware, deletePost);

module.exports = router;