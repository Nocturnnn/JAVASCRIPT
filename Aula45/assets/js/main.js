

function getTimeFromSeconds(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
    
}

const relogio = document.querySelector('.relogio');
let segundos = 0;
let timer;

function iniciaRelogio() {
    relogio.classList.remove('pausado');
    timer = setInterval(function(){
    segundos++;
    relogio.innerHTML = getTimeFromSeconds(segundos);
    }, 1000);
}

document.addEventListener('click', function(e){
    const el = e.target;

    if(el.classList.contains('iniciar')){
        relogio.classList.remove('pausado');
        clearInterval(timer);
        iniciaRelogio();
    }
    else if(el.classList.contains('pausar')){
        relogio.classList.add('pausado');
    clearInterval(timer);
    }
    else if(el.classList.contains('zerar')){
        relogio.classList.remove('pausado');
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
    }
});


//Se tiver muitos botões esse metodo acaba sendo menos performatico

/*iniciar.addEventListener('click', function(event){
    clearInterval(timer);
    iniciaRelogio();
});

pausar.addEventListener('click', function(event){
    relogio.classList.add('pausado');
    clearInterval(timer);
});

zerar.addEventListener('click', function(event){
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;
});*/
