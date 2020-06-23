const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
// @route POST api/users
// @desc Register user
// @access Public
router.post('/', [
    check('username', 'Username is required ')
    .not()
    .isEmpty(),
    check('password','Please enter a password with 6 or more characters')
    .isLength({ min: 6}),
    check('email', 'Please enter the valid email').isEmail(),
    check('firstname', 'Please enter the firstname').not().isEmpty(),
    check('lastname', 'Please enter the lastname').not().isEmpty(),
    check('gender', 'Please select the gender').not().isEmpty(),
    check('country', 'Please select the country').not().isEmpty()

],
async (req,res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    const { username, password, email, firstname, lastname, gender, country } = req.body;
    
    try{
      
        let user = await User.findOne({ username});

        if(user) {
           return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
        }

        user = new User({
            username,
            password,
            email,
            firstname,
            lastname,
            gender,
            country
        });



    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(password, salt);
            
    await user.save();

    const payload = {
        user: {
            id: user.id
        }
    }

    jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000},
        (err, token)=>{
            if(err) throw err;
            res.json({ token });
        });

    

    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
    
    

     
});

module.exports = router;