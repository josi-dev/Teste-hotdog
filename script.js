let menu = document.getElementById("opcoes-menu")
let figura = [...document.querySelectorAll("#galeria figure")]






function menuDeslocamento() {
    
    let estiloComput = window.getComputedStyle(menu)
    let matrix = new DOMMatrix(estiloComput.transform)
    let valorSeparado = matrix.m41
    console.log(valorSeparado)
    
    if(valorSeparado == '-180') {
        
        menu.style.transform = "translateX(0)"
        menu.style.transition = "transform 500ms linear"
        
        setTimeout(()=>{menu.children[0].style.transform='translateX(0px)';menu.children[0].style.transition='transform 500ms linear'},300)
        
        setTimeout(()=>{menu.children[1].style.transform='translateX(0px)';menu.children[1].style.transition='transform 500ms linear'},500)
        
        setTimeout(()=>{menu.children[2].style.transform='translateX(0px)';menu.children[2].style.transition='transform 500ms linear'},600)
        
        setTimeout(()=>{menu.children[3].style.transform='translateX(0px)';menu.children[3].style.transition='transform 500ms linear'},700)
        
        
    }else {
        
        setTimeout(()=>{menu.children[0].style.transform='translateX(-180px)';menu.children[0].style.transition='transform 500ms linear'},300)
        
        setTimeout(()=>{menu.children[1].style.transform='translateX(-180px)';menu.children[1].style.transition='transform 500ms linear'},500)
        
        setTimeout(()=>{menu.children[2].style.transform='translateX(-180px)';menu.children[2].style.transition='transform 500ms linear'},600)
        
        setTimeout(()=>{menu.children[3].style.transform='translateX(-180px)';menu.children[3].style.transition='transform 500ms linear'},700)
        
        setTimeout(()=>{menu.style.transform = "translateX(-180px)";menu.style.transition = "transform 500ms linear"},1200)

    }
    
    
    
    
    
}






let pro = [...document.querySelectorAll("#galeria figure")]
let positionProduct = 0

function setaDireita() {
    
    pro[positionProduct +1].scrollIntoView({behavior: 'smooth'})
    positionProduct++
    
}


function setaEsquerda() {
    
    pro[positionProduct -1].scrollIntoView({behavior: 'smooth'})
    positionProduct--
}