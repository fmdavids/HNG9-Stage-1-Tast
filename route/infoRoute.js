const express = require("express")
const router = express.Router()

const { getInfo, operations } = require("../controller/infoController")

router.route(`/info`).get(getInfo)
router.post(`/operations`, operations )


module.exports = router