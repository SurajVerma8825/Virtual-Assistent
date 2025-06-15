const logoutUser = async (req, res) => {
  try {
    res.clearCookie('token');
    return res
      .status(200)
      .json({ message: 'Logged out successfully', success: true });
  } catch (error) {
    console.log(`Logout Error ${error}`);
    return res
      .status(500)
      .json({ message: 'Internal server error', success: false });
  }
};

module.exports = logoutUser;
