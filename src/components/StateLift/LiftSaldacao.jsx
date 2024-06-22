function LiftSaldacao({nome}) {
    function GerarSaudacao(algumNome) {
        return( 
        `Olá, ${algumNome}, tudo bem ?`
        )
    }
    return (
    <h2>
    {nome && GerarSaudacao(nome)}
    </h2>
    )
}
export default LiftSaldacao
