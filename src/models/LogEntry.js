var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const requiredNumber= {
    type: Number,
    requires: true,
};

const defaultRequiredDate ={
    type: Date,
    default: Date.now,
    required: true,

}

conts LogEntrySchema = new Schema({

 title: {
    type: String,
    required: true,
},
 description: String,
 comments: String,
 image: String,
 rating: {
     type: Number,
     min: 0,
     max: 10,
     default: 0
 },
 latitude: requiredNumber,
 longitude: requiredNumber,

 created_at: defaultRequiredDate,
 updated_at: defaultRequiredDate,

});