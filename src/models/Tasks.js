import mongoose from "mongoose";
//Creamos un Schema
const taskSchema = new mongoose.Schema(
    {
        task:{
            type: String,
            required: [true, "Please complete the field."]
        },
        descripcion:{
            type: String,
            required: [true, "Please complete the field."]
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
)

//Creamos el modelo a partir del Schema
export const TaskModel = mongoose?.models?.Task || mongoose.model("Task", taskSchema)