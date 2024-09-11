import mongoose, { Schema, Document } from "mongoose";

// Define the interface for Stream document
interface IStream extends Document {
  type: string;
  url: string;
  extractedId: string;
  title: string;
  smallImg: string;
  bigImg: string;
}

// Create a Stream schema
const StreamSchema: Schema = new Schema<IStream>(
  {
    type: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    extractedId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    smallImg: {
      type: String,
      required: true,
    },
    bigImg: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields automatically
  }
);

// Create a Mongoose model for Stream
const Stream =
  mongoose.models.Stream || mongoose.model<IStream>("Stream", StreamSchema);

export { Stream };
export type { IStream };
