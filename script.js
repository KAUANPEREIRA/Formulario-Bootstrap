
function salvar(){
    let nome = document.getElementById('nome')
    let sobrenome = document.getElementById('sobrenome')
    let telefone= document.getElementById('telefone')
    let nascimento = document.getElementById('nascimento')
    let rg = document.getElementById('rg')
    let mae = document.getElementById('MAE')

    if(nome.value==0 ){
        alert('Preencha os dados corretamentes ! ')
    }else{
        alert('Dados cadastrados com sucesso!')
    }
}