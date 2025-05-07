
import mongoose, { Schema } from "mongoose";
import { INewsletter } from "./newsletter.interface";


const newsletterSchema = new Schema<INewsletter>({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  subscribedAt: {
    type: Date,
    default: Date.now,
  },
},
{
    timestamps: true,
  }

);

const NewsletterModel = mongoose.model<INewsletter>("Newsletter", newsletterSchema);

export default NewsletterModel;
