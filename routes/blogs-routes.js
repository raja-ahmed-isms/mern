import express from "express";
import blog from "../model/Blog.js";
import user from "../model/User.js";
import jwt from "jsonwebtoken";
import multer from "multer";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./frontend/public/upload");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
// const upload = multer({ dest: "./frontend/public/upload" });

const upload = multer({ storage: storage });

// Add a new blog route

router.post("/addBlog", upload.single("blogImage"), async (req, res) => {
  if (!req.headers.authorization) {
    return res.send({ code: 403, message: "No Token" });
  } else {
    const userDetail = await jwt.verify(req.headers.authorization, "PRIV_123");
    console.log(userDetail, 28);
    if (userDetail._doc.userType !== "ADMIN") {
      return res.send({ code: 403, message: "Unauthorized" });
    }
    if (userDetail.iat - new Date().getTime > 8.64e7) {
      return res.send({ code: 403, message: "Token Expired!" });
    }
  }
  try {
    const blogTitle = req.body.blogTitle;
    const description = req.body.description;
    const author = req.body.author;
    const blogImage = req.file.filename;
    // const created_at = req.body.created_at;
    const blogdata = blog({
      blogTitle: blogTitle,
      description: description,
      author: author,
      blogImage: blogImage,
    });
    // console.log(req.file, 16);
    // const data = req.body;
    // const blogdata = new blog(data);
    await blogdata.save();
  } catch (error) {
    console.log(error);
  }
  return res.status(200).json({ message: "Blog Added Successfully" });
});

// Get all blogs route
router.get("/allBlogs", async (req, res) => {
  let blogs;
  try {
    blogs = await blog.find();
  } catch (error) {
    console.log(error);
  }
  if (!blogs) {
    return res.status(400).json({ message: "No Blogss Found" });
  }
  return res.status(200).json({ blogs });
});

// Find single blog by id route

router.get("/blog/:id", async (req, res) => {
  let blogs;
  const id = req.params.id;
  try {
    blogs = await blog.findById(id);
  } catch (error) {
    console.log(error);
  }
  if (!blogs) {
    return res.status(400).json({ message: "No Blog Found" });
  }
  return res.status(200).json({ blogs });
});

// Update By blog id route

router.patch(
  "/updateBlog/:id",
  upload.single("blogImage"),
  async (req, res) => {
    let updatedblog;
    const id = req.params.id;
    const blogTitle = req.body.blogTitle;
    const description = req.body.description;
    const author = req.body.author;
    const blogImage = req.file.filename;
    // console.log(req.file, 96);
    if (!req.headers.authorization) {
      return res.send({ code: 403, message: "No Token" });
    } else {
      const userDetail = await jwt.verify(
        req.headers.authorization,
        "PRIV_123"
      );
      console.log(userDetail, 28);
      if (userDetail._doc.userType !== "ADMIN") {
        return res.send({ code: 403, message: "Unauthorized" });
      }
      if (userDetail.iat - new Date().getTime > 8.64e7) {
        return res.send({ code: 403, message: "Token Expired!" });
      }
    }
    try {
      updatedblog = await blog.findByIdAndUpdate(id, {
        blogTitle,
        description,
        author,
        blogImage,
        // created_at,
      });

      // console.log(updatedblog, 104);
      // updatedblog.save();
    } catch (error) {
      console.log(error);
    }
    if (!updatedblog) {
      return res.status(400).json({ message: "Unable to Update Blog " });
    }
    return res.status(200).json({ message: "Blog Updated Successfully " });
  }
);

// Delete by blog id route

router.delete("/deleteBlog/:id", async (req, res) => {
  let blogs;
  const id = req.params.id;
  try {
    blogs = await blog.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
  }
  if (!blogs) {
    return res.status(400).json({ message: "Unable to Delete Blog " });
  }
  return res.status(200).json({ message: "Blog Deleted Successfully" });
});

router.post("/login", async (req, res) => {
  const { userName, password } = req.body;
  const userExist = await user.findOne({ username: userName });
  // console.log(userExist, 145);
  if (userExist) {
    if (userExist.password !== password) {
      return res.send({ code: 400, message: "Invalid  username or password." });
    }

    const _token = jwt.sign(
      { ...userExist },
      "PRIV_123"
      // {
      //   //expiresIn: "10h", // it will be expired after 10 hours
      //   //expiresIn: "20d" // it will be expired after 20 days
      //   //expiresIn: 120 // it will be expired after 120ms
      //   expiresIn: "1m", // it will be expired after 120s
      // }
    );

    return res.status(200).json({
      message: "Login Successfully",
      token: _token,
      type: userExist.userType,
    });
  } else {
    return res.status(500).json({ message: "Server Error" });
  }
});
export default router;
