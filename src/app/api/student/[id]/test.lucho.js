import connectDB from "@/lib/dbConnect";  // mongoose
import { NextResponse } from "next/server";
import { StudentModel } from "@/models/Student"; // tabla de DB
import { data } from "autoprefixer";

export const GET = async (req, res, {params}) => {
    await connectDB()
    const id = params.id
    try {
        const newRegistro = StudentModel.findById(id)
        return NextResponse.json({data: newRegistro}, {success: true})
        
    } catch (error) {
        return NextResponse.json({data: null}, {success: false})       
    }

}