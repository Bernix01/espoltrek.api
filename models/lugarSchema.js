var LugarSchema = function() {
    var mongoose = require('../db').mongoose;
    var schema = {
        nombre: {
            type: String,
            required: true
        },
        descripcion: {
            type: String,
            required: false
        },
        tags: {
            type: [String],
            required: false
        },
        lat: {
            type: Number,
            required: true
        },
        lng: {
            type: Number,
            required: true
        },
        imagen: {
            type: String,
            required: false
        }
    };
    var lugarSchema = new mongoose.Schema(schema);
    var Lugar = mongoose.model('Lugar', lugarSchema);
    return Lugar;
};
module.exports = (LugarSchema)();

