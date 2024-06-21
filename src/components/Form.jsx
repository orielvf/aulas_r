import { useState } from "react";
function Form (){
    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(nome, senha)
        console.log(`cadastrou ${nome} com a senha ${senha}`)
    }

    const [nome, alteraNome] = useState()
    const [senha, alteraSenha] = useState()
    const ex = 'useState(ex) fazendo assim ja carregar algo'

    return (
        <>
        <h1>Meu form</h1>
        <form onSubmit={cadastrarUsuario}>
        <label htmlFor="nome">Nome: </label>
            <input
            type="text" id="nome" name="nome" placeholder="Digite o seu nome"
            onChange={(e) => alteraNome (e.target.value)}
            />
            <p></p>
        <label htmlFor="senha">Senha: </label>
            <input
            type="text" id="senha" name="senha" placeholder="Digite a sua senha"
            onChange={(e) => alteraSenha (e.target.value)}
            />
            <p></p>
            <input type="submit" value="Cadastrar" />
        </form>
        </>
    )
}
export default Form