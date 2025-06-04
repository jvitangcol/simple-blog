import BlogModel from "../models/blog-model.js";

export const getAllBlogs = (req, res) => {
  BlogModel.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { title: "All Blogs", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createNewBlog = (req, res) => {
  const blog = new BlogModel(req.body);

  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getCreateBlog = (req, res) => {
  res.render("create", { title: "Create" });
};

export const viewBlogDetails = (req, res) => {
  const blogId = req.params.blogId;

  BlogModel.findById(blogId)
    .then((result) => {
      res.render("details", { title: "Blog details", blog: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteBlog = (req, res) => {
  const blogId = req.params.blogId;

  BlogModel.findByIdAndDelete(blogId)
    .then((result) => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => {
      console.log(err);
    });
};
