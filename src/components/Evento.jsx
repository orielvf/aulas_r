function Evento(){
    function meuEvento(e) {
        e.preventDefault()
        console.log('Fui ativado!')
    }
    return(
        <>
        <p>Teste de eventos</p>
        <form onSubmit={meuEvento}>
            <p></p>
            <input type="text" placeholder="digite aqui"/>text
            <p></p>
            <input type="submit" value="cadastrar"/>submit
        </form>
        
        </>
    )
}

export default Evento