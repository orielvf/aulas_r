function Evento(){
    function meuEvento(e) {
        e.preventDefault()
        console.log('Fui ativado!')
    }
    return(
        <>
        <p>Clique para disparar um evento</p>
        <form onSubmit={meuEvento}>Form
            <p></p>
            <input type="text" placeholder="digite aqui"/>text
            <p></p>
            <input type="submit" value="cadastrar"/>submit
        </form>
        
        </>
    )
}

export default Evento