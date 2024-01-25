const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

module.exports = {
  create,
  login,
  checkToken
};

async function create(req, res) {
  try {
    const user = await User.create(req.body)
    const token = createJWT(user)
    res.json(token)
  } catch (err) {
    res.status(400).json(err)
    console.log(`An error occured: ${err}`)
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email })
    if (!user) throw new Error('User not found')
    const passwordMatch = await bcrypt.compare(req.body.password, user.password)
    if (!passwordMatch) throw new Error('Invalid credentials')
    const token = createJWT(user)
    res.json(token)
  } catch (err) {
    res.status(400).json(err)
    console.log(`An error occured: ${err}`)
  }
}

function checkToken(req, res) {
  console.log('req.user:', req.user);
  res.json(req.exp);
}

/*-- HELPER FN'S --*/
function createJWT(user) {
  return jwt.sign(
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  )
}