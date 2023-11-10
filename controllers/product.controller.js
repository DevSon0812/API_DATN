import Product from "../models/product.model.js";

// Create a new product
export const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    const savedProduct = await product.save();
    return res.status(201).json({ code: 200, data: savedProduct });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// Get a list of all products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).json({ code: 200, data: products });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// Get a single product by ID
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    return res.status(200).json({ code: 200, data: product });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// Update a product by ID
export const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }
    return res.status(200).json({ code: 200, data: updatedProduct });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// Delete a product by ID
export const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndRemove(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }
    return res
      .status(204)
      .json({ code: 200, data: "Delete Product successfully" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
