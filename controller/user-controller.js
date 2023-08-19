const { User, Thought} = require ("../models");

const Usercontroller = { 
    async getUser(req, res) {
        try {
            const dbuserData = await User.find().sort({ createdAt: -1});
            if (!dbuserData) {
                return res.status(404).json({ message: "no user with this id" });
              }
              res.json(dbuserData);
            } catch (err) {
              console.log(err);
              res.status(500).json(err);
            }
          },

          async getSingleUser(req, res) {
            try {
              const dbuserData = await User.findOne({ _id: req.prams.userId });
              if (!dbuserData) {
                return res.status(404).json({ message: "no User with this id" });
              }
              res.json(dbuserData);
            } catch (err) {
              console.log(err);
              res.status(500).json(err);
            }
          },

          async deleteUser(req, res) {
            try {
              const dbuserData = await User.deleteOne({_id: req.params.userId});
              if (!dbuserData) {
                return res.status(404).json({ message: "no user with this id" });
              }
              res.json(dbuserData);
            } catch (err) {
              console.log(err);
              res.status(500).json(err);
            }
          },

          async updateUser(req, res) {
            try {
              const dbuserData = await User.findOneAndUpdate({_id: req.params.userId},{ $set: req.body,},{runValidators: true, new: true,})
              if (!dbuserData) {
                return res.status(404).json({ message: "no user with this id" });
              }
              res.json(dbuserData);
            } catch (err) {
              console.log(err);
              res.status(500).json(err);
            }
          },
          async createUser(req, res) {
            try {
              const dbuserData = await User.create(req.body)
              res.json(dbuserData);
            } catch (err) {
              console.log(err);
              res.status(500).json(err);
            }
          },

          async addFriend(req, res) {
            try {
              const dbfriendsData = await User.findOneAndUpdate({friends: req.params.friendsId});
              if (!dbfriendsData) {
                return res.status(404).json({ message: "no user with this id" });
              }
              res.json(dbfriendsData);
            } catch (err) {
              console.log(err);
              res.status(500).json(err);
            }
          },

          async deleteFriend(req, res) {
            try {
              const dbfriendsData = await User.findOneAndDelete({friends: req.params.friendsId});
              if (!dbfriendsData) {
                return res.status(404).json({ message: "no user with this id" });
              }
              res.json(dbfriendsData);
            } catch (err) {
              console.log(err);
              res.status(500).json(err);
            }
          },
        }
    
        module.exports = Usercontroller;
