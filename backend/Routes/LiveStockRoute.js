const router = require("express").Router();
const {
  addLiveStock,
  allLives,
  editLiveStock,
  getLiveStock,
  deleteLiveStock,
} = require("../Controllers/LiveStockController");

router.post("/addlive", addLiveStock);
router.get("/:id", allLives);
router.put("/editlive/:id", editLiveStock);
router.get("/getlive/:id", getLiveStock);
router.delete("/delete/:id", deleteLiveStock);

module.exports = router;
