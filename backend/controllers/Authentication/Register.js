const User = require('../../models/user.model');
const bcrypt = require('bcryptjs');

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: 'All fiels are required', success: false });
    }

    const user = await User.findOne({ email });

    if (user) {
      return res
        .status(400)
        .json({ message: 'User already registered', success: false });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    await User.create({
      name,
      email,
      password: hashPassword,
    });

    return res
      .status(201)
      .json({ message: 'User registered successfully', success: true });
  } catch (error) {
    console.log(`Signup Error ${error}`);
    return res
      .status(500)
      .json({ message: 'Internal server error', success: false });
  }
};

module.exports = registerUser;
