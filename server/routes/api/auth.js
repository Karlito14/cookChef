const router = require('express').Router();
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const { key, keyPub } = require('../../keys');
const UserModel = require('../../database/models/user.model');

router.post('/', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email }).exec();
    if (user) {
      if (bcrypt.compareSync(password, user.password)) {
        const token = jsonwebtoken.sign({}, key, {
          subject: user._id.toString(),
          expiresIn: 3600 * 24 * 30 * 6,
          algorithm: 'RS256',
        });
        res.cookie('token', token, { httpOnly: true });
        res.json(user);
      } else {
        res.status(400).json('Mauvais email / password');
      }
    } else {
      res.status(400).json('Mauvais email / password');
    }
  } catch (error) {
    res.status(400).json('Mauvais email / password');
  }
});

router.get('/current', async (req, res) => {
  const { token } = req.cookies;
  if (token) {
    try {
      const decodedToken = jsonwebtoken.verify(token, keyPub);
      const currentUser = await UserModel.findById(decodedToken.sub).exec();
      if (currentUser) {
        return res.json(currentUser);
      } else {
        return res.json(null);
      }
    } catch (error) {
      return res.json(null);
    }
  } else {
    return res.json(null);
  }
});

router.delete('/', (req, res) => {
  res.clearCookie('token');
  res.end();
});

module.exports = router;
