import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
  cryptoName: String,
  ticker: String,
  contract: String,
  website: String,
  concept: String,
  advantage: String,
  opinion: String,
  exchange: String,
  risk: String,
  name: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likes: { type: [String], default: [] },
  comments: { type: [String], default: [] },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});
export default mongoose.model("Project", projectSchema);
