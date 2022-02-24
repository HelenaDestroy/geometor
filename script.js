function perimetroCuadrado(lado) 
{ 
  return lado * 4;
}

function calcularPerimetroCuadrado() 
{ const input =  document.getElementById("inputCuadrado");
  const value = input.value;
  const perimetro = perimetroCuadrado(value)
  alert ("The perimeter of the Square is:"+ perimetro);
}

function CalcularAreaCuadrado(lado)
{  return (lado * lado);
    }
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

function perimetroTriangulo(ladot1, baset, ladot2)
{
  return (ladot1, baset, ladot2);
}
function areaTriangulo(baset, alturat){
    return (baset * alturat) / 2;
    }

const PI = Math.PI;

function diametroCirculo(radio){  
  return (radio * 2);
    }
    

    function perimetroCirculo(radio){
        const diametro = diametroCirculo(radio);
        return diametro * PI;
    }
      
    
    function areaCirculo(radio)
    {
    return (Math.pow(radio, 2) * PI); 
  
      }
  //otro html
  //necesito obtener los datos del usuario del formulario, como lo saco?
  //navegador
  //document.getElementById("el id que busco")
  
//  DIRECTAMENTE EN VEZ DE DECLARAR DOCUMENTGETELEMENTBYID, LA INCIALIZA COMO EQUIVALENTE A UNA VARIABLE ConstantSourceNode.
//OJO YO QUIERO SOLO EL VALOR NO TODO EL INPUT. AHI VIENE LO DEL VALUE
// CONST VALUE = INPUT.VALUE;
