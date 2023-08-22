const { Schema, model } = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');

const usuarioSchema = new Schema({  // schema se refiere a una varible cualquiera, es decir, puede llevar cualquier nombre
    numerodocumento: {
        type: Number,
        required: true,
    },
    tipodocumento: {
        type: String,
        required: true,
    },

    primernombre: {
        type: String,
        required: true,
    },
    segundonombre: {
        type: String,
        required: true,
    },
    primerapellido:{
        type: String,
        required: true
    },
    segundoapellido:{
        type: String,
        require: true,
    },
    contraseña:{
        type: Number,
        require: true,
        unique: true,
    },
    direccion:{
        type: String,
        default: 0,
    },
    telefono:{
        type: String,
        default: 0,
    }
},
    {
        timestamps: true //Fecha donde se creó el esquema
    });

usuarioSchema.plugin(mongoosePaginate)

module.exports = model('usuario', usuarioSchema);