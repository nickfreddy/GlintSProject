const jwt = require('jsonwebtoken'); // import jwt

class Auth {
  getToken(req, res, next) {
    try {
      const data = {
        user: req.user._id,
      };

      const token = jwt.sign(data, 'davidkamali');

      res.status(200).json({ token });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new Auth();
