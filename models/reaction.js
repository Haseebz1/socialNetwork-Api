const { Schema, model } = require("mongoose");

const reactionSchema = new Schema({
  reactionBody: {
    type: String,
    required: true,
    maxlenght: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
  },
});


const Reaction = model("reaction", reactionSchema);
module.exports = Reaction;
