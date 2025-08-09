import mongoose, { Document, Schema } from 'mongoose';

export interface User extends Document {
  name: string;
  username: string;
  image?: string;
  email: string;
  phone: string;
  password: string;
  occupation?: string;
  bio?: string;
  socialLinks?: [string];
  role: 'user' | 'admin' | 'instructor';
}

const userSchema: Schema<User> = new Schema(
  {
    name: String,
    username: {
      type: String,
      unique: true,
    },
    image: String,
    email: {
      type: String,
      unique: true,
    },
    phone: {
      type: String,
      unique: true,
    },
    password: String,
    occupation: String,
    bio: String,
    socialLinks: [String],
    role: { type: String, enum: ['user', 'admin', 'instructor'], default: 'user' },
  },
  { timestamps: true }
);

export const User =
  (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>('User', userSchema);
