let userModel = require('../models/userschema')



const userAdd = async (req, res) => {
    let userCreate = new userModel({
        name: req.body.name,
        email: req.body.email,
        fee: req.body.fee,
        AdmassionDate: Date(),
        advance: req.body.advance,
        mobileNo: req.body.mobileNo,
        gymId: req.body.gymId,
    })
    userCreate.save()
        .then((responce) => {
            res.status(200).send({ result: responce, message: "Added Successfully" })
        }).catch((err) => {
            res.status(400).send({ result: err.message, message: "Added Failed" })
        })
}

const userGet = async (req, res) => {
    var TotelFee = 0;
    var TotelAdvance = 0;
    var index = 0;
    var result = await userModel.find({ gymId: req.body.gymId, }).then((responce) => {
        for (index = 0; index < responce.length; index++) {
            TotelFee = TotelFee + parseInt(responce[index].fee);
            TotelAdvance = TotelAdvance + parseInt(responce[index].advance);
        }
        res.status(200).send({ message: 'All Data Fetched Successfully', TotelFee: TotelFee, TotelAdvance: TotelAdvance, Size: responce.length, data: responce })
    }).catch((err) => {
        res.status(400).send({ message: 'Fetched Failed', error: err })
    })
}

const updateOne = async (req, res) => {
    // var checkUpdate = await userModel.deleteOne({email:req.body.email})
    var myquery = { _id: req.body._id };
    var newvalues = {
        $set:
        {
            name: req.body.name,
            email: req.body.email,
            fee: req.body.fee,
            advance: req.body.advance,
            mobileNo: req.body.mobileNo,
            status: req.body.status,
        }
    };
    var checkUpdate = await userModel.updateOne(myquery, newvalues)
    if (checkUpdate.matchedCount) {
        res.status(200).send({ message: 'Update Successfully' });
    } else {
        res.status(200).send({ message: 'Updated failed' });
    }
}

const delUser = async (req, res) => {
    // var checkUser = await userModel.deleteOne({email:req.body.email})
    var checkUser = await userModel.deleteOne({ _id: req.param("_id") })
    // var User = await userModel.findOne({email:req.body.email})
    if (checkUser.deletedCount == 1) {
        res.status(200).send({ message: 'Deleted Successfully' });
    } else {
        res.status(400).send({ message: 'Account not found' });
    }
}

module.exports = { userAdd, userGet, updateOne, delUser }


// const userAddFee = async (req, res) => {
//     var myquery = { _Id: req.body._Id };
//     var checkUser = await userModel.findOne(myquery)
//     var StatusArray = checkUser.status
//     // console.log(StatusArray)
//     StatusArray.push(req.body.status)
//     // console.log(StatusArray)
//     var newvalues = {
//         $set:
//         {
//             status: StatusArray,
//         }
//     };
//     console.log(newvalues)
//     var checkUpdate = await userModel.updateOne(myquery, newvalues)
//     if (checkUpdate.matchedCount) {
//         res.status(200).send({ message: 'Update Successfully', data:newvalues });
//     } else {
//         res.status(200).send({ message: 'Updated failed' });
//     }
// }


// const userGet = async (req, res) => {
//     var TotelReceivedFee = 0;
//     var TotelFalse = 0;
//     var TotelTrue = 0;
//     let index
//     var myquery = { gymId: req.param("gymId") };
//     var result = await userModel.find(myquery)
//     if (result) {
//         for (index = 0; index < result.length; index++) {
//             var status = result[index].status
//             ArrayOfStatus = Object.values(status);
//             console.log(ArrayOfStatus)
//             for (let index = 0; index < ArrayOfStatus.length; index++) {
//                 console.log("runing...",ArrayOfStatus[index]);
//                 if (ArrayOfStatus[index]== true) {
//                     TotelTrue++
//                 } else {
//                     TotelFalse++
//             }
//         }
//         console.log(TotelTrue)
//             var Perfee = parseInt(result[index].fee) * TotelTrue;
//             TotelTrue=0;
//             TotelFalse= 0;
//             console.log(Perfee)
//             TotelReceivedFee= TotelReceivedFee + Perfee;
//             console.log(TotelReceivedFee);
//         }
//         res.status(200).send({ message: 'All Data Fetched Successfully', TotelReceivedFee: TotelReceivedFee, Size: result.length, data: result })
//     } else {
//         res.status(400).send({ message: 'Fetched Failed', error: err })
//     }
// }
