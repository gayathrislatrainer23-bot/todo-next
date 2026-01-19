import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  title: String,
  completed: { type: Boolean, default: false },
  userId: String,
});

export default mongoose.models.Todo || mongoose.model("Todo", TodoSchema);
