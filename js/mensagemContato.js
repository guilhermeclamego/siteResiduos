var bEnviar = document.querySelector('#enviar');

bEnviar.addEventListener("click", (event) => {
    event.preventDefault();

	var form = document.querySelector('#form-envio');
	//chama funções criadas
	var dados = obtemDadosDoFormulario(form);
	var erros = validaDados(dados);

	//verificar se tem erro de validacao
    if(erros.length > 0){
		exibeMensagensDeErro(erros);
		return;  //return vazio para dar um 'break', não continuar...	
	} else {
		alert('Comentário enviado com sucesso!');
	}
	form.reset();
	
});

//pegar os dados da formulario
function obtemDadosDoFormulario(form){
	
	var dados = {		
		nome: form.nome.value,
		email: form.email.value,
		comentario: form.comentario.value
	}
    console.log(dados);
	return dados;	
}


//validar os dados e criar um array com os erros
function validaDados(dados){

	var erros = [];
	
	if(dados.nome.length == 0){
		erros.push("Nome não pode ser em branco");
	}
	if(dados.email.length == 0){
		erros.push("E-mail não pode em branco");
	}
	if(dados.comentario.length == 0){
		erros.push("Comentário não pode ser em branco");
	}
	
	return erros;
}

//cria elemento dinamico de erro
function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";   //zerar a lista

    erros.forEach((erro) => {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}