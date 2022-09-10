let equipmentModel = require('../models/equipmentschema')



const equipmentAdd = async (req, res) => {
    let equipmentCreate = new equipmentModel({
        name: req.body.name,
        image: req.body.image,
        price: req.body.price,
        date: Date(),
        condition: req.body.advance,
        gymId: req.body.gymId,
    })
    equipmentCreate.save()
        .then((responce) => {
            res.status(200).send({ result: responce, message: "Added Successfully" })
        }).catch((err) => {
            res.status(400).send({ result: err.message, message: "Added Failed" })
        })
}

const equipmentGet = async (req, res) => {
    var AllTotelPrice = 0;
    let index
    var myquery = { gymId: req.param("gymId") };
    var result = await equipmentModel.find(myquery)
    if (result) {
        for (index = 0; index < result.length; index++) {
            AllTotelPrice= AllTotelPrice + parseInt(result[index].price);
            console.log(AllTotelPrice); 
        }
        res.status(200).send({ message: 'All Data Fetched Successfully', AllTotelPrice: AllTotelPrice, Size: result.length, data: result })
    } else {
        res.status(400).send({ message: 'Fetched Failed', error: err })
    }
}

const updateOne = async (req, res) => {
    // var checkUpdate = await equipmentModel.deleteOne({email:req.body.email})
    var myquery = { _id: req.body._id };
    var newvalues = {
        $set:
        {
            name: req.body.name,
            image: req.body.image,
            price: req.body.price,
            condition: req.body.advance,
            gymId: req.body.gymId,
        }
    };
    var checkUpdate = await equipmentModel.updateOne(myquery, newvalues)
    if (checkUpdate.matchedCount) {
        res.status(200).send({ message: 'Update Successfully' });
    } else {
        res.status(400).send({ message: 'Updated failed' });
    }
}

const delequipment = async (req, res) => {
    // var checkequipment = await equipmentModel.deleteOne({email:req.body.email})
    var checkequipment = await equipmentModel.deleteOne({ _id: req.param("_id") })
    // var equipment = await equipmentModel.findOne({email:req.body.email})
    if (checkequipment.deletedCount == 1) {
        res.status(200).send({ message: 'Deleted Successfully' });
    } else {
        res.status(400).send({ message: 'Equipment not found' });
    }
}

module.exports = { equipmentAdd, equipmentGet, updateOne, delequipment }