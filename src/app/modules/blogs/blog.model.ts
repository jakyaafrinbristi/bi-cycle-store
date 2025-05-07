import { Schema, model } from 'mongoose';
import { IBlog } from './blog.interface';


const blogSchema = new Schema<IBlog>({
  title: { type: String, required: true },
  excerpt: { type: String, required: true },
  image: { type: String, required: true },
  date: { type: String, required: true },
  category: { type: String, required: true },
  comments: { type: Number, default: 0 },
  author: { type: String, required: true },
  authorImage: { type: String, required: true },
});

export const Blog = model<IBlog>('Blog', blogSchema);
