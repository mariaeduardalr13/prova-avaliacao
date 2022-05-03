function calc(){
    //entrada
    cores = document.form.cores.value;

    //processamento
    if(Cores == "Rosa"){
        valor = 1500;
    }
    else if (Cores == "Preto"){
        valor = 1800;
    }
    else{
        valor = 2300;
    }
    
    //saída
    document.getElementById('total').value = valor;

    document.getElementById('Salto alto').checked = false;
    document.getElementById('Tênis personalizado').checked = false;


    
}

function opcionais(valor,marcado){
    //entrada
    total = document.getElementById('total').value;
    
    //processamento
    if (marcado){
      total = Number(total) + Number(valor);
    }
    else{
      total = Number(total) - Number(valor);
      
    }
    
    //saída
    document.getElementById('total').value = total;
}

function trocaTema(){

    //entrada
    tema = document.getElementById('tema').value;
    

    //processamento
    if (tema == "vest_longo") {
        titulo = "Vestido longo";
        cor = "blue";

        altura = "85%";
        right = "0%";
        bottom = "-5%";
      }
    else if (tema == "vest_curt"){   
        titulo = "Vestido curto";
        cor = "purple";

        altura = "90%";
        right = "5%";
        bottom = "-5%";
    }
    else if(tema == "vest_dois"){   
        titulo = "Vestido dois em um";
        cor = "blue";

        altura = "85%";
        right = "-2%";
        bottom = "0%";
    }
    else{
        newFundo = "";
        newFoto = "";    
        titulo = "Tipo de roupa";
        cor = "black";

        altura = "100%";
        right = "0%";
        bottom = "0%";
    }
 

    //saída
    document.body.style.backgroundImage = "url(" + newFundo + ")";
    document.getElementById('foto').src = newFoto;
    document.getElementById('titulo').value = titulo;
    document.getElementById('titulo').style.color = cor;
    document.body.style.color = cor;

    document.getElementById('foto').style.height = altura;
    document.getElementById('foto').style.right = right;
    document.getElementById('foto').style.bottom = bottom;

}

function alerta(){
    //entrada
    total = document.getElementById('total').value;
    msg = "Obrigada pela Preferêcia. ";
    //processamento
    /*if (total < 1500){
        msg = "Selecione a cor"
    }
    else
        msg = "Obrigada pela Preferêcia. ";
    
        if (total >= 2500) {
            total = total * 0.9;
            msg += "Você recebeu um desconto de 10%. ";
        }
  
        msg += "Valor a Pagar R$ " + total;
  
    }*/
    
   //saída
   //alert(msg);
    
    document.getElementById('mensagem').value = msg;
    $('#alerta').modal('show');
    
}