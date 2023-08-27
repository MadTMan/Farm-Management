const router = require("express").Router();
const {
  addItem,
  allItems,
  editItem,
  getItem,
  deleteItem,
} = require("../Controllers/ItemController");

router.post("/additem", addItem);
router.get("/:id", allItems);
router.put("/edititem/:id", editItem);
router.get("/getitem/:id", getItem);
router.delete("/delete/:id", deleteItem);

module.exports = router;
