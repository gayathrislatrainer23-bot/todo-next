// "use server";

// import jwt from "jsonwebtoken";
// import { cookies } from "next/headers";
// import { connectDB } from "@/lib/db";
// import Todo from "@/models/Todo";

// function getUserId() {
//   const token = cookies().get("token")?.value;
//   if (!token) return null;
//   const decoded = jwt.verify(token, process.env.JWT_SECRET);
//   return decoded.userId;
// }

// export async function getTodos() {
//   await connectDB();
//   const userId = getUserId();
//   return await Todo.find({ userId });
// }

// export async function addTodo(formData) {
//   await connectDB();
//   const title = formData.get("title");
//   const userId = getUserId();

//   await Todo.create({ title, userId });
// }


// export async function DELETE(req, { params }) {
//   const { id } = params;
//   await connectDB();

//   try {
//     await Todo.findByIdAndDelete(id);
//     return new Response(JSON.stringify({ message: "Todo deleted" }), { status: 200 });
//   } catch (error) {
//     console.log(error);
//     return new Response(JSON.stringify({ error: "Failed to delete" }), { status: 500 });
//   }
// }

// export async function toggleTodo(id, completed) {
//   await connectDB();
//   await Todo.findByIdAndUpdate(id, { completed });
// }
