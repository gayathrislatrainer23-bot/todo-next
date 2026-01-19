import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { connectDB } from "@/lib/db";
import Todo from "@/models/Todo";

function getUserId(req) {
  const token = req.cookies.get("token")?.value;
  if (!token) return null;
  const decoded = jwt.verify(token, 'gaya3');
  return decoded.userId;
}

export async function GET(req) {
  await connectDB();
  const userId = getUserId(req);
  const todos = await Todo.find({ userId });
  return NextResponse.json(todos);
}

export async function POST(req) {
  await connectDB();
  const userId = getUserId(req);
  const { title } = await req.json();

  await Todo.create({ title, userId });
  return NextResponse.json({ success: true });
}

export async function PATCH(req) {
  await connectDB();
  const { id, completed } = await req.json();
  await Todo.findByIdAndUpdate(id, { completed });
  return NextResponse.json({ success: true });
}

export async function DELETE(req) {
  await connectDB();

  const userId = getUserId(req);
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const url = new URL(req.url);
  const id = url.searchParams.get("id"); // get ?id=...

  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

  await Todo.deleteOne({ _id: id, userId }); // only delete your own todo
  return NextResponse.json({ success: true });
}

// export async function PUT(req){
//   await  connectDB();
//     const { id, newTitle } = await req.json();
//   console.log(req)
//     const userId = getUserId(req);
//       if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//          const url = new URL(req.url);
//            await Todo.findByIdAndUpdate(id, { title: newTitle });

//            return NextResponse.json({ success: true });

// }

export async function PUT(req) {
  await connectDB();

  const userId = getUserId(req);
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id, newTitle } = await req.json();

  await Todo.findOneAndUpdate(
    { _id: id, userId },
    { title: newTitle }
  );

  return NextResponse.json({ success: true });
}