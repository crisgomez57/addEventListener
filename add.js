/* ********** keypress ********** */
const emojiInput = document.getElementById('emojiInput');
const emojiResult = document.getElementById('emojiResult');
// Lista de emojis: https://gist.github.com/ikr7/c72843556ef3a12014c3
const emojis = [
    '😄','😃','😀','😊','😉','😍','😘','😚','😗','😙','😜','😝','😛','😳','😁','😔','😌','😒','😞','😣','😢','😂','😭','😪','😥','😰','😅','😓','😩','😫','😨','😱','😠','😡','😤','😖','😆','😋','😷','😎','😴','😵','😲','😟','😦','😧','😈','👿','😮','😬','😐','😕','😯','😶','😇','😏','😑','👲','👳','👮','👷','💂','👶','👦','👧','👨','👩','👴','👵','👱','👼','👸','😺','😸','😻','😽','😼','🙀','😿','😹','😾','👹','👺','🙈','🙉','🙊','💀','👽','💩'
  ];

emojiInput.addEventListener('keypress', changeEmoji);

function changeEmoji() {
    emojiPick = emojis[Math.floor(Math.random() * emojis.length)];
    emojiResult.innerHTML = emojiPick;
}


/* ********** mouseover ********** */
const resetBtn = document.getElementById('reset');
const pipesHitBox = document.querySelectorAll('.pipeHitBox');
const message = document.getElementById('message');
const dieCount = document.getElementById('dieCount');

// Agregar evento a los tubos

pipesHitBox.forEach( function (pipeHitBox) {
    pipeHitBox.addEventListener('mouseover', youCrashed);
});

let i = 1;
function youCrashed() {
    // Habilitar botón y mostrar mensaje "PERDISTE"
    resetBtn.disabled = false;
    message.style.display = 'flex';
  
    // Aumentar contador
    dieCount.innerText = 'MUERTES: ' + i++;
}
  
resetBtn.addEventListener('click', function () {
    // Deshabilitar botón y ocultar mensaje
    resetBtn.disabled = true;
    message.style.display = 'none';
});


/* ********** blur and focus ********** */

document.getElementById('foco').addEventListener('focus', (event) => {   // Otra forma de hacer una función
    event.target.style.background = 'pink'; 
});

document.getElementById('foco').addEventListener('blur', (event) => {   // Otra forma de hacer una función
    event.target.style.background = ''; 
});


/* ********** click ********** */

var titulo = document.getElementById('titulo');

document.getElementById('rojo').addEventListener('click', (event) => {   // Otra forma de hacer una función
    event.target.style.background = 'red';
    titulo.style.color = 'red'; 
});

document.getElementById('azul').addEventListener('click', (event) => {   // Otra forma de hacer una función
    event.target.style.background = 'blue';
    titulo.style.color = 'blue'; 
});


/* ********** mousedown mousemove mouseover mouseout ********** */

var img = document.getElementById('img');

img.addEventListener('mousedown', aporreado);
img.addEventListener('mousemove', cosquillas);
img.addEventListener('mouseout', triste);
img.addEventListener('mouseup', sorpresa);

function aporreado() {
    img.setAttribute("src", "./img/mousedown_aporreado.png");
}

function cosquillas() {
    img.setAttribute("src", "./img/mousemove_cosquillas.png");
}

function triste() {
    img.setAttribute("src", "./img/mouseout_triste.png");
}

function sorpresa() {
    img.setAttribute("src", "./img/mouseup_sorprendido.png");
}

