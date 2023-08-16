const { Schema, model } = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');

const userSchema = new Schema({  // schema se refiere a una varible cualquiera, es decir, puede llevar cualquier nombre
    Nombre: {
        type: String,
        required: true,
    },
    Descripción: {
        type: String,
        required: true,
    },
    Presentación: {
        type: String,
        required: true,
    },
    Precio_base:{
        type: Number,
        required: true
    }
},
    {
        timestamps: true //Fecha donde se creó el esquema
    });

userSchema.plugin(mongoosePaginate)

module.exports = model('Producto', userSchema);