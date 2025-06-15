const User = require('../../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'All field are required' });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(401)
        .json({ message: 'User not found', success: false });
    }

    const isMatched = await bcrypt.compare(password, user.password);

    if (!isMatched) {
      return res
        .status(401)
        .json({ message: 'Invalid Password', success: false });
    }

    const tokenData = {
      userId: user._id,
    };

    const token = jwt.sign(tokenData, process.env.JWT_SECRET_KEY, {
      expiresIn: '1d',
    });

    return res
      .status(200)
      .cookie('token', token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      })
      .json({
        message: `Welcome back ${user.name}`,
        success: true,
        user,
        // token: token,
      });
  } catch (error) {
    console.log(`Login Error ${error}`);
    return res.status(500).json({ message: 'Internal server', success: false });
  }
};

module.exports = loginUser;
