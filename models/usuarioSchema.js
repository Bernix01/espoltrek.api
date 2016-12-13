
var UsuarioSchema= function (){
  var mongoose=require('../db').mongoose;
  var schema={
    nombres: { type : String, required:true} ,
    apellidos:{type:String, required:true},
    nickname:{type:String, required:true},

    email:{type:String, required:true},
    contrasenia:{type:String, required:true},
    cedula:{type:String, required:false},
    matricula:{type:Number, required:false}

  }
  var usuarioSchema=mongoose.Schema(schema);
  usuarioSchema.methods.validPassword = function(cb) {
  return cb==this.contrasenia;};

  var Usuario=mongoose.model('Usuario',usuarioSchema);

  return Usuario;

};
module.exports = (UsuarioSchema)();
