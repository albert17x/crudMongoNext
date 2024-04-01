import mongoose from "mongoose";
//Creamos un Schema
const gastoSchema = new mongoose.Schema(
    {
        item: {
            type: String,
            required: [true, "Please complete the field."]
        },
        gasto: {
            type: Number,
            required: [true, "Please complete the field."]
        },

        ingreso: {
            type: Number,
            required: [true, "Please complete the field."]
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
)

//Creamos el modelo a partir del Schema
export const GastoModel = mongoose?.models?.Gasto || mongoose.model("Gasto", gastoSchema)