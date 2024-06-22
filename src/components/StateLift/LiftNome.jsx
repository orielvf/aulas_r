function LiftNome({titulo, setNome }) {
    return (
        <>
        <h1>{titulo}</h1>
        <input
        type="text"
        placeholder="Qual é seu nome ?"
        onChange={(e)=> setNome(e.target.value)}
        />
        </>
    )
}
export default LiftNome