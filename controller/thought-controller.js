const { User, Thought } = require("../models");

const thoughtcontroller = {
  async getthoughts(req, res) {
    try {
      const dbthoughtData = await Thought.find().sort({ createdAt: -1 });
      res.json(dbthoughtData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  
  async getsinglethought(req, res) {
    try {
      const dbthoughtData = await Thought.findOne({ _id: req.params.thoughtId });
      if (!dbthoughtData) {
        return res.status(404).json({ message: "no thought with this id" });
      }
      res.json(dbthoughtData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  async createthought(req, res) {
    try {
      const dbthoughtData = await Thought.create(req.body);
      res.json(dbthoughtData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  async deletethought(req, res) {
    try {
      const dbthoughtData = await Thought.deleteOne({_id: req.params.thoughtId});
      if (!dbthoughtData) {
        return res.status(404).json({ message: "no thought with this id" });
      }
      res.json(dbthoughtData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  async updatethought(req, res) {
    try {
      const dbthoughtData = await Thought.findOneAndUpdate({_id: req.params.thoughtId},{ $set: req.body,},{runValidators: true, new: true,});
      if (!dbthoughtData) {
        return res.status(404).json({ message: "no thought with this id" });
      }
      res.json(dbthoughtData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  async createReaction(req, res) {
    try {
      const dbthoughtData = await Thought.findOneAndUpdate({_id: req.params.thoughtId});
      if (!dbthoughtData) {
        return res.status(404).json({ message: "no thought with this id" });
      }
      res.json(dbthoughtData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
    },

    async deleteReaction(req, res) {
      try {
        const dbthoughtData = await Thought.findOneAndUpdate({_id: req.params.thoughtId});
        if (!dbthoughtData) {
          return res.status(404).json({ message: "no thought with this id" });
        }
        res.json(dbthoughtData);
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
      }
  };

module.exports = thoughtcontroller;
