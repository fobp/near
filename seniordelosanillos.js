//La mayuscula indica si fuera un objeto de PRIMERA CLASE
function Jugador( nombre ) {


    this.nombre = nombre;
    this.pv = 100;
    this.sp = 100;

    this.curar = function( jugadorObjetivo ){

                 if ( this.sp >= 40 ){
                 this.sp -= 40;
                 jugadorObjetivo.pv += 20; 
        }else {
                console.log ("No tengo mas SP");
        }
        
        this.estado (jugadorObjetivo);
}

        this.tirarGolpe = function (jugadorObjetivo){

                if ( jugadorObjetivo.pv  > 30 ){

                        jugadorObjetivo.pv -= 30;
                        this.estado (jugadorObjetivo);


                }else {
                        jugadorObjetivo.pv = 0;
                        console.error( jugadorObjetivo.nombre + " Ya no aguanto ningun golpe mas");
                }
                gandalf.curar(legolas);
                this.estado (jugadorObjetivo);



        }

        

        this.tirarFlecha = function (jugadorObjetivo ){
                if (jugadorObjetivo.pv > 40){ 
                        jugadorObjetivo.pv -= 40;
                        this.estado (jugadorObjetivo);

                }else{
                        jugadorObjetivo.pv = 0;
                        console.error( jugadorObjetivo.nombre + " Murio");
                }

        }

        this.estado = function (jugadorObjetivo){

                console.log( this );
                console.log ( jugadorObjetivo );
        }

};





var gandalf = new Jugador("Gandalf");
var legolas = new Jugador("Legolas")
var near = new Jugador("Near")


console.log ( gandalf );
console.log ( legolas );
console.log ( near);




