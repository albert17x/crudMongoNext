import connectDB from "@/lib/dbConnect";
import { AgendaModel } from "@/models/Agenda";
import { NextResponse } from "next/server";

//? Mostrar un documento
export const GET = async (request, { params }) => {
    await connectDB();
    const id = params.id;
    try {
        const result = await AgendaModel.findById(id);
        return NextResponse.json({ data: result }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ data: null }, { status: 500 });
    }
};

//? Eliminar un documento
export const DELETE = async (request, { params }) => {
    await connectDB();
    const id = params.id;
    try {
        const result = await AgendaModel.findByIdAndDelete(id);
        if (!result) {
            return NextResponse.json(
                { message: `Document with ID: ${id} not found.` },
                { status: 404 }
            );
        }
        return NextResponse.json({ data: result }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ data: null }, { status: 500 });
    }
};

//? Actualizar un documento 
export const PUT = async (request, { params }) => {
    try {
        const datax = await request.json()
        const result = await AgendaModel.findByIdAndUpdate(params.id, datax, { new: true })
        if (!result) {
            return NextResponse.json({ message: `Document with ID: ${id} not found` }, { status: 404 });
        }
        return NextResponse.json({ data: result }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ data: null }, { status: 500 });
    }
};