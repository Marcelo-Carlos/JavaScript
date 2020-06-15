function tabuada(){
    
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    
    if(num.value.length == 0){
        alert('Por favor, digite um número!')        
    }else{
        var n = Number(num.value)        
        tab.innerHTML = '' //PARA LIMPAR TENTATIVAS ANTERIORES
        /*var c = 1
        while(c <= 10){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            //item.value = `tab${c}` Faz mais sentido pra outras linguagens, n pro JS
            tab.appendChild(item)
            c++
        }*/

        for(c = 1; c <= 10; c++){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            tab.appendChild(item)
            //item.value = `tab${c}`

        }

    }   
     
    
}

