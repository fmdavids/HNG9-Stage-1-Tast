const asyncHandler = require("express-async-handler")


//@desc get info
//@route Get /api/info
//@access Public
const getInfo = asyncHandler( async (req, res) => {
    res.status(200).json( { "slackUsername": "fmdavids", "backend": true, "age": 41, "bio": "A Node JS Developer with a passion for writing clean code and building scalable application that are secure, meet requirements and meet the need" } )
    })




//@desc POST operations
//@route Get /api/operations
//@access Public
const operations = asyncHandler(async(req,res)=>{
    let x = req.body.x
    let y = req.body.y
    let operation_type =  req.body.operation_type

   

    let numb = operation_type.match(/\d/g);
    
    if(numb && numb.length == 2){
        y=Number(numb[0])
        x=Number(numb[1])
    }
     
    if(numb && numb.length > 2 ){
        console.log(numb)
       const newy = numb.slice(0,2)
       console.log(newy)
       const newx = numb.slice(2,4)
       console.log(newx)

       y = Number(newy.join(""))
       console.log(y)
       x = Number(newx.join(""))
       console.log(x)
  }
    
    
  const  operation_types = ["addition","subtraction","multiplication"]
    
  if(operation_type.includes("add")){
      operation_type = "addition"
  }
  if(operation_type.includes("sum")){
    operation_type = "addition"
}
if(operation_type.includes("plus")){
    operation_type = "addition"
}
  if(operation_type.includes("subtract")){
    operation_type = "subtraction"
  }
  if(operation_type.includes("takeaway")){
    operation_type = "subtraction"
  }
  if(operation_type.includes("minus")){
    operation_type = "subtraction"}
  if(operation_type.includes("multiply")){
    operation_type = "multiplication"
  }if(operation_type.includes("product")){
    operation_type = "multiplication"}
    if(operation_type.includes("times")){
        operation_type = "multiplication"}
    
    
    if(!operation_types.includes(operation_type)) return res.status(400).json({success:false,msg:"invalid operation type"})
    let result;
    if(operation_type === "addition"){
        result = x + y
    }else if(operation_type === "subtraction"){
        result = x-y
    }else if(operation_type === "multiplication"){
        result = x*y
    }

    await res.status(200).json({slackUsername: "oademiju", operation_type:operation_type, result:result})

    
})

    module.exports = { getInfo, operations }