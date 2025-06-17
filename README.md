# 🚀 DevDiary

_DevDiary is a simple blog post that can help document your coding journey in programming. It has a minimalist like that only focuses on creating a blog post._

_Track your small achievements in programming using simple, maintainable applications that highlight the blog's core function._

---

## 📸 Demo

[Live Demo](https://devdiary-igh8.onrender.com/blogs)  

---

## ✨ Features

1. ✅ Create Blog Posts
       - Add a title, snippet, and content.
2. ✅ View Blog Entries
       - Display a list of saved posts in reverse chronological order.
       - Click to expand and read full content.
3. ✅ Minimalist Design
       - Clean, distraction-free layout to focus on writing.
       - Responsive and mobile-friendly design.

---

## 🛠 Tech Stack

**Client:** EJS, Tailwind CSS  
**Server:** Node.js, Express  
**Database:** MongoDB  
**Other Tools:** Postman, 

---

## 📂 Project Structure

```bash
express/
├── controllers/
│   └── blog-controller.js
├── models/
│   └── blog-model.js
├── routes/
│   └── blog-route.js
├── utils/
│   └── db.js
├── views/
│   └── partials
│   └── 404.ejs
│   └── aobut.ejs
│   └── create.ejs
│   └── details.ejs
│   └── index.ejs
├── .gitignore
├── app.js
├── env-sample
├── package-lock.json
├── package.json
```

---

## 🚀 Getting Started
Follow the steps below to run the **DevDiary** project locally:

### 🔁 1. Clone the repository

```bash
git clone https://github.com/jvitangcol/simple-blog.git
cd simple-blog
```

### 🔧 2. Set up the backend

a. Install dependencies
```bash
cd express
npm install
```

b. Create your `.env` file
Copy the sample environment file:
```bash
cp env-sample .env
```
> [!NOTE]
> ✍️ Edit the .env file and add your actual environment variables (e.g. MongoDB URI, PORT).

c. Run the backend server
```bash
npm run dev
```
The backend will start on the port specified in your `.env` file (e.g., `http://localhost:5000`).
