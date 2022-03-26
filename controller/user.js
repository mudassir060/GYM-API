let userModel = require('../models/userschema')



const userAdd = async(req, res) =>{
    let userCreate = new userModel({
        name: req.body.name,
        email: req.body.email,
        fee: req.body.fee,
        advance: req.body.advance,
        mobileNo: req.body.mobileNo,
        status: req.body.status,
    })
    userCreate.save()
        .then((responce) => {
            res.status(200).send({result:responce,message:"Added Successfully"})
        }).catch((err) => {
            res.status(400).send({result:err.message,message:"Added Faild"})
        })
}

const userGet = async(req,res)=>{
   var result = await userModel.find({}).then((responce)=>{
       res.status(200).send({message:'All Data Fetched Successfuly',Size:responce.length,data:responce})
   }).catch((err)=>{
    res.status(400).send({message:'All Data Fetched Successfuly',data:err})
   })
}

const updateOne = async(req, res)=>{
        // var checkUser = await userModel.deleteOne({email:req.body.email})
        var myquery = {_id:req.body._id};
        var newvalues ={ $set: {email: req.body.email} };
        console.log(myquery)
        var checkUser = await userModel.updateOne(myquery, newvalues)
        if (checkUser.upsertedId) {
            res.status(200).send({message:'Deleted Successfully'});
        } else {
            res.status(200).send({message:'Not Found'});
        }
}

const delUser = async(req, res) => {
    // var checkUser = await userModel.deleteOne({email:req.body.email})
    var checkUser = await userModel.deleteOne({ _id:req.param("_id")})
    // var User = await userModel.findOne({email:req.body.email})
    // console.log(User)
    console.log(req.param("_id"))
    if (checkUser.deletedCount==1) {
        res.status(200).send({message:'Deleted Successfully'});
    } else {
        res.status(200).send({message:'Not Found'});
    }
}

module.exports={userAdd, userGet,updateOne, delUser}