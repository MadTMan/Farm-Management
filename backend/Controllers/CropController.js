const Crop = require("../Models/Crop");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

module.exports = {
  addCrop: async (req, res) => {
    try {
      const { uid, fieldName, fieldArea, yields, cropName, cropDuration } = req.body;

      const crop = await Crop.create({
        user: uid,
        fieldName,
        fieldArea,
        yields,
        cropName,
        cropDuration,
      });
      await crop.save();
      return res.status(200).json({ msg: "Success", crop });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  allCrops: async (req, res) => {
    try {
      const uid = req.params.id;
      const crops = await Crop.find({ user: uid });
      res.json(crops);
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  editCrop: async (req, res) => {
    try {
      const cid = req.params.id;
      let crop = Crop.findById(cid);
      crop = await Crop.findByIdAndUpdate(cid, {
        $set: req.body,
      });
      await crop.save();
      return res.status(200).json({ msg: "Success", crop });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  getCrop: async (req, res) => {
    try {
      const crop = await Crop.findById(req.params.id);
      res.json(crop);
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  deleteCrop: async (req, res) => {
    try {
      let crop = await Crop.findByIdAndDelete(req.params.id);
      res.status(204).send("Deleted");
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
};
