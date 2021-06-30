
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


  

    

$(document).ready(function() {
 
    function limpa_formulário_cep() {
        // Limpa valores do formulário de cep.
        $("#rua").val("");
        $("#cidade").val("");
        $("#estado").val("");
    }
     
    //Quando o campo cep perde o foco.
    $("#cep").blur(function() {

        //Nova variável "cep" somente com dígitos.
         cep = $(this).val().replace(/\D/g, '');

        //Verifica se campo cep possui valor informado.
        if (cep != "") {

            //Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/;

            //Valida o formato do CEP.
            if(validacep.test(cep)) {

                //Preenche os campos com "..." enquanto consulta webservice.
                $("#rua").val("...");
                
                $("#cidade").val("...");
                $("#estado").val("...");

                //Consulta o webservice viacep.com.br/
                $.getJSON("https://viacep.com.br/ws/" + cep + "/json/", function(dados) {

                    if (!("erro" in dados)) {
                        //Atualiza os campos com os valores da consulta.
                        $("#rua").val(dados.logradouro);
                    
                        $("#cidade").val(dados.localidade);
                        $("#estado").val(dados.uf);
                    } //end if.
                    else {
                        //CEP pesquisado não foi encontrado.
                        limpa_formulário_cep();
                        alert("CEP não encontrado.");
                    }
                });
            } //end if.
            else {
                //cep é inválido.
                limpa_formulário_cep();
                alert("Formato de CEP inválido.");
            }
        } //end if.
        else {
            //cep sem valor, limpa formulário.
            limpa_formulário_cep();
        }
    });
});

  