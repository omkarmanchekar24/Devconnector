const express = require("express");
const router = express.Router();

//@route    api/users/test
//@desc     Tests users route
//@access   Public
router.get("/test", (req, res) => res.send({ msg: "Users works!" }));

module.exports = router;
