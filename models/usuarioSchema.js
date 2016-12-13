module.exports=(function UsuarioSchema(){
  var mongoose=require('../db').mongoose;
  var schema={
    nombre: { type : string, required:true} ,
    nickname:{type:String, required:true},
    id:{type:String, required:true},
    contrasenia:{type:String, required:true},


  }
  var usuarioSchema=mongoose.Schema(schema);
  var Usuario=mongoose.model('Usuario',usuarioSchema);
  Usuario.methods.validPassword = function(cb) {
  return this.model('Animal').find({ type: this.type }, cb);
};
  return Usuario;

};)();
