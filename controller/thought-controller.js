const { Thoughts, User, Thought } = require("../models");

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
};
