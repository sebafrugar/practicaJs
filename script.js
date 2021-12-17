
const num  = parseInt(prompt("ingresa un numero del 1 al 20"));

let multi = (num) => {
    if (num > 1 && num < 20){
        for (let i = 1; i <= num; i++) {
            var resultado = num*i ;
            document.write(`el resultado de la multipliacion de ${i} * ${num} es ${resultado} <br>`)
        };     
    }else{
        alert("numero fuera de rango en multiplicacion")
    }
}
multi(num);

let factorial = (num) => {
    if (num > 1 && num < 20){
        for (let i = 1; i <= num; i++) {
            let res = 1;
            for (let j= 1; j <= i; j++) {
            res = res * j;
            }
            document.write(`el resultado de la factorial 5${num} es ${res} <br>`);
        }
    }else{
        alert("numero fuera de rango en factorial") 
    }
}
factorial(num)