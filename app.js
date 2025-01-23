let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extencion =[".com", ".net", ".us", ".io"];
function selectrandom (arr){
    let indexRnd = Math.floor(Math.random()*arr.length);
    return arr[indexRnd];
}

let dominio = "www."+selectrandom(pronoun)+selectrandom(adj)+selectrandom(noun)+selectrandom(extencion);
console.log(dominio);