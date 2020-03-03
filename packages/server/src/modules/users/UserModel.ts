import mongoose, { Document, Schema } from "mongoose";

export type UserModel = Document & {
  username: string;
  email: string;
  password: string;
};

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      hidden: true
    },
    email: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model<UserModel>("User", UserSchema);
