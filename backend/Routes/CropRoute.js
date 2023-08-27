const router = require("express").Router();
const {
  addCrop,
  allCrops,
  editCrop,
  getCrop,
  deleteCrop,
} = require("../Controllers/CropController");

router.post("/addcrop", addCrop);
router.get("/:id", allCrops);
router.put("/editcrop/:id", editCrop);
router.get("/getcrop/:id", getCrop);
router.delete("/delete/:id", deleteCrop);

module.exports = router;
