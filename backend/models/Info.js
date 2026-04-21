import mongoose from "mongoose";

const infoSchema = new mongoose.Schema(
  {
    query: { type: String, required: true },
    language: { type: String, required: true },
    response: { type: String, required: true },
  },
  { timestamps: true }
);

const Info = mongoose.model("Info", infoSchema);

export default Info;
