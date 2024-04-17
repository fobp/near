var nombre = "Juan Carlos";


var persona = {
        
        
        nombre: "Pedro",
        apellido: "gonalez",
        imprimirNombre: function(){
                
                console.log( this.nombre + " " + this.apellido);
                
        },
     direccion:{

         pais: "costa rica",
         obtenerPais: function(){

                console.log("La direccion es en: "+ this.pais);

                var nuevaDireccion= function(){
                        console.log(this);
                }
                nuevaDireccion();


                 }
        }
        
};

persona.nombre = "Maria";
persona.imprimirNombre();
console.log(nombre);
persona.direccion.obtenerPais();