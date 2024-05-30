const mongoose = require("mongoose");



const productSchema = mongoose.Schema({
    title : String,
    description : { type : String },
    price : {
        type : Number
    },
    rating : Number,
    brand : {
        type: String,
        enum: ["Samsung", "Apple", "Vivo" , "Oppo", "MI"]
    },
    category : String,
    isDelete:{
        type: Boolean,
        default: false,
    }
},{
    versionKey: false
});




module.exports = mongoose.model('products',productSchema);