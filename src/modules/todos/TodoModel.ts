import mongoose, { Document, Schema } from 'mongoose';

export type TodoModel = Document & {
  title: String;
  content: String;
  done: Boolean;
  author: String;
};


const TodoSchema = new mongoose.Schema(
  {
    author: {
      type: String,
      required: true
    },
    title: {
      type: String,
      hidden: true
    },
    content: {
      type: String,
      required: true,
    },
    done: {
      type: Boolean,
      required: true,
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model<TodoModel>('Todo', TodoSchema);
