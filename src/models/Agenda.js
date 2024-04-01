import mongoose from "mongoose";
//Creamos un Schema
const agendaSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, "Please complete the field."]
        },
        lastName:{
            type: String,
            required: [true, "Please complete the field."]
        },
        email:{
            type: String,
            required: [true, "Please complete the field."]
        },

        datex: { type: Date, default: Date.now },

    },
    {
        timestamps: true,
        versionKey: false
    }
)

//Creamos el modelo a partir del Schema
export const AgendaModel = mongoose?.models?.Agenda || mongoose.model("Agenda", agendaSchema)