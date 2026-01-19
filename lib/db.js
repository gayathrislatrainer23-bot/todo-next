// import mongoose from "mongoose";

// export const connectDB = async () => {
//   if (mongoose.connection.readyState >= 1) return;
//   await mongoose.connect(process.env.MONGO_URI);
// };


import mongoose from "mongoose";

export const connectDB = async () => {
//   if (!process.env.MONGO_URI) {
//     console.log("ENV CHECK:", "mongodb://127.0.0.1:27017/todoapp");

//     throw new Error("MONGO_URI is not defined in .env.local");
//   }
// console.log("ENV CHECK:", process.env.MONGO_URI);

//   if (mongoose.connection.readyState >= 1) return;

  await mongoose.connect("mongodb://127.0.0.1:27017/todoapp");
};
