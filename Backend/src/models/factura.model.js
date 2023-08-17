const { Schema, model } = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');

const userSchema = new Schema({  // schema se refiere a una varible cualquiera, es decir, puede llevar cualquier nombre
    codigofactura: {
        type: Number,
        required: true,
    },
    metododepago: {
        type: String,
        required: true,
    }, 
    fecha: {
        type: String,
        required: true,
    }, 
},
    {
        timestamps: true //Fecha donde se creó el esquema
    });

userSchema.plugin(mongoosePaginate)

module.exports = model('factura', userSchema);