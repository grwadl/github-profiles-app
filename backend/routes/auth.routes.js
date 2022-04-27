const { Router } = require('express');
const router = Router();
const User = require('../models/Users.js');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
router.post('/registration', [
    check('email', 'Unvalid email').isEmail(),
    check('password', 'Unvalid password').isLength({ min: 6 })
], async (req, res) => {
    try {
        const { email, password } = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Unvalid data'
            })
        }
        const isUsed = await User.findOne({ email: email });
        if (isUsed) {
            return res.status(300).json({ message: 'This email have been already registrated' });
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = new User({
            email, password: hashedPassword
        });
        await user.save();
        return res.status(200).json({ message: 'User succesfully added' });
    }
    catch (e) {
        console.log(e);
    }
})
router.post('/login', [
    check('email', 'Unvalid email').isEmail(),
    check('password', 'Unvalid password').exists()
], async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(email);
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Unvalid data'
            })
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'such email does not exist' });
        }
        const isMatch = bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'wrong password' });
        }
        const jwtSecret = 'sdfgsdg66245HHjsdlLLww80908923JKdaqcaxdgsdfg45745sfgdjttyk54';
        const token = jwt.sign(
            { userId: user.id },
            jwtSecret,
            { expiresIn: '1h' }
        )
        res.json({ token, userId: user.id });
    }
    catch (e) {
        console.log(e);
    }
})
module.exports = router;