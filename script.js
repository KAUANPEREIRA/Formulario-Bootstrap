
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
    }else{
        alert('Dados cadastrados com sucesso !')
    }

}


  