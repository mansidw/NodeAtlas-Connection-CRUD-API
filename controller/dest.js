const Dest = require('../models/dest')
const mongoose = require('mongoose')

function create(req,res,next){
   let destName = req.body.destName;
   let fareFlight1 = req.body.fareFlight1;
   let fareFlight2 = req.body.fareFlight2;
   let dest = new Dest({
        destName,
        fareFlight1,
        fareFlight2
   })
   dest.save().then((data)=>{
       res.send(data)
   })
}

function view(req,res,next){
    Dest.find({}).then((data)=>{
        res.send(data)
    })
}

function update(req,res,next){
    Dest.findByIdAndUpdate(req.params.id,req.body, (err,dest)=>{
        if (err) {
            return res.status(500).send({error: "Problem with Updating the Destination recored "})
        };
        res.send({success: "Updation successfull"});
    })
}

function remove(req,res,next){
    Dest.findByIdAndDelete(req.params.id, (err,dest)=>{
        if(err){
            return res.status(500).send({error: "Problem with Deleting the Destination recored "})
        }
        res.send({success: 'Destination deleted successfully'})
    })
}

module.exports.create = create
module.exports.view = view
module.exports.update = update
module.exports.remove = remove