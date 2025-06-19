const User = require('../../models/user.model');

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('-password');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json({ success: true, user });
  } catch (error) {
    return res.status(400).json({ message: 'can not get !' });
  }
};

module.exports = getUser;
