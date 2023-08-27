const User = require("../Models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

module.exports = {
  register: async (req, res) => {
    try {
      const { fname, lname, username, email, password } = req.body;

      const check_username = await User.findOne({ username });
      if (check_username) {
        return res.status(400).json({ msg: "Username Already in Use!!!" });
      }

      const check_email = await User.findOne({ email });
      if (check_email) {
        return res.status(400).json({ msg: "Email Already in Use!!!" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await User.create({
        fname,
        lname,
        username,
        email,
        password: hashedPassword,
      });

      const accessToken = jwt.sign(
        {
          id: user._id,
          username: user.username,
        },
        process.env.ACCESS_TOKEN_SECRET
      );

      await user.save();
      return res
        .status(200)
        .json({ msg: "User Registered", user, accessToken });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ msg: "User does not exist!!!" });
      }

      const comparePassword = await bcrypt.compare(password, user.password);
      if (!comparePassword) {
        return res.status(400).json({ msg: "Wrong Credentials" });
      }

      const accessToken = jwt.sign(
        {
          id: user._id,
          username: user.username,
        },
        process.env.ACCESS_TOKEN_SECRET
      );

      res.status(200).json({
        msg: "login Successful!!!",
        accessToken,
        user: { ...user._doc, password: "" },
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getUserDetail: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(400).json({ msg: "User not Found" });
      }

      res.status(200).json(user);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  editProfile: async (req, res) => {
    try {
      let user = await User.findById(req.params.id);
      if (!user) {
        return res.status(400).json({ msg: "User not Found" });
      }

      user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });

      await user.save();

      const accessToken = jwt.sign(
        {
          id: user._id,
          username: user.username,
        },
        process.env.ACCESS_TOKEN_SECRET
      );

      res.status(200).json({ msg: "User Updated", user, accessToken });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  updateProfilePic: async (req, res) => {
    console.log(req.body);
    const imageName = req.file.filename;
    try {
      let user = await User.findById(req.params.id);
      if (!user) {
        return res.status(400).json({ msg: "User not Found" });
      }
      user.img = imageName;
      await user.save();
      const accessToken = jwt.sign(
        {
          id: user._id,
          username: user.username,
        },
        process.env.ACCESS_TOKEN_SECRET
      );
      res.status(200).json({ msg: "profilepic Updated", user, accessToken });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};
