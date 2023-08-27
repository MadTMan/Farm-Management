const router = require("express").Router();
const {
  addWork,
  allWorks,
  editWork,
  getWork,
  deleteWork,
} = require("../Controllers/WorkController");

router.post("/addwork", addWork);
router.get("/:id", allWorks);
router.put("/editwork/:id", editWork);
router.get("/getwork/:id", getWork);
router.delete("/delete/:id", deleteWork);

module.exports = router;
