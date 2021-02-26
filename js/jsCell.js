/*Caja de variables*/
var wait = document.querySelector("#wait");
/*-----acciones gohan-------------- */
var botonPuño = document.querySelector(".Puño");

var  AccionPuño =  document.querySelector("#AccionPuño");
var  impacto =  document.querySelector("#impacto");

var heridaCEll = document.querySelector("#heridaCEll")
var cellBase = document.querySelector(".cellBase")
var gohanBase = document.querySelector(".gohanBase")

/*---------------------------------*/ 
var botonDefensa = document.querySelector(".Defensa")
var AccionDefensa= document.querySelector("#AccionDefensa")
var efectoDefensa= document.querySelector("#cubrirse")
/*---------------------------*/
var botonCargaKi = document.querySelector(".CargaKi")
var AccionCarga =document.querySelector("#AccionCarga")
var efectoKi = document. querySelector ("#efectoCarga")
/*-------------------------- */
var botonKame = document.querySelector(".RafagaKi")
var AccionKame = document.querySelector("#Kame")
var efectoBola = document.querySelector("#bola")
var efectoFuego = document.querySelector("#fuego")

/*--acciones Cell- */
var heridaCEll = document.querySelector("#heridaCEll")
var cellBase = document.querySelector(".cellBase")
/*FIn Caja de variables*/

window.addEventListener('load',botonAtaque,false);
window.addEventListener('load',botonDefenderse,false);
window.addEventListener('load',botonKi,false);
window.addEventListener("load",botonTirarKame,false);
/*LA espera*/
  wait.addEventListener('webkitAnimationEnd', function(){ //este event se queda escuhando y cuando termina la animacion CSS (que siempre se queda en animacion END) hace que lo puedas volver a ejecutar la animacion
    wait.remove(wait);/*Tiempo de espera animacion CSS */
  });
/*Fin espera*/
/*Boton animacion puño gohan*/ /*1ª fase del combate*/
function botonAtaque(){
      
        botonPuño.addEventListener('click', function () { //clicas al boton y ejecuta la animacion ()se queda en END y no se puede volver a ejecutar//
          AccionPuño.style.animation = "gohanPuño 1.5s cubic-bezier(0.18, 0.89, 0.32, 1.28) 0s  alternate";
          impacto.style.animation =  "frameImpacto 1.5s cubic-bezier(0.18, 0.89, 0.32, 1.28) 0.5s  forwards"; 
          console.log(addEventListener="botonPuño")
        });
 
        AccionPuño.addEventListener('webkitAnimationStart', function(){ 
          gohanBase.style.width = "0vw";//gohan base desaparece//
        });
        
        AccionPuño.addEventListener('webkitAnimationEnd', function(){ //este event se queda escuhando y cuando termina la animacion CSS (que siempre se queda en animacion END) hace que lo puedas volver a ejecutar la animacion
          AccionPuño.style.webkitAnimationName = 'AccionPuño';//animacion gohan golpeando//
          console.log(webkitAnimationName = 'AccionPuño')
        });
        impacto.addEventListener('webkitAnimationEnd', function(){ //este event se queda escuhando y cuando termina la animacion CSS (que siempre se queda en animacion END) hace que lo puedas volver a ejecutar la animacion
          gohanBase.style.width = "21vw";//gohan base reaparece//
          impacto.style.webkitAnimationName = 'impacto';        //animacion efecto golpe//
          console.log(webkitAnimationName = 'impacto')
          accionesCEll()
        });
/*lo que podria hacer cell si recibe el impacto */
        impacto.addEventListener("webkitAnimationEnd", function(){//animacion cell recibiendo daño//
          heridaCEll.style.animation = "cellHerida 1.3s cubic-bezier(0.18, 0.89, 0.32, 1.28) 0s  forwards";
          console.log(webkitAnimationName = 'heridaCEll')
        });
        heridaCEll.addEventListener('webkitAnimationStart', function(){
          gohanBase.style.width = " 23vw";/*gohan base aparece*/ 
          cellBase.style.width = "0vw";/*lo hago pequeño para que no se vea ya que con opacity no funciona porque lo utiliza la animacion */
           console.log(cellBase)
         })
         heridaCEll.addEventListener('webkitAnimationEnd', function(){
           heridaCEll.style.webkitAnimationName = "heridaCEll";
           cellBase.style.width = "21vw";/*lo convierto a su tamaño original */
         console.log(cellBase)
         }) 
         /* Fin de lo que podria hacer cell si recibe el impacto */
}/*fin botonAtaque */
/*Boton defensa gohan */ /*1ª fase del combate*/

function botonDefenderse(){
      
  botonDefensa.addEventListener('click', function () { //clicas al boton y ejecuta la animacion//
    AccionDefensa.style.animation = "gohanDefensa 2s cubic-bezier(0.18, 0.89, 0.32, 1.28) 0s  forwards";
    efectoDefensa.style.animation =  "efectoDefensa  2s cubic-bezier(0.18, 0.89, 0.32, 1.28) 0.5s  forwards"; 
    console.log(addEventListener="botonDefensa")
  });
  AccionDefensa.addEventListener('webkitAnimationStart', function(){ 
    gohanBase.style.width = "0vw";//gohan base desaparece//
  });

  AccionDefensa.addEventListener('webkitAnimationEnd', function(){ //este event se queda escuhando y cuando termina la animacion CSS (que siempre se queda en animacion END) hace que lo puedas volver a ejecutar la animacion
    AccionDefensa.style.webkitAnimationName = 'Acciondefensa';//animacion gohan golpeando//
    console.log(webkitAnimationName = 'Acciondefensa');
    gohanBase.style.width = "21vw";//gohan base desaparece//
  });
    efectoDefensa.addEventListener("webkitAnimationEnd", function(){
      efectoDefensa.style.webkitAnimationName = "cubrirse";
      console.log(webkitAnimationName = 'efectoDefensa');
    });
}/*fin botonDefenderse */

/*Boton cargaki gohan */ /*1ª fase del combate*/
function botonKi(){
      
  botonCargaKi.addEventListener('click', function () { //clicas al boton y ejecuta la animacion//
   AccionCarga.style.animation = "frameKi 2s cubic-bezier(0.18, 0.89, 0.32, 1.28) 0s  forwards";
    efectoKi.style.animation = " efectoki  2s cubic-bezier(0.18, 0.89, 0.32, 1.28) 0s  forwards"
    console.log(addEventListener="botoncargaki")
  });
  AccionCarga.addEventListener('webkitAnimationStart', function(){ 
    gohanBase.style.width = "0vw";//gohan base desaparece//
  });

    AccionCarga.addEventListener('webkitAnimationEnd', function(){ //este event se queda escuhando y cuando termina la animacion CSS (que siempre se queda en animacion END) hace que lo puedas volver a ejecutar la animacion
    AccionCarga.style.webkitAnimationName = 'AccioncCarga';
    console.log(webkitAnimationName = 'AccionCarga');
    gohanBase.style.width = "21vw";//gohan base reaparece//
    });

  efectoKi.addEventListener('webkitAnimationEnd', function(){ 
    efectoKi.style.webkitAnimationName = 'efectoCarga';
   console.log(webkitAnimationName = 'efectoCarga');
  });
}/*fin botonKi  */

function botonTirarKame(){
      
  botonKame.addEventListener('click', function () { //clicas al boton y ejecuta la animacion//
   AccionKame.style.animation = "frameKame 2s cubic-bezier(0.18, 0.89, 0.32, 1.28) 0s  forwards";
   efectoBola.style.animation = "frameBola 3s cubic-bezier(0.18, 0.89, 0.32, 1.28) 0s  forwards";
   console.log(addEventListener=" botonKame")
  });
  AccionKame.addEventListener('webkitAnimationStart', function(){ 
    gohanBase.style.width = "0vw";//gohan base desaparece//
  });

    AccionKame.addEventListener('webkitAnimationEnd', function(){ //este event se queda escuhando y cuando termina la animacion CSS (que siempre se queda en animacion END) hace que lo puedas volver a ejecutar la animacion
    AccionKame.style.webkitAnimationName = 'Kame';
    console.log(webkitAnimationName = 'frameKame');
    gohanBase.style.width = "21vw";//gohan base desaparece//
    });

    efectoBola.addEventListener('webkitAnimationEnd', function(){ 
      efectoBola.style.webkitAnimationName = 'bola';
      console.log(webkitAnimationName = 'efectoBola');
      efectoFuego.style.animation = "frameFuego 2s cubic-bezier(0.18, 0.89, 0.32, 1.28) 0s  forwards";
    });
  
      efectoFuego.addEventListener('webkitAnimationEnd', function(){ 
        efectoFuego.style.webkitAnimationName = 'fuego';
      });
  
}/*Fin botonTirarKame */
/*Fin de acciones gohan*/

/*CeLL ataque */
// function botonAtaque(  
//   impacto = addEventListener('webkitAnimationEnd')
//    let acciones = [{
//     cellBase = style.width = "0vw" , cellBase = style.width = "50vw" ]};

//    for (let i in acciones) {
//     console.log(i); 
//  }
// }){


// }
// switch (logicaCEll) {
//   case ContadorPuño = 0:

//     [break;]
//   case valor2:
    
//     [break;]
  
//   case valorN:
 
//     [break;]


//   default:
    
//     [break;]
// }

/*fin cell ataque*/ 