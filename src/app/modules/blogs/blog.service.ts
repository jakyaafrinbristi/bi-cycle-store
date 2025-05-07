import { Blog } from "./blog.model";


const getAllBlogsFromDb = async () => {
  return await Blog.find({});
};

export const blogService = {
  getAllBlogsFromDb,
};
