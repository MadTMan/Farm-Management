const Item = require("../Models/Item");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

module.exports = {
  addItem: async (req, res) => {
    try {
      const { uid, itemName, category, quantity, price, description } = req.body;

      const item = await Item.create({
        user: uid,
        itemName, 
        category, 
        quantity, 
        price, 
        description,
      });
      await item.save();
      return res.status(200).json({ msg: "Success", item });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  allItems: async (req, res) => {
    try {
      const uid = req.params.id;
      const items = await Item.find({ user: uid });
      res.json(items);
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  editItem: async (req, res) => {
    try {
      const cid = req.params.id;
      let item = Item.findById(cid);
      item = await Item.findByIdAndUpdate(cid, {
        $set: req.body,
      });
      await item.save();
      return res.status(200).json({ msg: "Success", item });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  getItem: async (req, res) => {
    try {
      const item = await Item.findById(req.params.id);
      res.json(item);
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  deleteItem: async (req, res) => {
    try {
      let item = await Item.findByIdAndDelete(req.params.id);
      res.status(204).send("Deleted");
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
};
