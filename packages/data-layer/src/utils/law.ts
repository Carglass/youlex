import { Document, Schema, Model, model } from "mongoose";

export interface ILawModel extends Document {
  title?: string;
  author?: string;
}

// Using the Schema constructor, create a new ChakibooSchema object
export const LawSchema = new Schema({
  // `title` is of type String
  title: {
    type: String
  },
  // `author` is of type String
  // TODO should become a user in the future
  author: {
    type: String
  }
});

// This creates our model from the above schema, using mongoose's model method
export const Law: Model<ILawModel> = model<ILawModel>("Law", LawSchema);
