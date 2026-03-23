// Atividade 01
//const hora = 14;
//const saudacao = hora < 12 ? "Bom dia": hora < 18 ? "Boa Tarde" : "Boa noite";
//console.log(saudacao);


//atividade 02
// let resultado = 0;
// for (let i = 1; i <= 3; i++) {
//     resultado += i;
// }
// console.log(resultado);


//Atividade 03
// const dobrar = n => n * 2;
// console.log(dobrar(5) + dobrar(2));


//Atividade 04
// const frutas = ['Maçã', "Banana"];
// frutas.push("Laranja");
// console.log(frutas.length);


//Atividade 05
// const numeros = [1, 2, 3, 4, 5];
// console.log(numeros.size);


//Atividade 06
// const elemento = document.getElementById("caixa");
// elemento.textContent = "Mundo";
// console.log(elemento.textContent);


//Atividade 07
// class Pessoa {
//     constructor (nome){
//         this.nome = nome;
//     }
// }
//  const usuario = new Pessoa ("Ana");
//  console.log(typeof usuario);


//Atividade 08
// const carro = { marca: "Toyota", ano: 2024};
// console.log(carro["marca"]);


//Atividade 09
// const numeros = [10, 15, 20, 25, 30];
// let soma = 0;

// for (let i = 0; i < numeros.length; i++) {
//     id (numeros[i] % 2 === 0 && numeros [i] > 15){
//         soma += numeros [i];
//     }
// }
// console.log(soma);


//Atividade 10
const usuarios = [
    {nome: 'Rui', ativo: true},
    {nome: 'Ana', ativo: false},
    {nome: 'Bia', ativo: true}
];

const resultado = usuarios.filter(u=> u.ativo)
.map(u=> u.nome);

console.log(resultado);

