const { Schema, model } = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');

const userSchema = new Schema({  // schema se refiere a una varible cualquiera, es decir, puede llevar cualquier nombre
    Precio_unitario: {
        type: Number,
        required: true,
    },
    Cantidad: {
        type: Number,
        required: true,
    }, 
},
    {
        timestamps: true //Fecha donde se creó el esquema
    });

userSchema.plugin(mongoosePaginate)

module.exports = model('Detalle_de_pedido', userSchema);