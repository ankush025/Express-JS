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
    category : String
});




module.exports = mongoose.model('products',productSchema);