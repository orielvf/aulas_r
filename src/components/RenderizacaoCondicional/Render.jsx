import { useState } from 'react'
import Button from '../eventosPorProps/Button'


function Render(){
    const [email,setEmail]= useState()
    const [email2,setEmail2]= useState()

    function enviarEmail(e){
        e.preventDefault()
        setEmail2(email)  
    }
    function ApagarEmail2()
    {
        setEmail2('')
    }
    return(
    <>
    <h1>Renderização condicional</h1>
    <form>
    <label htmlFor="email">Email: </label>
    <input
        id="email" 
        name="email"
        placeholder="Digite seu email"
        type="email"
        onChange={ (e) => setEmail(e.target.value)}
    />
    <Button 
        tipo="submit" 
        evento={enviarEmail} 
        texto="Submit"
    />
        {email2 &&(
        <div>
        {email2}
        <Button
        texto ="Apagar"
        evento={ApagarEmail2}
        tipo="button"
        ></Button>
        </div>        
    )}
    </form>  



    </>
    )
}

export default Render


