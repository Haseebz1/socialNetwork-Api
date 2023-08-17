const { User, thought} = require ("../models");

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
              const dbuserData = await User.findOne({ _id: req.pram.userId });
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
              const dbuserData = await User.deleteOne({_id: req.param.User});
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
              const dbuserData = await User.findOneAndUpdate({_id: req.param.User});
              if (!dbuserData) {
                return res.status(404).json({ message: "no user with this id" });
              }
              res.json(dbuserData);
            } catch (err) {
              console.log(err);
              res.status(500).json(err);
            }
          },

          async addfriend(req, res) {
            try {
              const dbfriendsData = await User.findOneAndUpdate({friends: req.param.friendsId});
              if (!dbfriendsData) {
                return res.status(404).json({ message: "no user with this id" });
              }
              res.json(dbfriendsData);
            } catch (err) {
              console.log(err);
              res.status(500).json(err);
            }
          },
          
          async deletefriend(req, res) {
            try {
              const dbfriendsData = await User.findOneAndDelete({friends: req.param.friendsId});
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
