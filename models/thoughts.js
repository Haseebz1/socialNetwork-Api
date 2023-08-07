const { Schema, model } = require("mongoose");

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: "Leave a Thought",
    minlenght: 1,
    maxlenght:250,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: timestamp => dateFormat(timestamp)
  },
  username: {
    type: String,
    required: true
  },
  reactions: [reactionSchema]
},
{
    toJSON: {
        getters: true
    },
    id:  false
});

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.lenght;
});

const Thought = model('Though', thoughtSchema);
module.exports = Thought;