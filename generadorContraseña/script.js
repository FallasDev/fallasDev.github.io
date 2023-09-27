const longitud = document.getElementById('longitud');
const valorLongitud = document.getElementById('longitud-value');
const number = document.getElementById('numeros');
const letter = document.getElementById('letras');
const character = document.getElementById('caracteres-especiales');
const boton = document.getElementById('boton');
const container = document.getElementById('generador');
const titulo = document.querySelector('h1');


longitud.addEventListener('input', () => {
    valorLongitud.textContent = longitud.value;
})

titulo.style.fontSize = '40px'

const randomPasswordEverting = (longitud) => {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    const arrayVacio = [];
    const array = caracteres.split(''); 
    for (let i = 0; i < longitud; i++) {
        const numeroRandom = Math.floor(Math.random() * caracteres.length); 
        arrayVacio.push(array[numeroRandom])
    }
    titulo.textContent = arrayVacio.join('');  
}

const randomPasswordNumberAndLetter = (longitud) => {
    const letrasYNumeros = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const arrayVacio = [];
    const array = letrasYNumeros.split('');   
    for (let i = 0; i < longitud; i++) {
        const numeroRandom = Math.floor(Math.random() * letrasYNumeros.length); 
        arrayVacio.push(array[numeroRandom])
    }
    titulo.textContent = arrayVacio.join('');    
}

const randomPasswordNumberAndCharacter = (longitud) => {
    const NumerosYNCaracteresEspeciales = '0123456789!@#$%^&*()';
    const arrayVacio = [];
    const array = NumerosYNCaracteresEspeciales.split('');   
    for (let i = 0; i < longitud; i++) {
        const numeroRandom = Math.floor(Math.random() * NumerosYNCaracteresEspeciales.length); 
        arrayVacio.push(array[numeroRandom])
    }
    titulo.textContent = arrayVacio.join('');    
}

const randomPasswordLetterAndCharacter = (longitud) => {
    const letrasYNCaracteresEspeciales = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()';
    const arrayVacio = [];
    const array = letrasYNCaracteresEspeciales.split('');   
    for (let i = 0; i < longitud; i++) {
        const numeroRandom = Math.floor(Math.random() * letrasYNCaracteresEspeciales.length); 
        arrayVacio.push(array[numeroRandom])
    }
    titulo.textContent = arrayVacio.join('');    
}


const randomPasswordOnlyLetter = (longitud) => {
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const arrayVacio = [];
    const array = letras.split('');
    for (let i = 0; i < longitud; i++) {
        const numeroRandom = Math.floor(Math.random() * letras.length); 
        arrayVacio.push(array[numeroRandom]);
    }
    titulo.textContent = arrayVacio.join('');    
}

const randomPasswordOnlyNumbers = (longitud) => {
    const numeros = '123456789';
    const arrayVacio = [];
    const array = numeros.split('');
    for (let i = 0; i < longitud; i++) {
        const numeroRandom = Math.floor(Math.random() * numeros.length); 
        arrayVacio.push(array[numeroRandom]);
    }
    titulo.textContent = arrayVacio.join('');    
}

const randomPasswordOnlySpecialChar = (longitud) => {
    const caracteresEspeciales = '!@#$%^&*()';
    const arrayVacio = [];
    const array = caracteresEspeciales.split('');
    for (let i = 0; i < longitud; i++) {
        const numeroRandom = Math.floor(Math.random() * caracteresEspeciales.length); 
        arrayVacio.push(array[numeroRandom]);
    }
    titulo.textContent = arrayVacio.join('');    
}


const checkOfPassword = (longitud) => {
    if (letter.checked && number.checked && character.checked) {
      randomPasswordEverting(longitud);
      //titulo.textContent = '';
    } else if (letter.checked && number.checked){
        randomPasswordNumberAndLetter(longitud);
    } else if(letter.checked && character.checked){
        randomPasswordLetterAndCharacter(longitud);
    } else if (number.checked && character.checked) {
        randomPasswordNumberAndCharacter(longitud);
    } else if (letter.checked) {
        randomPasswordOnlyLetter(longitud);
        //titulo.textContent = [''];
    } else if(number.checked){
        randomPasswordOnlyNumbers(longitud);
    } else if (character.checked) {
        randomPasswordOnlySpecialChar(longitud);
    } else{
        alert('Selecciona una opción como minimo')
    }
  };

boton.addEventListener('click', () => {
    checkOfPassword(longitud.value);
});
