function contar(){
    var inicio = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = `Digite um número acima de 1`
    }else{
        res.innerHTML = `Contando...`
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    
    if(i < f){

    for(c = i; c <= f; c += p)
        res.innerHTML += `${c} \u{1F449}`
    
    }

    if(i >   f){

    for(c = i; c >= f; c -= p)
        res.innerHTML += `${c} \u{1F449}`
    }

    }
}
    
