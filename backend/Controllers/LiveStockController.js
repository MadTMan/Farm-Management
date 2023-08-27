const LiveStock = require("../Models/LiveStock");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

module.exports = {
  addLiveStock: async (req, res) => {
    try {
      const { uid, species, begin, end, weight, expense } = req.body;

      const live = await LiveStock.create({
        user: uid,
        species,
        begin,
        end,
        weight,
        expense,
      });
      await live.save();
      return res.status(200).json({ msg: "Success", live });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  allLives: async (req, res) => {
    try {
      const uid = req.params.id;
      const live = await LiveStock.find({ user: uid });
      res.json(live);
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  editLiveStock: async (req, res) => {
    try {
      const cid = req.params.id;
      let live = LiveStock.findById(cid);
      live = await LiveStock.findByIdAndUpdate(cid, {
        $set: req.body,
      });
      await live.save();
      return res.status(200).json({ msg: "Success", live });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  getLiveStock: async (req, res) => {
    try {
      const live = await LiveStock.findById(req.params.id);
      res.json(live);
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  deleteLiveStock: async (req, res) => {
    try {
      let live = await LiveStock.findByIdAndDelete(req.params.id);
      res.status(204).send("Deleted");
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
};
