const User = require('../Models/User');

const createUser = (req, res) => {
    const user = new User(req.body);
    user.save()
        .then((result) => res.send(result))
        .catch((err) => console.log(err));
};
const allUser = (req, res) => {
    User.find()
        .sort({ createdAt: -1 }) // sort by time
        .then((result) => res.send(result))
        .catch((err) => console.log(err));
};
const singleUser = (req, res) => {
    const { id } = req.params;
    User.findById(id)
        .then((result) => res.send(result))
        .catch((err) => console.log(err));
};

module.exports = {
    createUser,
    allUser,
    singleUser
};
