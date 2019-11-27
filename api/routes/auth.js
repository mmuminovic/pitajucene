const express = require('express');

const router = express.Router();

router.post(
    '/login',
    body('email')
    .isEmail()
    .withMessage('Please, enter the valid email.')
    .normalizeEmail(),
    body('password')
    .isLength({min: 5})
    .withMessage('Password has more than 5 characters.')
    .isAlphanumeric()
    .trim(),
    authController.postLogin
  );
  
  router.put(
    '/signup',
    [
      check('email')
        .isEmail()
        .withMessage('Please enter a valid email.')
        .custom((value, { req }) => {
          // if (value === 'test@test.com') {
          //   throw new Error('This email address if forbidden.');
          // }
          // return true;
          return User.findOne({ email: value }).then(userDoc => {
            if (userDoc) {
              return Promise.reject(
                'E-Mail exists already, please pick a different one.'
              );
            }
          });
        })
        .normalizeEmail(),
      body(
        'password',
        'Please enter a password with only numbers and text and at least 5 characters.'
      ).trim()
        .isLength({ min: 5 })
        .isAlphanumeric(),
      body('confirmPassword').custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error('Passwords have to match!');
        }
        return true;
      }).trim()
    ],
    authController.postSignup
  );

module.exports = router;