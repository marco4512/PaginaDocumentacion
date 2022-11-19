var a_element = document.getElementById("estado_del_arte_control");
var uno_intro = document.getElementById("uno_intro");
var controles_intro = document.getElementById("controles_intro");
var uno_estado = document.getElementById("uno_estado");
var controles_estado = document.getElementById("controles_estado");
var dialog_indice    = document.getElementById('dialog_indice');
var controles_dialog = document.getElementById('controles_dialog');

function desplazar(tema) {
    if (tema == 'estado_del_arte') {
        uno_intro.style.display = 'none';
        controles_intro.style.display = 'none';
        uno_estado.style.display = 'block';
        controles_estado.style.display = 'grid';
        dialog_indice.style.display = 'none';
        controles_dialog.style.display = 'none';
    }
    if (tema == 'introduccion') {
        uno_intro.style.display = 'block';
        controles_intro.style.display = 'grid';
        uno_estado.style.display = 'none';
        controles_estado.style.display = 'none';
    }
    if(tema == 'Dialog'){
        uno_estado.style.display = 'none';
        controles_estado.style.display = 'none';
        dialog_indice.style.display = 'block';
        controles_dialog.style.display = 'grid';

        
    }

}
