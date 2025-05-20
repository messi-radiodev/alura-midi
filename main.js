function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

/* estrutura de repetição while
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
  
    tecla.onclick = function () { // função anonima  
        tocaSom(idAudio);
    }
}



