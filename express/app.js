import express from "express";
import morgan from "morgan";

// db
import connectDB from "./utils/db.js";

import BlogModel from "./models/blog-model.js";

const PORT = process.env.PORT || 3000;

const app = express();

app.set("view engine", "ejs");

// middleware & static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
  connectDB();
});

app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

// blog routes
app.get("/blogs", (req, res) => {
  BlogModel.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { title: "All Blogs", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/blogs", (req, res) => {
  const blog = new BlogModel(req.body);

  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/blogs/:blogId", (req, res) => {
  const blogId = req.params.blogId;

  BlogModel.findById(blogId)
    .then((result) => {
      res.render("details", { title: "Blog details", blog: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.delete("/blogs/:blogId", (req, res) => {
  const blogId = req.params.blogId;

  BlogModel.findByIdAndDelete(blogId)
    .then((result) => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create" });
});

// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "Not found" });
});
