import mongoose from "mongoose";
//Definer la estructura del documento que se va a registrar
const outfitIASchema = new mongoose.Schema({
    usuarioId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuario",
        required: [true, "El ID del usuario es obligatorio"],
    },
    fechaGeneracion: {
        type: Date,
        default: Date.now,
    },
    descripcion: {
        type: String,
        trim: true,
        required: [true, "La descripción del outfit es obligatoria"],
    },
    prendas: {
        type: [String],
        required: [true, "Debes incluir al menos una prenda sugerida por la IA"],
    },
    imagenUrl: {
        type: String,
        default: null,
    },
    contexto: {
        type: String,
        trim: true,
        required: [true, "El contexto del outfit es obligatorio"],
    }
}, {
    timestamps: true,  // crea campos createdAt y updatedAt
    versionKey: false
});
const outfitIAModel = mongoose.model(
    'outfitIA',//define el nombre de la coleccion donde se guardan los documentos
    outfitIASchema
);
//exportal el modelo a el resto de la aplicacion
export default outfitIAModel;
