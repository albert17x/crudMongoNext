import connectDB from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import { StudentModel } from "@/models/Student";

// Crear un Registro
export const POST = async (req, res) => {
    await connectDB()
    try {
        

    } catch (error) {

    }

}

// Consultar los Registros
export const GET = async () => {
    await connectDB()
    try {

    } catch (error) {

    }
}

