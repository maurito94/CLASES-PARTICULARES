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

//
/*let dia = 1
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
console.log(dia);*/


// EMPEZAMOS CON IF / ELSE IF / ELSE

/*const edad = 22
if (edad >=18){
    console.log(edad >=18);
    console.log("es mayor");
}else {console.log(edad >=18);
    console.log("Ingrese un numero mayor")}; */

//for (let mauro = 4; mauro <10; mauro++)
//{console.log(mauro);}

/*const array = [1,2,3,4,5,6,7,8,9,10]
for (let i=0; i < array.length; i++)
    if (array [i] %2 ==0)
    console.log(array[i]);*/



    for (let i = 1; i <= 10; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(`${i}: Divido por ambos`);
        } else if (i % 3 === 0) {
            console.log(`${i}: Divido por 3`);
        } else if (i % 5 === 0) {
            console.log(`${i}: Divido por 5`);
        }
    }