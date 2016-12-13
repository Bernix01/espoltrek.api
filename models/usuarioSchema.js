module.exports=(function UsuarioSchema(){
  var mongoose=require('../db').mongoose;
  var schema={
    nombres: { type : string, required:true} ,
    apellidos:{type:String, required:true},
    nickname:{type:String, required:true},
    id:{type:String, required:true},
    email:{type:String, required:true}
    contrasenia:{type:String, required:true},
    cedula:{type:String, required:false},
    matricula:{type:Number, required:false}

  }
  var usuarioSchema=mongoose.Schema(schema);
  var Usuario=mongoose.model('Usuario',usuarioSchema);
  Usuario.methods.validPassword = function(cb) {
  return cb==this.contrasenia;
};
  return Usuario;

};)();
