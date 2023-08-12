 const { Schema, Model } = require("mongoose");

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'must match an email address!'],
        },
        thoughts: [
            {
                type:Schema.Types.ObjectId,
                ref: 'Thought',
            },
        ],
        friends: [
            {
                type:Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    },

);

userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});
const User = Model('User', userSchema);

model.exports = User;