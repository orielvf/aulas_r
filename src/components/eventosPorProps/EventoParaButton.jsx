import Button from './Button';
function EventoParaButton(){
    function primeiroEvento(e) {
        e.preventDefault()
        console.log('Primeiro evento')
    }
    function segundoEvento(e) {
        e.preventDefault()
        console.log('Segundo evento')
    }
    return(
        <>
        <h1>Eventos por Props</h1>
        <Button event={primeiroEvento} text="Primeiro Evento"></Button>
        <Button event={segundoEvento} text="Segundo Evento"></Button>
        
        </>
    )
}

export default EventoParaButton