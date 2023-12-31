const express = require("express");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");
const {
  createBlog,
  updateBlog,
  getBlog,
  deleteBlog,
  liketheBlog,
  getAllBlog,
  disLikedtheBlog,
} = require("../controllers/blogCtrl");
const { uploadImages } = require("../controllers/productCtrl");
const { blogImgResize, uploadPhoto } = require("../middlewares/uploadImages");

const router = express.Router();

router.post("/", authMiddleware, isAdmin, createBlog);
router.put(
  "/upload/:id",
  authMiddleware,
  isAdmin,
  uploadPhoto.array("images", 2),
  blogImgResize,
  uploadImages
);
router.put("/likes", authMiddleware, liketheBlog);
router.put("/dislikes", authMiddleware, disLikedtheBlog);
router.put("/:id", authMiddleware, isAdmin, updateBlog);
router.get("/:id", getBlog);
router.get("/", getAllBlog);
router.delete("/:id", authMiddleware, isAdmin, deleteBlog);

module.exports = router;
