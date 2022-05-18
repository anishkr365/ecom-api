const Product = require('../models/product')
module.exports.read_all = async(req,res) => {
    try{
        const products = await Product.find();
        res.json(products);

    }catch (error){
        res.json({message:error});
    }
};

module.exports.read = async(req,res) => {
    try {
        const product = await Product.findById(req.params.productId);
        res.json(product);
      } catch (error) {
        res.json({ message: error });
      }
};

module.exports.create = async(req,res) => {
    // here validating that req has name and quatitiy
    if(req.body.name && req.body.quantity){
        // creatin the product
        Product.create(req.body)
        .then((product)=>{
            // responding with the created product data            
            return res.status(200).json({product:{
                name:product.name,
                quantity:product.quantity
            }});
        }).catch(err=>{
            return res.status(500).json({error:"internal server issue"});
        })

    }else{
        return res.status(404).json({error:"field data is not correct"});
    }

}


// Update product
module.exports.update = async (req, res) => {
    try {
        const product = {
            id:product.id,
            name:product.name,
            quantity:product.quantity
        };
    
        const updatedProduct = await Product.findByIdAndUpdate(
          { _id: req.params.productId },
          product
        );
        res.json(updatedProduct);
      } catch (error) {
        res.json({ message: error });
      }
};

// Delete product
module.exports.delete = async (req, res) => {
    try {
        const removeProduct = await Product.findByIdAndDelete(req.params.productId);
        res.json(removeProduct);
      } catch (error) {
        res.json({ message: error });
      }
};
