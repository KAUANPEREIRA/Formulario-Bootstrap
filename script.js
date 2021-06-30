
   $(document).ready(function () { 
    $("#cpf").mask('000.000.000-00', {reverse: false});
    $("#telefone").mask('(00)0000-00000', {reverse:false});
    $("#nascimento").mask('00/00/0000', {reverse:false});
    $("#rg").mask('00.000.000-0',{reverse:false});
    $("#residencial").mask('(00)0000-0000',{reverse:false});
    $("#cep").mask('00000-000',{reverse:false});
    
});



function salvar(){
    var nome = document.getElementById('nome')
    var sobrenome = document.getElementById('sobrenome')
    var telefone= document.getElementById('telefone')
    var nascimento = document.getElementById('nascimento')
    var rg = document.getElementById('rg')
    var mae = document.getElementById('mae')
    var pai = document.getElementById('pai')
    var email = document.getElementById('email')
    var cpf = document.getElementById('cpf')
    var sexo = document.getElementById('fsex')
    var residencial = document.getElementById('residencial')
    var estado = document.getElementById('estado')
    var cidade = document.getElementById('cidade')
    var cep = document.getElementById('cep')




    if(nome.value==0 ){
      alert('Preencha os dados corretamentes ! ')
    }else if(sobrenome.value==0){
        alert('preencha os dados corretamentes !')
    }else if(telefone.value==0){
        alert('preencha os dados corretamentes ! ')
    }else if(nascimento.value==0){
        alert('Preencha os dados corretamentes !')
    }else if(rg.value==0){
        alert('Preencha os dados corretamentes !')
    }else if(mae.value==0){
        alert('Preencha os dados corretamentes !')
    }else if(pai.value==0){
        alert('Preencha os dados corretamentes !')
    }else if(email.value==0){
        alert('Preencha os dados corretamentes !')
    }else if(cpf.value.value==0){
        alert('Preencha os dados corretamentes !')
    }else if(sexo.value==0){
        alert('Preencha os dados corretamentes !')
    
    }else if(residencial.value == 0){
        alert('Preencha os dados corretamentes !')
    }else if(estado.value==0){
        alert('Preencha os dados corretamentes ! ')
    }else if(cidade.value==0){
        alert('Preencha os dados corretamentes!')
    }else if(cep.value==0){
        alert('Preencha os dados corretamentes !')
    }else{
        alert('Dados Cadastrados com Sucesso!')
    }

}


$(document).ready(function(){

    $("#cep").blur(function(){
    
    cep = $(this).val();
    let url = "https://viacep.com.br/ws/" + cep + "/json/";
    
    $.get(url, function(resultado){
    $("#rua").val(resultado.rua);
    $("#estado").val(resultado.estado);
    $("#cidade").val(resultado.cidade);
    
    });
    });
    });
    


  