const { Schema, model } = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');

const userSchema = new Schema({  // schema se refiere a una varible cualquiera, es decir, puede llevar cualquier nombre
    Codigo_factura: {
        type: Number,
        required: true,
    },
    Metodo_de_pago: {
        type: String,
        required: true,
    }, 
    Fecha: {
        type: String,
        required: true,
    }, 
},
    {
        timestamps: true //Fecha donde se creó el esquema
    });

userSchema.plugin(mongoosePaginate)

module.exports = model('Factura', userSchema);