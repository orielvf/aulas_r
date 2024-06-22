function Button({texto, evento, tipo}){
    const coment ="botão responsivo para evento e texto"
    return <button type={tipo}onClick={evento}>{texto}</button>    
}
export default Button

