/* Database Model*/
const mongoose = require('mongoose');
const { Schema } = mongoose;

/* Database Schema */
const spaceSchema = new Schema({
    property:{type:String, required:true},
    type:{type:String, required:true},
    reference: {type:Number, required:true},
    areamt2:{type:Number, required:true},
    pricemt2:{type:Number, required:true},
    totalprice:{type:Number, required:true}
});

module.exports = mongoose.model('space',spaceSchema);