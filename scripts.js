function Sumar() {
  var num1 = document.getElementById('N1').value;
  var num2 = document.getElementById('N2').value;
  var resultado = parseInt(num1) +  parseInt(num2);
  alert('La suma de los numeros es:' + resultado);
}

function Resta() {
    var num1 = document.getElementById('N1').value;
    var num2 = document.getElementById('N2').value;
    var resultado = parseInt(num1) - parseInt(num2);
    alert('La resta de los numeros es:' - resultado);
  }

function Dividir() {
    var num1 = document.getElementById('N1').value;
    var num2 = document.getElementById('N2').value;
    var resultado = parseInt(num1) /  parseInt(num2);
    alert('La divicion  de los numeros es:' / resultado);
  }


  function ver(){
 
    var dato = document.getElementById('Materia').value;
    switch (dato) {
        case 'Programacion':
              alert('Usted a selccionado Programacion');
            break;

    case 'Soprte TI':
        alert('Usted a seleccionado Soporte TI');
        break;

   case 'TICS':
 alert('Usted a selccionado TICS');

 break;
 case 'Diseño de Software':
     alert('Usted a selccionado Diseño de Software');

        default:
            break;
        }
  }

function edad (){

var Edad = document.getElementById('Edad').value;
if (Edad>=18) {
    alert('Eres mayor de edad');
} else {
         alert('Eres menor de edad');


        }  
}
