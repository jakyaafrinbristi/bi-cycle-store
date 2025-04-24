import 'jsonwebtoken';

declare module 'jsonwebtoken' {
  export interface SignOptions {
    expiresIn?: string | number;
    algorithm?: string;
    // অন্যান্য প্রপার্টি যোগ করুন
  }
}