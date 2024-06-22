function Button({text, event}){
    const coment ="botão responsivo para evento e texto"
    return <button onClick={event}>{text}</button>    
}
export default Button

