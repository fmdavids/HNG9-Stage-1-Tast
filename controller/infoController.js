const asyncHandler = require("express-async-handler")


//@desc get info
//@route Get /api/info
//@access Public
const getInfo = asyncHandler( async (req, res) => {
    res.status(200).json( { "slackUsername": "fmdavids", "backend": true, "age": 41, "bio": "A Node JS Developer with a passion for writing clean code and building scalable application that are secure, meet requirements and meet the need" } )
    })

const operations = async(req,res)=>{
    const x = req.body.x
    const y = req.body.y
    const operation_type =  req.body.operation_type
    const  operation_types = ["addition","subtraction","multiplication"]
    if(!operation_types.includes(operation_type)) return res.status(400).json({success:false, msg:"invalid operation type"})
    let result;
    if(operation_type === "addition"){
        result = x + y
    }else if(operation_type === "subtraction"){
        result = x-y
    }else if(operation_type === "multiplication"){
        result = x*y
    }

    await res.status(201).json({slackUsername: "oademiju", operation_type, result})

    
}


    module.exports = { getInfo, operations }