const age= parseInt(prompt(' quanti anni hai?'));
const distance= parseInt(prompt ('quanti chilometri devi percorrere?'));

if (isNaN (age) || isNaN(distance)) {
    console.log ('uno dei due input non è un numero');  
}

const pricekm = 0.21;
let finalprice = pricekm * distance;
console.log ('kmprize * distance');



if (age < 18) {

}

