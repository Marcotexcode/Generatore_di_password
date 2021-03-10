



 let length = prompt('Password length?');


 let characters = 'adcdefghilmnopqrs_!3$$$5/8tz1234567890' //Alfabeto per la generazione della passworld

let password = '';

for (var i = 0; i < length; i++) {

  let char = characters[Math.floor(Math.random()*characters.length)];

  password = password + char;

}


document.write(password);
