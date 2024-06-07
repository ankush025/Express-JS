// const products = require('../Public/product.json');
const ProductService = require('../services/product.service')
const productService = new ProductService();


exports.createProduct = async (req,res) => {
    let product = await productService.addProduct(req.body)
    res.status(201).json({product,message: "New Product is Added...!!!"});
};


exports.getAllProduct = async (req,res) => {
    const products = await productService.getAllProduct({isDelete: false});
    res.status(200).json(products);
};


exports.getProduct = async (req,res)=>{
    const id = req.query.brand;
    // const item = await ProductModel.findOne({brand: id});
    const item = await productService.getProduct({brand: id});
    if(!item){
        return res.json({message: 'Product is Not Found...!!!'});
    }
    res.status(200).json(item);
 };


 exports.updateProduct = async (req,res) => {
    const id = req.params.id;
    let product =await productModel.findById(id);
    // console.log(product);
    if(!product){
        return res.json({meassage : 'Product is Not Found...!!!'});
    }
    // product = await ProductModel.findOneAndUpdate({_id:id},{$set : {...req.body}},{new:true});
    product = await productService.updateProduct(id,{...req.body});
    console.log(product);
    res.status(200).json({product, message : "Product is Updated..."});
 };


 exports.deleteProduct = async (req,res) => {
    const id = req.params.id;
    let product = await ProductModel.findById(id);
    // console.log(product);
    if(!product){
        return res.json({message: "Product is Not Found...!!!"});
    }
    // product = await ProductModel.findOneAndDelete({_id:id});
    product = await productService.updateProduct(id,{isDelete: true});
    console.log(product);
    res.status(200).json({message : "Product is Deleted...."});
 }









// CRUD



// // Create => POST Method
// exports.createProduct = (req , res) => {
//     // console.log(req.body);
//     products.push(req.body);
//     res.status(201).json({message: 'New Product is Added...!!!'});
// };


// // READ => GET Method (ALL Products)
// exports.getAllProduct = (req,res) => {
//     res.status(200).json(products);
// };


// // READ => GET Method (Single)
// exports.getProduct = (req,res)=>{
//     const id = +req.params.id;
//     // console.log(typeof(id));
//     const item = products.find((e)=> e.id === id)
//     res.status(200).json(item);
// };


// // Replace => PUT Method
// exports.replaceProduct = (req,res)=>{
//     const id = +req.params.id;
//     // console.log(typeof(id));
//     const itemindex = products.findIndex((e)=> e.id === id)
//     // const product = products[itemindex];

//     products.splice(itemindex , 1 , {...req.body});
//     res.status(200).json({message : 'Product is Replaced...'})
// };


// // Update => PATCH Method
// exports.updateProduct = (req,res)=>{
//     const id = +req.params.id;
//     // console.log(typeof(id));
//     const itemIndex = products.findIndex((e)=> e.id === id)
//     const product = products[itemIndex];

//     products.splice(itemIndex , 1 , {...product, ...req.body});
//     res.status(200).json({message : 'Product is Updated...'})
// };


// // Delete => DELETE Method
// exports.deleteProduct = (req,res)=>{
//     const id = +req.params.id;
//     // console.log(typeof(id));
//     const itemindex = products.findIndex((e)=> e.id === id)
//     // const product = products[itemindex];

//     products.splice(itemindex , 1);
//     res.status(200).json({message : 'Product is Deleted...'})
// }