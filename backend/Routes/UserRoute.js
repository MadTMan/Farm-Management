const router = require("express").Router();
const {
  register,
  login,
  getUserDetail,
  editProfile,
  updateProfilePic,
} = require("../Controllers/UserController");
const { verifyToken } = require("../Middlewares/verifyToken");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../frontend/public/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/register", register);
router.post("/login", login);
router.get("/:id", getUserDetail);
router.put("/update/profile/:id", verifyToken, editProfile);
router.put("/update/profile/pic/:id", upload.single("image"), updateProfilePic);

module.exports = router;
