function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 13
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12){
        //Bom dia!
        img.src = '/Aula12/ex14/manha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if(hora >= 12 && hora < 18){
        //Boa tarde!
        img.scr = '/Aula12/ex14/tarde.jpg'
        document.body.style.background = '#b9846f'
    }else{
        //Boa noite!
        img.src = '/Aula12/ex14/noite.jpg'
        document.body.style.background = '#515154'
    }
}