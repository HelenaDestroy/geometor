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

function areaCuadrado(lado)
{  return (lado * lado);
    }
function calcularAreaCuadrado(){
const input =  document.getElementById("inputCuadrado");
const value = input.value;
const area = areaCuadrado(value);
alert ("The area of the Square is:"+ area + "cm²");
} 

function perimetroTriangulo(lado1, lado2, base)
{
  return (lado1 + lado2 + base);
}
 function calcularPerimetroTriangulo()
{
input1 =  document.getElementById("input1Lado");
input2 =  document.getElementById("input2Lado");
input3 =  document.getElementById("input3Base");

const inp1 = input1.value;
const inp2 = input2.value; 
const inp3 = input3.value;
const area = perimetroTriangulo(inp1, inp2, inp3);
alert ("The perimeter of the Triangle is:"+ area + "cm²");
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
 
function calcularAreaTriangulo()
{
const input3 =  document.getElementById("input3Base");
const input4 =  document.getElementById("input4Altura");
const inp3 = input3.value;
const inp4 = input4.value;
  const area = areaTriangulo(inp3, inp4);
  alert ("The area of the Triangle is:"+ area + "cm²"); 
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
 