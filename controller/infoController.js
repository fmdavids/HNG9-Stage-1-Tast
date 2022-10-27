const asyncHandler = require("express-async-handler")


//@desc get info
//@route Get /api/info
//@access Public
const getInfo = asyncHandler( async (req, res) => {
    res.status(200).json( { "slackUsername": "fmdavids", "backend": true, "age": 41, "bio": "A Node JS Developer with a passion for writing clean code and building scalable application that are secure, meet requirements and meet the need" } )
    })

    module.exports = { getInfo }