import connectDB from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import { TaskModel } from "@/models/Tasks";


export async function GET(request, { params }) {
    connectDB();
    try {
        const taskFound = await TaskModel.findById(params.id);

        if (!taskFound)
            return NextResponse.json({ message: "Task not found" },
                {
                    status: 404,
                }
            );
        return NextResponse.json(taskFound);
    } catch (error) {
        return NextResponse.json(error.message, {
            status: 400,
        });
    }
}
//!  ------------------------------------------------
export async function PUT(request, { params }) {
    const body = await request.json();
    connectDB();

    try {
        const taskUpdated = await TaskModel.findByIdAndUpdate(params.id, body, {
            new: true
        });

        if (!taskUpdated)
            return NextResponse.json(
                {
                    message: "Task not found",
                },
                {
                    status: 404,
                }
            );

        return NextResponse.json(taskUpdated);
    } catch (error) {
        return NextResponse.json(error.message, {
            status: 400,
        });
    }
}

//!  ------------------------------------------------
export async function DELETE(request, { params }) {
    connectDB();
    try {
        const taskDeleted = await TaskModel.findByIdAndDelete(params.id);
        if (!taskDeleted)
            return NextResponse.json(
                {
                    message: "Task not found",
                },
                {
                    status: 404,
                }
            );

        return NextResponse.json(taskDeleted);
    } catch (error) {
        return NextResponse.json(error.message, {
            status: 400,
        });
    }
}
