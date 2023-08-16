const { Schema, model } = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');

const userSchema = new Schema({  // schema se refiere a una varible cualquiera, es decir, puede llevar cualquier nombre
    Estado_compra: {
        type: String,
        required: true,
    },
    Fecha_creación: {
        type: String,
        required: true,
    },
    Precio_total: {
        type: Number,
        required: true,
    },
    
},
    {
        timestamps: true //Fecha donde se creó el esquema
    });

userSchema.plugin(mongoosePaginate)

module.exports = model('Orden', userSchema);