export function Pessoa({nome, foto, profissao, idade}) {
    return (
        <>
        <img src={foto} alt={nome}/>
        <h2>Nome: {nome}</h2>
        <p>Profissão: {profissao}</p>
        <p>Idade: {idade}</p>        
        </>
    )
}