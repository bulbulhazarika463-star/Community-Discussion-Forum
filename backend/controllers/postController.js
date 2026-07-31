const Post = require("../models/Post");

exports.createPost = async (req, res) => {

    try {

        const { title, category, content } = req.body;

        if (!title || !category || !content) {

            return res.status(400).json({
                success: false,
                message: "Please fill all fields"
            });

        }

        const post = await Post.create({
            title,
            category,
            content,
            author: req.user.id
        });

        res.status(201).json({
            success: true,
            message: "Post Created Successfully",
            post
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// ==========================
// Get All Posts
// ==========================
exports.getPosts = async (req, res) => {

    try {

        const posts = await Post.find()
            .populate("author", "name email")
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: posts.length,
            posts
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// ==========================
// Get Single Post
// ==========================
exports.getPost = async (req, res) => {

    try {

        const post = await Post.findById(req.params.id)
            .populate("author", "name email");

        if (!post) {

            return res.status(404).json({
                success: false,
                message: "Post Not Found"
            });

        }

        res.status(200).json({
            success: true,
            post
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// ==========================
// Update Post
// ==========================
exports.updatePost = async (req, res) => {

    try {

        const post = await Post.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!post) {

            return res.status(404).json({
                success: false,
                message: "Post Not Found"
            });

        }

        res.status(200).json({
            success: true,
            message: "Post Updated Successfully",
            post
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// ==========================
// Delete Post
// ==========================
exports.deletePost = async (req, res) => {

    try {

        const post = await Post.findByIdAndDelete(req.params.id);

        if (!post) {

            return res.status(404).json({
                success: false,
                message: "Post Not Found"
            });

        }

        res.status(200).json({
            success: true,
            message: "Post Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};