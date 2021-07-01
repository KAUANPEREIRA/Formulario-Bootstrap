// mascaras de campos inputs
   $(document).ready(function () { 
    $("#cpf").mask('000.000.000-00', {reverse: false});
    $("#telefone").mask('(00)0000-00000', {reverse:false});
    $("#nascimento").mask('00/00/0000', {reverse:false});
    $("#rg").mask('00.000.000-0',{reverse:false});
    $("#residencial").mask('(00)0000-0000',{reverse:false});
    $("#cep").mask('00000-000',{reverse:false});
    
});

let sucesso 


//função que valida se todos os campos estão preenchidos
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
    var sexo = document.getElementsByName('fsex')
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
    }
    else if(residencial.value == 0){
        alert('Preencha os dados corretamentes !')
    }else if(estado.value==0){
        alert('Preencha os dados corretamentes ! ')
    }else if(cidade.value==0){
        alert('Preencha os dados corretamentes!')
    }else if(cep.value==0){
        alert('Preencha os dados corretamentes !')
    }else if(sexo[0].checked != true && sexo[1].checked != true){
        alert('Preencha os dados corretamentes')
    }
    else{ 
        alert('Dados Cadastrados com Sucesso!')
        limpa_formulario()
    }

}


    function validaSexo(){
        if(sexo!= [0].checked || sexo!= [1].checked){
            alert('Preencha dos dados corretamentes')
        }
    }


    
    function limpa_formulario() {
        document.getElementsByTagName('form')[0].reset()
    }



  

    

$(document).ready(function() {
 
    function limpa_formulário_cep() {
        
        $("#rua").val("");
        $("#cidade").val("");
        $("#estado").val("");
    }
     
    
    $("#cep").blur(function() {

        
         cep = $(this).val().replace(/\D/g, '');

        
        if (cep != "") {

            
            var validacep = /^[0-9]{8}$/;

            
            if(validacep.test(cep)) {

                
                $("#rua").val("...");
                
                $("#cidade").val("...");
                $("#estado").val("...");

                
                $.getJSON("https://viacep.com.br/ws/" + cep + "/json/", function(dados) {

                    if (!("erro" in dados)) {
                        
                        $("#rua").val(dados.logradouro);
                    
                        $("#cidade").val(dados.localidade);
                        $("#estado").val(dados.uf);
                    } 
                    else {
                        
                        limpa_formulário_cep();
                        alert("CEP não encontrado.");
                    }
                });
            } 
            else {
                
                limpa_formulário_cep();
                alert("Formato de CEP inválido.");
            }
        } 
        else {
            
            limpa_formulário_cep();
        }
    });
});

  