//Nome
let userName = prompt('Inserisci il tuo nome:');
//Cognome
let userSurname = prompt('Inserisci il tuo cognome:');
//Colore preferito
let userColor = prompt('Qual è il tuo colore preferito?');

const password = `${userName}${userSurname}${userColor}21`

//Somma
let stringaInfo = `L'utente ha inserito: ${password}`;

document.getElementById('result').innerHTML = stringaInfo