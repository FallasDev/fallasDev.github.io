const letraA = document.getElementById('botonA');
const letraB = document.getElementById('botonB');
const letraC = document.getElementById('botonC');
const letraD = document.getElementById('botonD');
const letraE = document.getElementById('botonE');
const letraF = document.getElementById('botonF');
const letraG = document.getElementById('botonG');
const letraH = document.getElementById('botonH');
const letraI = document.getElementById('botonI');
const letraJ = document.getElementById('botonJ');
const letraK = document.getElementById('botonK');
const letraL = document.getElementById('botonL');
const letraM = document.getElementById('botonM');
const letraN = document.getElementById('botonN');
const letraO = document.getElementById('botonO');
const letraP = document.getElementById('botonP');
const letraQ = document.getElementById('botonQ');
const letraR = document.getElementById('botonR');
const letraS = document.getElementById('botonS');
const letraT = document.getElementById('botonT');
const letraU = document.getElementById('botonU');
const letraV = document.getElementById('botonV');
const letraW = document.getElementById('botonW');
const letraX = document.getElementById('botonX');
const letraY = document.getElementById('botonY');
const letraZ = document.getElementById('botonZ');
const botones = document.getElementById('botones');
const verificar = document.getElementById('botonVerificar');
const palabraContainer = document.getElementById('palabra');
const contenedor = document.getElementById('container');
let palabra = "";
let letra = "";
let intentos = 0;
let letrasConvertidas;
let palabraEnArray = [];
let palabraUsuario = [];
palabraContainer.setAttribute('class', 'palabra');
const palabraAdivinar = document.createElement('h2');
palabraAdivinar.style.fontSize = '50px';
palabraAdivinar.style.width = '300px';

const generarPalabra = () => {
    const palabrasEnEspanol = [
        "CASA", "PERRO", "GATO", "SOL", "LUNA", "ARBO", "COCHE", "CIUDAD", "AMARILLO", "ROJO",
        "VERDE", "AZUL", "NARANJA", "MESA", "SILLA", "VENTANA", "PUERTA", "AGUA", "FUEGO", "AIRE",
        "TIERRA", "FAMILIA", "AMIGO", "AMOR", "TRABAJO", "ESCUELA", "PLAYA", "MONTANA", "CIELO",
        "PARQUE", "FLOR", "LIBRO", "PAPEL", "PLUMA", "TELEVISION", "ROPA", "ZAPATOS", "SOMBRERO",
        "CANCION", "BAILE", "PELICULA", "TEATRO", "ARTE", "MUSICA", "DEPORTE", "JUEGO", "REGALO",
        "DINERO", "HORA", "DIA", "NOCHE", "MES", "ANO", "VIDA", "MUERTE", "SALUD", "ENFERMEDAD",
        "TRISTEZA", "FELICIDAD", "EXITO", "FRACASO", "ESPERANZA", "SUEÑO", "REALIDAD", "NATURALEZA",
        "ANIMAL", "PLANTA", "PERSONA", "PUEBLO", "CIUDAD", "PAIS", "MAR", "RIO", "DESIERTO", "BOSQUE",
        "CIELO", "ESTRELLA", "PLANETA", "UNIVERSO", "HISTORIA", "CULTURA", "RELIGION", "POLITICA", "EDUCACION",
        "COMPUTADORA", "INTERNET", "TECNOLOGIA", "INNOVACION", "FUTURO", "PASADO", "PRESENTE", "MUNDO", "GLOBAL",
        "EXPLORACION", "ESPACIO", "AVION", "BARCO", "TREN", "AUTOBUS", "MONTAÑA", "RIO", "MAR", "VIAJE"
    ];    
    numeroAleatorio = Math.floor(Math.random() * 100);
    palabra = palabrasEnEspanol[numeroAleatorio];   
    palabraUsuario = Array(palabra.length).fill('');
    return palabraEnArray = palabra.split('');  
    
}
letraA.addEventListener('click', () => {
    letra += "A";
    letraA.style.pointerEvents = 'none';
    letraA.style.backgroundImage = 'none';
});

letraB.addEventListener('click', () => {
    letra += "B";
    letraB.style.pointerEvents = 'none';
    letraB.style.backgroundImage = 'none';
});

letraC.addEventListener('click', () => {
    letra += "C";
    letraC.style.pointerEvents = 'none';
    letraC.style.backgroundImage = 'none';
});

letraD.addEventListener('click', () => {
    letra += "D";
    letraD.style.pointerEvents = 'none';
    letraD.style.backgroundImage = 'none';
});

letraE.addEventListener('click', () => {
    letra += "E";
    letraE.style.pointerEvents = 'none';
    letraE.style.backgroundImage = 'none';
});

letraF.addEventListener('click', () => {
    letra += "F";
    letraF.style.pointerEvents = 'none';
    letraF.style.backgroundImage = 'none';
});

letraG.addEventListener('click', () => {
    letra += "G";
    letraG.style.pointerEvents = 'none';
    letraG.style.backgroundImage = 'none';
});

letraH.addEventListener('click', () => {
    letra += "H";
    letraH.style.pointerEvents = 'none';
    letraH.style.backgroundImage = 'none';
});

letraI.addEventListener('click', () => {
    letra += "I";
    letraI.style.pointerEvents = 'none';
    letraI.style.backgroundImage = 'none';
});

letraJ.addEventListener('click', () => {
    letra += "J";
    letraJ.style.pointerEvents = 'none';
    letraJ.style.backgroundImage = 'none';
});

letraK.addEventListener('click', () => {
    letra += "K";
    letraK.style.pointerEvents = 'none';
    letraK.style.backgroundImage = 'none';
});

letraL.addEventListener('click', () => {
    letra += "L";
    letraL.style.pointerEvents = 'none';
    letraL.style.backgroundImage = 'none';
});

letraM.addEventListener('click', () => {
    letra += "M";
    letraM.style.pointerEvents = 'none';
    letraM.style.backgroundImage = 'none';
});

letraN.addEventListener('click', () => {
    letra += "N";
    letraN.style.pointerEvents = 'none';
    letraN.style.backgroundImage = 'none';
});

letraO.addEventListener('click', () => {
    letra += "O";
    letraO.style.pointerEvents = 'none';
    letraO.style.backgroundImage = 'none';
});

letraP.addEventListener('click', () => {
    letra += "P";
    letraP.style.pointerEvents = 'none';
    letraP.style.backgroundImage = 'none';
});

letraQ.addEventListener('click', () => {
    letra += "Q";
    letraQ.style.pointerEvents = 'none';
    letraQ.style.backgroundImage = 'none';
});

letraR.addEventListener('click', () => {
    letra += "R";
    letraR.style.pointerEvents = 'none';
    letraR.style.backgroundImage = 'none';
});

letraS.addEventListener('click', () => {
    letra += "S";
    letraS.style.pointerEvents = 'none';
    letraS.style.backgroundImage = 'none';
});

letraT.addEventListener('click', () => {
    letra += "T";
    letraT.style.pointerEvents = 'none';
    letraT.style.backgroundImage = 'none';
});

letraU.addEventListener('click', () => {
    letra += "U";
    letraU.style.pointerEvents = 'none';
    letraU.style.backgroundImage = 'none';
});

letraV.addEventListener('click', () => {
    letra += "V";
    letraV.style.pointerEvents = 'none';
    letraV.style.backgroundImage = 'none';
});

letraW.addEventListener('click', () => {
    letra += "W";
    letraW.style.pointerEvents = 'none';
    letraW.style.backgroundImage = 'none';
});

letraX.addEventListener('click', () => {
    letra += "X";
    letraX.style.pointerEvents = 'none';
    letraX.style.backgroundImage = 'none';
});

letraY.addEventListener('click', () => {
    letra += "Y";
    letraY.style.pointerEvents = 'none';
    letraY.style.backgroundImage = 'none';
});

letraZ.addEventListener('click', () => {
    letra += "Z";
    letraZ.style.pointerEvents = 'none';
    letraZ.style.backgroundImage = 'none';
});


generarPalabra();

const añadirPalabra = () => {
    letrasConvertidas = palabraEnArray.map(letra => letra.replace(letra,'_'));
    palabraAdivinar.textContent =  letrasConvertidas.join(' ');
    palabraAdivinar.style.right = '100%';
    palabraAdivinar.style.width = '40%'
    palabraAdivinar.style.display = 'flex';
    palabraAdivinar.style.justifyContent = 'center';
    palabraContainer.appendChild(palabraAdivinar);
    console.log(letrasConvertidas);
}
añadirPalabra();

const estaEnLaPalabra = () => {
    let index = 0;
    let lastIndex = 0;
    console.log(palabra);
    if(palabra.includes(letra)){
        index = palabra.indexOf(letra);
        palabraUsuario[index] += letra;
        if(palabra.includes(letra,index +1)){
            lastIndex = palabra.lastIndexOf(letra);
            palabraUsuario[lastIndex] += letra;
        }
    console.log(palabraUsuario);
    palabraEnArray.forEach((element, index) => {
        if (element === letra) {
          letrasConvertidas[index] = letra;
        }
      });
    console.log(letrasConvertidas);
    palabraAdivinar.textContent = letrasConvertidas.join(' ');
    palabraContainer.appendChild(palabraAdivinar);
    } else{
        fallo();
    }
    letra = ""; 
    if(intentos === 7){
        perder();
    }
    if(palabraUsuario.every(element => element !== '')){
        console.log(palabraUsuario.join(' '));
        ganar();
    };
}

const fallo = () => {
    intentos++;
    console.log(intentos);
    switch(intentos){
        case 1:
            crearAstil();
            break;
        case 2:
            crearCabeza();
            break;     
        case 3:
            crearTronco();
            break;
        case 4:
            crearBrazoDerecho();
            break;
        case 5:
            crearBrazoIzquierdo();
            break;
        case 6:
            crearPiernaDerecha();   
            break;
        case 7:
            crearPiernaIzquierda(); 
    }
}

const crearAstil = () => {
    const astil = document.createElement('div');
    astil.setAttribute('class', 'astil');
    contenedor.appendChild(astil);
}

const crearCabeza = () => {
    const cabeza = document.createElement('div');
    cabeza.setAttribute('class', 'cabeza');
    contenedor.appendChild(cabeza);
}

const crearTronco = () => {
    const tronco = document.createElement('div');
    tronco.setAttribute('class', 'tronco');
    contenedor.appendChild(tronco);
}

const crearBrazoIzquierdo = () => {
    const brazoIzquierdo = document.createElement('div');
    brazoIzquierdo.setAttribute('class', 'brazo-izquierdo');
    contenedor.appendChild(brazoIzquierdo);
}

const crearBrazoDerecho = () => {
    const brazoDerecho = document.createElement('div');
    brazoDerecho.setAttribute('class', 'brazo-derecho');
    contenedor.appendChild(brazoDerecho);
}

const crearPiernaDerecha = () => {
    const piernaDerecha = document.createElement('div');
    piernaDerecha.setAttribute('class', 'pierna-derecha');
    contenedor.appendChild(piernaDerecha);
}

const crearPiernaIzquierda = () => {
    const piernaIzquierda = document.createElement('div');
    piernaIzquierda.setAttribute('class', 'pierna-izquierda');
    contenedor.appendChild(piernaIzquierda);
}

const jugarDeNuevo = document.createElement('button');
const salir = document.createElement('button');
jugarDeNuevo.setAttribute('class', 'play-again');
salir.setAttribute('class', 'exit');
jugarDeNuevo.textContent = 'Jugar de nuevo';
salir.textContent = 'Salir';

const ganar = () => {
    const containerGanar = document.createElement('div');
    const ganasteTitulo = document.createElement('div');
    containerGanar.setAttribute('class', 'ganaste');
    ganasteTitulo.setAttribute('class', 'ganaste-h2');
    ganasteTitulo.textContent = 'Ganaste';
    document.body.appendChild(containerGanar);
    containerGanar.appendChild(ganasteTitulo);
    containerGanar.appendChild(jugarDeNuevo);
    containerGanar.appendChild(salir);
}

const reiniarYSalir = () => {
    jugarDeNuevo.addEventListener('click', () => {
        location.reload();
    })
    salir.addEventListener('click', () => {
        location.href = './index.html'
    })
}

const perder = () => {
    const containerPerder = document.createElement('div');
    const perdisteTitulo = document.createElement('div');
    containerPerder.setAttribute('class', 'perder');
    perdisteTitulo.setAttribute('class', 'perder-h2');
    perdisteTitulo.textContent = 'Perdiste';
    botones.style.visibility = 'hidden';
    document.body.appendChild(containerPerder);
    containerPerder.appendChild(perdisteTitulo);
    containerPerder.appendChild(jugarDeNuevo);
    containerPerder.appendChild(salir);
}

reiniarYSalir();

verificar.addEventListener('click' , () => {
    estaEnLaPalabra();
})