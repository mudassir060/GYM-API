let equipmentModel = require('../models/equipmentschema')



const equipmentAdd = async(req, res) =>{
    let userCreate = new equipmentModel({
        equipmentName: req.body.task,
    })
    userCreate.save()
        .then((responce) => {
            res.status(200).send({result:responce,message:"Added Successfully"})
        }).catch((err) => {
            res.status(400).send({result:err.message,message:"Added Faild"})
        })
}

const equipmentGet = async(req,res)=>{
   var result = await equipmentModel.find({})
   res.status(200).send({message:'All Data Fetched Successfuly',data:result.taskName})
}

module.exports={equipmentAdd,equipmentGet}