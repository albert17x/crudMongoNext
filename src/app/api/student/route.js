import connectDB from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import { StudentModel } from "@/models/Student";

//!  request = pedido /  response=respuesta
export const POST = async (pedido, res) => {
    await connectDB()
    try {
        const body = await pedido.json()
        const newStudent = await StudentModel.create(body)
        return NextResponse.json({ data: newStudent }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ data: null }, { status: 500 })
    }
}

export const GET = async () => {
    await connectDB()
    try {
        const result = await StudentModel.find({})
        return NextResponse.json({ data: result }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ data: null }, { status: 500 })
    }

}