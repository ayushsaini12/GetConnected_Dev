const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

//@route    GET api/user
//@desc     register User
//@access   Public
router.post(
  "/",
  [
    check("name", "name is required").not().isEmpty(),
    check("email", "Pls Enter A valid Email").isEmail(),
    check(
      "password",
      "Please Enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  (req, res) => {
    // console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send("User router");
  }
);

module.exports = router;
