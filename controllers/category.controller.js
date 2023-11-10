import Category from "../models/category.model.js";

export const createCategory = async (req, res) => {
  try {
    const { name, slug, images } = req.body;
    const category = new Category({ name, slug, images });

    const result = await category.save();

    res.status(201).json({ status: 200, data: result });
  } catch (error) {
    res.status(500).json({ error: "Failed to create category" });
  }
};

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();

    res.status(201).json({ status: 200, data: categories });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch categories" });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const updates = req.body;
    const options = { new: true };

    const updatedCategory = await Category.findByIdAndUpdate(
      categoryId,
      updates,
      options
    );

    if (!updatedCategory) {
      return res.status(404).json({ error: "Category not found" });
    }

    res.status(200).json({ message: "Category Update successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to update category" });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const deletedCategory = await Category.findByIdAndDelete(categoryId);

    if (!deletedCategory) {
      return res.status(404).json({ error: "Category not found" });
    }
    res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete category" });
  }
};
