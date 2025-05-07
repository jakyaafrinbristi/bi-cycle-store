import NewsletterModel from "./newsletter.model";


const subscribe = async (email: string) => {
  const existing = await NewsletterModel.findOne({ email });
  if (existing) {
    throw new Error('You are already subscribed to the newsletter.');
  }
  const result = await  NewsletterModel.create({ email });
  return result;
};

const getAllSubscribers = async () => {
  const result = await  NewsletterModel.find().sort({ subscribedAt: -1 });
  return result;
};

export const NewsletterService = {
  subscribe,
  getAllSubscribers,
};
