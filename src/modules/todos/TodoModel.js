import { Schema, model } from 'mongoose';

const schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    required: true,
  },
});

export default model('Todo', schema);
