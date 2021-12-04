const express= require("express")
const mongoose = require("mongoose")
const router = express.Router();
router.use(express.json());

//create model
const productModel=require("./Models/productModel")
const companyModel=require("./Models/companyModel")
const sellerModel=require("./Models/sellerModel")
router.get("/",(req,res) => {

    res.json({data:["Product Details"]});

});

//add product
router.post("/addProduct",(req,res)=>{
    const newProduct= req.body;
   productModel.create(newProduct);
   return res.json({ data :"Data added successfully"});
});

//delete product
router.delete("/deleteProduct/:id",async(req,res)=>{
    const productId= req.params.id;
     const  deletedProduct =await productModel.findOneAndDelete({productId : productId});
     res.json({status:"Product Deleted Successfully",data:deletedProduct})
    });


// update product (add/remove category)
router.put("/updateProduct/:id",async(req,res)=>{
    const productId=req.params.id;
    const category=req.body.category;
    const updateProduct= await productModel.findOneAndUpdate(
        {productId:productId},
        {category:category},
        {new:true}
        );
    res.json({msg:"Product Updated Successfully",newData:updateProduct})

});

//fetch all products of a seller
router.get("/retrieve/pdroductOfSeller/:sid",async(req,res)=>{
    const sellerId=req.params.sid;
});
module.exports = router;