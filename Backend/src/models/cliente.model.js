const { Schema, model } = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');

const userSchema = new Schema({  // schema se refiere a una varible cualquiera, es decir, puede llevar cualquier nombre
    N_documento: {
        type: Number,
        required: true,
    },
    Tipo_de_documento: {
        type: String,
        required: true,
    },
    Primer_Nombre: {
        type: String,
        required: true,
    },
    Segundo_Nombre: {
        type: String,
        required: true,
    },
    Primer_Apellido:{
        type: String,
        required: true
    },
    Segundo_Apellido:{
        type: String,
        require: true,
    },
    Correo_Electronico:{
        type: String,
        require: true,
        unique: true,
    },
    Dirección:{
        type: String,
        default: 0,
    },
    Teléfono:{
        type: Number,
        default: 0,
    }
},
    {
        timestamps: true //Fecha donde se creó el esquema
    });

userSchema.plugin(mongoosePaginate)

module.exports = model('Cliente', userSchema);