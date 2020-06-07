var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const requiredNumber= {
    type: Number,
    requires: true,
};

const defaultDate ={
    type: Date,
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

 created_at: defaultDate,
 updated_at: defaultDate,

});