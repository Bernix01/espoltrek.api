var LugarSchema= function(){
  var mongoose= require('../db').mongoose;
  var schema={
    nombre:{type:String,required=true},
    descripcion:{type:String,required=false;},
    etiquetas:{},
    lat:{type: Number ,required=true} 
    lng:{type: Number,required=true},
    imagen:{}
  };
  var lugarSchema=mongoose.Schema(schema);
  var Lugar=mongoose.model('Lugar',lugarSchema);
  return Lugar;
};
module.exports = LugarSchema;
