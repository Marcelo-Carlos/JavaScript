let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){ // Para verificar se é um número
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){//o de guanabara foi -1
        return true
    } else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value)) 
        let item = document.createElement('option')//necessário criar um item
        item.text = `valor ${num.value} adicionado.`
        lista.appendChild(item)//adicionar na lista
        res.innerHTML = ''  //LIMPAR RESULTADO     
        
    } else{
        alert('Valor invalido ou já encontrado na lista.')
    }
    num.value = ''//para limpar
    num.focus() // para apagar o numero negado
}

function finalizar(){
    if(valores.length == 0){
        alert('Adicione valores antes de finalizar!')
    } else{
        let tot = valores.length // QUANTIDADE DE VALORES QUE TEM
        let maior = valores[0]//ATRIBUI PRIMEIRO VALOR COMO MAIOR
        let menor = valores[0]// -- MENOR
        let soma = 0
        let media = 0

        for(let pos in valores){//POS É A POSIÇÃO NA VARIAVEL VALORES
            soma += valores[pos]
            
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma / tot

        res.innerHTML = ''//PARA ZERAR O VALOR
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}. </p>`
        res.innerHTML += `<p>A média dos valortes digitados é ${media} </p>`

    }
}





