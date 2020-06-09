const express = require("express");
const router = express.Router();

//@route    api/profiles/test
//@desc     Tests profile route
//@access   Public
router.get("/test", (req, res) => res.send({ msg: "Profile works!" }));

module.exports = router;
