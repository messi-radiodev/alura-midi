function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    // retirado o elemento === null, pois o js já entende se o elemento for nulo, não definido... apenas com o elemento
    if (elemento && elemento.localName === "audio") {
        elemento.play(); 
    } else {
        console.log ("Elemento não encontrado ou seletor inválido.");
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

/* estrutura de repetição while
let contador = 0;
while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

// função anonima    
    tecla.onclick = function () {
        tocaSom(idAudio)
    }

    contador++;
}
*/

// estrutura de repeticao for
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
  
// função anonima  
    tecla.onclick = function () { 
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (e) {

        if (e.code === 'Space' || e.code === 'Enter') {
            tecla.classList.add ("ativa");
        }

    }

    tecla.onkeyup = function (e) {
        tecla.classList.remove ("ativa")
    }
}



