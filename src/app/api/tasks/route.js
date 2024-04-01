import connectDB from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import { TaskModel } from "@/models/Tasks";

export async function POST(request) {
    await connectDB() 
    try {
      const body = await request.json();
      const newTask = new TaskModel(body);
      const savedTask = await newTask.save();
      return NextResponse.json(savedTask);
    } catch (error) {
      return NextResponse.json(error.message, {
        status: 400,
      });
    }
  }

export async function GET() {
    await connectDB() ;
    const vmTasks = await TaskModel.find();
    return NextResponse.json(vmTasks);
  }

  
