function verificar(){
    var data = new Date()
    var ano = data.getFullYear()//para pegar o ano com 4 digitos
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    
    if(fano.value.length == 0 || Number(fano.value) > ano){
        alert('Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''

        var img = document.createElement('img')//para criar dinamicamente
        img.setAttribute('id', 'foto')// Para criar um id com JS

        if(fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'bebe-masc.jpg')
                
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'jovem-masc.jpg')
            } else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'adulto-masc.jpg')
            } else{
                //Idoso
                img.setAttribute('src', 'idoso-masc.jpg')
            }
            } else if(fsex[1].checked){//poderia usar só o else
            genero = 'Mulher'

            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'bebe-fem.jpg')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'jovem-fem.jpg')
            } else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'adulto-fem.jpg')
            } else{
                //Idoso
                img.setAttribute('src', 'idoso-fem.jpg')
            }
        }
        res.style.textAlign = 'center' // Centralizar por JS
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)//para adicionar imagem        
    }
}
