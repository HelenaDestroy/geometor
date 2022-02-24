//cuadrado
function perimetroCuadrado(lado) 
{ 
  return lado * 4;
}
function calcularPerimetroCuadrado() 
{ const input =  document.getElementById("inputCuadrado");
  const value = parseInt(input.value);
  const perimetro = perimetroCuadrado(value)
  alert ("The perimeter of the Square is: "+ perimetro + " cm");
}
function areaCuadrado(lado)
{  return (lado * lado);
    }
function calcularAreaCuadrado(){
const input =  document.getElementById("inputCuadrado");
const value = parseInt(input.value);
const area = areaCuadrado(value);
alert ("The area of the Square is: "+ area + " cm²");
} 
//triangulo

function alturaTriangulo(lado1,lado2)
{
 return (Math.sqrt((Math.pow (lado1, 2) ) - (lado2 / 4)))
}

function calcularAlturaTriangulo(lad1, lad2)
{
lad1 =  document.getElementById("input1Lado");
lad2 =  document.getElementById("input2Lado");
const inp1 = parseInt(lad1.value);
const inp2 = parseInt(lad2.value);
const altura = alturaTriangulo(inp1, inp2);
alert ("The height of the Triangle is: "+ altura.toFixed(3) + " cm²"); 
}
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
alert ("The perimeter of the Triangle is: "+ perimetro + " cm");
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
function calcularAreaTriangulo()
{
const input1 =  document.getElementById("input1Lado");
const input2 =  document.getElementById("input2Lado");
lad1 = input1.value;
lad2 = input2.value;
const input3 =  document.getElementById("input3Base");
const altura = alturaTriangulo(lad1,lad2);
const inp3 = parseInt(input3.value);
const area = areaTriangulo(inp3, altura);
alert ("The area of the Triangle is: "+ area.toFixed(3) + " cm²"); 
}
  





// if (lado1 = lado2 = base: false){
// function alturaTriangulo(lado1,lado2,base);
    // <label for="input4Altura">Write the measure of the height of the Triangle:</label>
    //         <input type="number" id="input4Altura"/>







//circulo 

const PI = Math.PI;
function diametroCirculo(radio){  
return (radio * 2);
}
function calcularDiametroCirculo()
{  
  const inputRadio =  document.getElementById("inputRadio");
  const radio = parseInt(inputRadio.value);
  const diametro = diametroCirculo(radio); 
  alert ("The diameter of the Circle is: "+ diametro + " cm");
 }
 

function perimetroCirculo(radio)
{
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}
function calcularPerimetroCirculo()
{  const radio = parseInt(inputRadio.value);
   const perimetro = perimetroCirculo(radio)
  alert ("The perimeter of the Circle is: "+ perimetro.toFixed(3) + " cm");
}
  
function areaCirculo(radio)
{
  return (Math.pow(radio, 2) * PI); 
}  

function calcularAreaCirculo()
{ const radio = parseInt(inputRadio.value);
  const area = areaCirculo(radio)
  alert ("The area of the Circle is: "+ area.toFixed(3) + " cm²");
}  