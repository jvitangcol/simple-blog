import express from "express";
import morgan from "morgan";

// db
import connectDB from "./utils/db.js";

// routes
import blogRouter from "./routes/blog-route.js";

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
app.use("/blogs", blogRouter);

// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "Not found" });
});
