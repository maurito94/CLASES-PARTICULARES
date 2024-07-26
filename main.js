// let edad = prompt("Ingrese su edad");
// if (edad < 13) {
// console.log("Edad de niño");
// } else if (edad >= 13 && edad <20) {
// console.log("Sos un adolescente");
// } else if (edad >= 20 && edad <30) {
// console.log("Sos un joven adulto");
// } else {
// console.log("Sos un adulto");
// }

// let clima = prompt("Ingrese su temperatura")
// if (clima >=-10 && clima <0){
// console.log("Esta nevando"); 
// } else if (clima >=0 && clima <10){
// console.log("Esta haciendo frio");
// } else if (clima <-10){
// alert ("Ingrese una termperatura valida wachin");
// } else {console.log("Esta agradable");}

let dia = 1
switch (dia) {
case 1:
dia = "Lunes";
break
case 2:
dia = "Martes";
break
case 3:
dia = "Miércoles";
break
case 4:
dia = "Jueves";
break
case 5:
dia = "Viernes";
break
default:
dia = "Número no válido";
break
}
console.log(dia);
