const { Schema, model } = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');

const userSchema = new Schema({  // schema se refiere a una varible cualquiera, es decir, puede llevar cualquier nombre
    numerodocumento: {
        type: Number,
        required: true,
    },
    tipodocumento: {
        type: Number,
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

userSchema.plugin(mongoosePaginate)

module.exports = model('usuario', userSchema);