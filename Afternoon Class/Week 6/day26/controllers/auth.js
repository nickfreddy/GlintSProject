const jwt = require('jsonwebtoken');

class User {
  async getToken(req, res, next) {
    try {
      const data = {
        user: req.user._id,
      };

      const token = jwt.sign(data, 'freddywijaya');

      res.status(200).json({ token });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new User();
