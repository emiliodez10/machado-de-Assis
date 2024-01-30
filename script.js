const botaoplaypause = document.getElementById('play-pause');
const botaoavancar = document.getElementById('proximo')
const botaovoltar = document.getElementById('anterior')
const nomecapitulo = document.getElementById('Capitulo ')
const audioCapitulo = document.getElementById('audio-capitulo')

const numerocapitulos = 10;
let taTocando = 0;
let capituloatual = 1;

function tocarFaixa() {
    audioCapitulo.play();
    botaoplaypause.classList.remove('bi-play-circle-fill');
    botaoplaypause.classList.add('bi-pause-circle-fill')
}
function pausarFaixa() {
    audioCapitulo.pause();
    botaoplaypause.classList.add('bi-play-circle-fill');
    botaoplaypause.classList.remove('bi-pause-circle-fill')
}

function tocaroupausar(){
    if(taTocando === 0){
        tocarFaixa();
        taTocando = 1;
    }else{
        pausarFaixa();
        taTocando = 0;
    }
}

function tocarnomeFaixa(){
    nomecapitulo.innerText = 'Capitulo ' + capituloatual; 
}

function proximafaixa(){
    if(capituloatual === numerocapitulos){
        capituloatual = 1;
    } else {
        capituloatual = capituloatual + 1;
    }
    
    audioCapitulo.src = './books/' + capituloatual + '.mp3';
    tocarFaixa();
    taTocando = 1;
    tocarnomeFaixa();
}

function voltafaixa(){
    if(capituloatual === 1){
        capituloatual = numerocapitulos;
    } else {
        capituloatual = capituloatual - 1;
    }
    
    audioCapitulo.src = './books/' + capituloatual + '.mp3';
    tocarFaixa();
    taTocando = 1
    tocarnomeFaixa();
}

botaoplaypause.addEventListener('click', tocaroupausar);
botaoavancar.addEventListener('click', proximafaixa)
botaovoltar.addEventListener('click', voltafaixa)