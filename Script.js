// Função que será chamada quando clicar no botão
// Função: um bloco de código reutilizável que executa uma tarefa específica
function calcular(){
    // ============================================================================
    // 1. PEGAR OS ELEMENTOS DA TELA
    // ============================================================================

    // Aqui pegamos cada checkbox pelo Id
    let Hambúrguer = document.getElementById("Hambúrguer") 
    let Batata = document.getElementById("Batata Frita")
    let Nuggets = document.getElementById("Narguets")
    let  COQUINHAA = document.getElementById("coquinhaaa")
    let  CuecaCuela = document.getElementById("cueca-cuela")
    let Açaí = document.getElementById("Açaí")
    let sorvete = document.getElementById("sorvete")

    // ============================================================================
    // 2. VARIÁVEIS INICIAIS
    // ============================================================================

    // Total começa com 0
    let total = 0
    // String para guardar os itens escolhidos
    let itens = ""

    // ============================================================================
    // 3. VERIFICAR CADA PRODUTO
    // ============================================================================
    // Se o checkbox estiver marcado  (true)
    if(Hambúrguer.checked){
       total = total = +50 //soma o valor dos produtos
       itens = itens + "Hambúrguer <br>"
    }


if(Batata.checked){
       total = total = +30 
       itens = itens + "Batata <br>"
    }

    if(Nuggets.checked){
       total = total = +45
       itens = itens + "Nuggets <br>"
    }

    if(COQUINHAA.checked){
       total = total = +21
       itens = itens + "Coquinhaaaaa <br>"
    }
 
    if(CuecaCuela.checked){
       total = total = +31
       itens = itens + "Cueca Cuela <br>"
    }

    if(Açaí.checked){
       total = total = +96
       itens = itens + "Açaí <br>"
    }

    if(sorvete.checked){
       total = total = +98
       itens = itens + "Sorvete <br>"
    }

//========================================================
// 4. PEGAR DIV DO RESULTADO 
//==========================================================

let resultado = document.getElementById("resultado") 

//=========================================================
// 5. VALIDAÇÃO
//========================================================
//Caso nao tenha escolhido nenhum.

if (total === 0){
   resultado.innerHTML = "Escolha pelo menos um item"
    return //Para função aqui
}
//=========================================================
// 6. DESCONTO
//=========================================================

let subtotal = total 
let desconto = 0 
//se o valor for maior ou o igual a 30, aplicamos o desconto de 10% 
if (subtotal >= 25){
desconto = subtotal *0.10 //10%

}
//====================================================
// 7. ENTREGA
//====================================================

let entrega = 5 
// se passar 50 -> Entrega grátis
if( subtotal - desconto >= 50){
    entrega = 0
}

 // ================================================
    // 8. TOTAL FINAL
    //==================================================
    let totalFinal = subtotal - desconto + entrega

    //==================================================
    // 9. MOSTRAR O RESULTADO
    //=================================================
    resultado.innerHTML =
    "<strong>Itens:</strong><br>"+
    itens +
    "<br> Subtotal: R$ " + subtotal.toFixed(2)+
    "<br> Desconto: R$ " + desconto.toFixed(2)+
    "<br> Entrega: R$ " + entrega.toFixed(2)+
    "<br><strong> Total: R$  " + totalFinal.toFixed(2) + "</strong>"

}