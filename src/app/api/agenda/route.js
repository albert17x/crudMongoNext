import connectDB from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import { AgendaModel } from "@/models/Agenda";

//? Crear Registro - codigo mas limpio
export const POST = async (req, res) => {
    await connectDB()   
    try {
        const body = await req.json()
        const newAgenda = await AgendaModel.create(body)
        return NextResponse.json({data:newAgenda}, {status:201})
    } catch (error) {
        return NextResponse.json({data: null}, {status:500})
    }
    // return NextResponse.json(newAgenda)
}

export const GET = async () => {
    await connectDB()
    try {
        const result = await AgendaModel.find({})
        return NextResponse.json({data:result}, {status:200})
    } catch (error) {
        return NextResponse.json({data: null}, {status:500})
    }
    // return NextResponse.json(result)
    
}
