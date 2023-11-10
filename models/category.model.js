import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: { type: String, require: true },
  images: { type: String, require: true },
  slug: { type: String, require: true },
});

export default mongoose.model("Category", categorySchema);
