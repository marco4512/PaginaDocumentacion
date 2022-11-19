console.log('cargando')
var a_element = document.getElementById("desplegar");
var div= document.getElementById("menu_lateral_des");
var iframe= document.getElementById("Mostar_menu_lateral");
var colab= document.getElementById("colapsar");
var intro= document.getElementById("introduccion_click");
var sub_menu_intro = document.getElementById("sub_menu_intro");
var estado = document.getElementById("Estado_click")
var sub_menu_intro2 = document.getElementById("sub_menu_intro_2");

a_element.addEventListener("click", function(){
    console.log('se oprimio a')
    div.style.visibility='visible';
    iframe.style.visibility='visible';
    a_element.style.visibility='hidden';
    
    }, false);


    colab.addEventListener("click", function(){
        console.log('se oprimio colab')
        div.style.visibility='hidden';
        a_element.style.visibility='visible';
        
        }, false);
intro.addEventListener("click", function(){
    let elementStyle = window.getComputedStyle(sub_menu_intro);
    let elementvisibiliti = elementStyle.getPropertyValue('display');
    console.log(elementvisibiliti)
    if (elementvisibiliti =='none'){
        sub_menu_intro.style.display='block';
    }
    else{
        sub_menu_intro.style.display='none';
    }
    
    }, false);
estado.addEventListener("click", function(){
        let elementStyle = window.getComputedStyle(sub_menu_intro2);
        let elementvisibiliti = elementStyle.getPropertyValue('display');
        console.log(elementvisibiliti)
        if (elementvisibiliti =='none'){
            sub_menu_intro2.style.display='block';
        }
        else{
            sub_menu_intro2.style.display='none';
        }
        
        }, false);
function cerrar(){
        console.log('ocuLTAR')
        div.style.visibility='hidden';
        a_element.style.visibility='visible';
        iframe.style.display='none';
}