const dados = [
  {
    nome: "nilo",
    age: 27
  },
  {
    nome: "lucas",
    age: 24
  },
  {
    nome: "matheus",
    age: 21
  },
  {
    nome: "dani",
    age: 21
  },
  {
    nome: "alan",
    age: 25
  },
  {
    nome: "alan",
    age: 30
  }
];

let soma = 0;

for (let i = 0; i < dados.length; i++) {
  soma = soma + dados[i].age;
}
let media = soma / dados.length;

console.log(media);
