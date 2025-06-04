import express from "express";
import {
  getAllBlogs,
  createNewBlog,
  getCreateBlog,
  viewBlogDetails,
  deleteBlog,
} from "../controllers/blog-controller.js";

const blogRouter = express.Router();

// blog routes
blogRouter.get("/", getAllBlogs);

blogRouter.post("/", createNewBlog);

blogRouter.get("/create", getCreateBlog);

blogRouter.get("/:blogId", viewBlogDetails);

blogRouter.delete("/:blogId", deleteBlog);

export default blogRouter;
