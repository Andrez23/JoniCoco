const { Schema, model } = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');

const userSchema = new Schema({  // schema se refiere a una varible cualquiera, es decir, puede llevar cualquier nombre
    preciounitario: {
        type: Number,
        required: true,
    },
    cantidad: {
        type: Number,
        required: true,
    }, 
},
    {
        timestamps: true //Fecha donde se creó el esquema
    });

userSchema.plugin(mongoosePaginate)

module.exports = model('detalle_de_pedido', userSchema);