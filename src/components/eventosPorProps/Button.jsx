function Button(props){
    const coment ="botão responsivo para evento e texto"
    return <button onClick={props.event}>{props.text}</button>    
}
export default Button