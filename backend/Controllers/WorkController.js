const Work = require("../Models/Work");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

module.exports = {
  addWork: async (req, res) => {
    try {
      const { uid, jobTitle, rate, startDate, endDate, benefits } = req.body;

      const work = await Work.create({
        user: uid,
        jobTitle, 
        rate, 
        startDate, 
        endDate, 
        benefits,
      });
      await work.save();
      return res.status(200).json({ msg: "Success", work });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  allWork: async (req, res) => {
    try {
      const uid = req.params.id;
      const works = await Work.find({ user: uid });
      res.json(works);
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  editWork: async (req, res) => {
    try {
      const cid = req.params.id;
      let work = Work.findById(cid);
      work = await Work.findByIdAndUpdate(cid, {
        $set: req.body,
      });
      await work.save();
      return res.status(200).json({ msg: "Success", work });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  getWork: async (req, res) => {
    try {
      const work = await Work.findById(req.params.id);
      res.json(work);
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  deleteWork: async (req, res) => {
    try {
      let work = await Work.findByIdAndDelete(req.params.id);
      res.status(204).send("Deleted");
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
};
