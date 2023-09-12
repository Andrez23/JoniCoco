const { Schema, model } = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');

const FacturaSchema = new Schema({  // schema se refiere a una varible cualquiera, es decir, puede llevar cualquier nombre
    codigofactura: {
        type: Number,
        required: true,
    }, 
    fecha: {
        type: String,
        required: true,
    }, 
     metododepago: {
        type: String,
        required: true,
    }, 

    documentocliente: {
        type: Number,
        required: true,
    },

    nombrecliente: {
        type: String,
        required: true,
    },
    codigopedido: {
        type: Number,
        required: true,
    },
    producto: {
        type: String,
        required: true,
    },
    cantidad: {
        type: Number,
        required: true,
    },
    preciounitario: {
        type: Number,
        required: true,
    },
    preciototal: {
        type: Number,
        required: true,
    },
   
   
   
   
   
   ordenp: [{type:Schema.Types.ObjectId, ref: "ordenp"}],


    detallepedido: [{type:Schema.Types.ObjectId, ref: "detallepedido"}]

},
    {
        timestamps: true //Fecha donde se creó el esquema
    });

FacturaSchema.plugin(mongoosePaginate)

module.exports = model('factura', FacturaSchema);