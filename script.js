//cuadrado
function perimetroCuadrado(lado) 
{ 
  return lado * 4;
}
function calcularPerimetroCuadrado() 
{ const input =  document.getElementById("inputCuadrado");
  const value = parseInt(input.value);
  const perimetro = perimetroCuadrado(value)
  alert ("The perimeter of the Square is:"+ perimetro);
}

function areaCuadrado(lado)
{  return (lado * lado);
    }
function calcularAreaCuadrado(){
const input =  document.getElementById("inputCuadrado");
const value = parseInt(input.value);
const area = areaCuadrado(value);
alert ("The area of the Square is:"+ area + "cm²");
} 
//triangulo

function perimetroTriangulo(lado1, lado2, base)
{
  resultado = lado1 + lado2 + base
  return resultado;
}
 function calcularPerimetroTriangulo()
{
input1 =  document.getElementById("input1Lado");
input2 =  document.getElementById("input2Lado");
input3 =  document.getElementById("input3Base");

const inp1 = parseInt(input1.value);
const inp2 = parseInt(input2.value);
const inp3 = parseInt(input3.value);
const perimetro = perimetroTriangulo(inp1, inp2, inp3);
alert ("The perimeter of the Triangle is:"+ perimetro + "cm");
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
 
function calcularAreaTriangulo()
{
const input3 =  document.getElementById("input3Base");
const input4 =  document.getElementById("input4Altura");
const inp3 = parseInt(input3.value);
const inp4 = parseInt(input4.value);
const area = areaTriangulo(inp3, inp4);
alert ("The area of the Triangle is:"+ area + "cm²"); 
    }

//circulo EN PROCESO

const PI = Math.PI;
const diametro = diametroCirculo(value)
const radio;

function diametroCirculo(radio){  
return (radio * 2);
}
function calcularDiametroCirculo()
{  
  const input =  document.getElementById("inputRadio");
  const value = parseInt(input.value);
  alert ("The diameter of the Circle is:"+ diametro);
 }
 
function perimetroCirculo(radio)
{
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}
function calcularPerimetroCirculo()
{ 
  const diametro = diametroCirculo(value)
  alert ("The diameter of the Circle is:"+ diametro);
}
  
function areaCirculo(radio)
{
  return (Math.pow(radio, 2) * PI); 
}  

function calcularAreaCirculo()
{
  areaCirculo(value)
  alert ("The area of the Circle is:"+ area + "cm²");
}  