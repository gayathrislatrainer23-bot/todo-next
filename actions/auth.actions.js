// "use server";

// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import { cookies } from "next/headers";
// import { connectDB } from "@/lib/db";
// import User from "@/models/User";

// export async function registerUser(formData) {
//   await connectDB();

//   const name = formData.get("name");
//   const email = formData.get("email");
//   const password = formData.get("password");

//   const hashedPassword = await bcrypt.hash(password, 10);

//   await User.create({
//     name,
//     email,
//     password: hashedPassword,
//   });

//   return { success: true };
// }

// export async function loginUser(formData) {
//   await connectDB();

//   const email = formData.get("email");
//   const password = formData.get("password");

//   const user = await User.findOne({ email });
//   if (!user) throw new Error("Invalid credentials");

//   const match = await bcrypt.compare(password, user.password);
//   if (!match) throw new Error("Invalid credentials");

//   const token = jwt.sign(
//     { userId: user._id },
//     process.env.JWT_SECRET,
//     { expiresIn: "1d" }
//   );

//   cookies().set("token", token, {
//     httpOnly: true,
//   });

//   return { success: true };
// }

// export async function logoutUser() {
//   cookies().delete("token");
// }
