let feeModel = require('../models/feeschema')



const feeAdd = async (req, res) => {
    const d = new Date();
    let feeCreate = new feeModel({
        year: d.getFullYear(),
        month: d.getMonth(),
        date: d.getDate(),
        fee: req.body.fee,
        discount: req.body.discount,
        Status: req.body.Status,
        userId: req.body.userId,
        gymId: req.body.gymId,
    })
    feeCreate.save()
        .then((responce) => {
            res.status(200).send({ result: responce, message: "Added Successfully" })
        }).catch((err) => {
            res.status(400).send({ result: err.message, message: "Added Failed" })
        })
}

const feeGetOneUser = async (req, res) => {
    var TotelReceiveFee = 0;
    var TotelPandingFee = 0;
    var TotelDiscount = 0;
    let index
    console.log()
    var myquery = {
        year: req.body.year,
        month: req.body.month,
        userId: req.body.userId,
        gymId: req.body.gymId,
    };
    var result = await feeModel.find(myquery)
    if (result) {
        for (index = 0; index < result.length; index++) {
            console.log(result[index].Status)
            if (result[index].Status == "true") {
                TotelReceiveFee = TotelReceiveFee + parseInt(result[index].fee);
            } else {
                TotelPandingFee = TotelPandingFee + parseInt(result[index].fee);
            }
            TotelDiscount = TotelDiscount + parseInt(result[index].discount);
        }
        res.status(200).send({ message: 'All Data Fetched Successfully', TotelReceiveFee: TotelReceiveFee, TotelPandingFee: TotelPandingFee, TotelDiscount: TotelDiscount, Size: result.length, data: result })
    } else {
        res.status(400).send({ message: 'Fetched Failed', error: err })
    }
}
const feeGetAllUser = async (req, res) => {
    var TotelReceiveFee = 0;
    var TotelPandingFee = 0;
    var TotelDiscount = 0;
    let index
    var myquery = {
        year: req.body.year,
        month: req.body.month,
        gymId: req.body.gymId,
    };
    var result = await feeModel.find(myquery)
    if (result) {
        for (index = 0; index < result.length; index++) {
            console.log(result[index].Status)
            if (result[index].Status == "true") {
                TotelReceiveFee = TotelReceiveFee + parseInt(result[index].fee);
            } else {
                TotelPandingFee = TotelPandingFee + parseInt(result[index].fee);
            }
            TotelDiscount = TotelDiscount + parseInt(result[index].discount);
        }
        res.status(200).send({ message: 'All Data Fetched Successfully', TotelReceiveFee: TotelReceiveFee, TotelPandingFee: TotelPandingFee, TotelDiscount: TotelDiscount, Size: result.length, data: result })
    } else {
        res.status(400).send({ message: 'Fetched Failed', error: err })
    }
}

const updateOne = async (req, res) => {
    // var checkUpdate = await feeModel.deleteOne({email:req.body.email})
    var myquery = { _id: req.body._id };
    var newvalues = {
        $set:
        {
            date: Date(),
            fee: req.body.fee,
            discount: req.body.discount,
            Status: req.body.Status,
        }
    };
    var checkUpdate = await feeModel.updateOne(myquery, newvalues)
    if (checkUpdate.matchedCount) {
        res.status(200).send({ message: 'Update Successfully' });
    } else {
        res.status(400).send({ message: 'Updated failed' });
    }
}

const delfee = async (req, res) => {
    // var checkfee = await feeModel.deleteOne({email:req.body.email})
    var checkfee = await feeModel.deleteOne({ _id: req.param("_id") })
    // var fee = await feeModel.findOne({email:req.body.email})
    if (checkfee.deletedCount == 1) {
        res.status(200).send({ message: 'Deleted Successfully' });
    } else {
        res.status(400).send({ message: 'fee not found' });
    }
}

module.exports = { feeAdd, feeGetOneUser, feeGetAllUser, updateOne, delfee }