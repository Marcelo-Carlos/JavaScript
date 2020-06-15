var agora = new Date()
var diaSem = agora.getDay() // No JS é mostrado a numeração do dia ex: sexta = 5
// 0 = dom; 1 = seg; 2 = ter; 3 = quar; 4 = quin; 5 = sex; 6 = sab; 7 = dom

console.log(diaSem)
switch(diaSem){
    case 0:
        console.log("Domingo")
        break
    case 1:
        console.log("Segunda")
        break
    case 2:
        console.log("Terça")
        break
    case 3:
        console.log("Quarta")
        break
    case 4:
        console.log("Quinta")
        break
    case 5:
        console.log("Sexta")
        break
    case 6:
        console.log("Sabado")
        break
    case 7:
        console.log("Domingo")
    default:
        console.log("Dia Invalido")// caso não seja nenhuma das anteriores
        break// break opcional pois n tem outros comandos abaixo
}

