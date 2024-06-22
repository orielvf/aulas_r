function RenderizacaoDeListas({lista, titulo}) {
 return (
    <>
    <h1>{titulo}</h1>
    {lista &&(
    lista.length > 0 ? (
    lista.map((item, index) =>
    <p key={index}>{item}</p>)
    ) : (
        <p>Não há iten na lista!</p>
    ))}
    </>
 )   
}
export default RenderizacaoDeListas