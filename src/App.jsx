import './App.css'
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import List from './components/List'


function App() {
  const nome = "maria"
  const pic150x = "https://via.placeholder.com/150"

  return (
    <>
    {/*Componente basico com hello world*/}
    <HelloWorld/>
    
    {/*componente usando props*/}
    <SayMyName nome="Oriel"/>
    
    {/*podemos usar com uma propriedade dinâmica*/}
    <SayMyName nome={nome}/>
    
    {/*Varias props dentro de um componente e desestruturadas*/}
    <Pessoa
      nome= "João"
      foto= {pic150x} 
      profissao="Lenhador"
      idade="28" 
    />

    {/*Temos que importar o prop-types que ja é nativo do react, temos defaultProps e isRequired*/}
    <List/>

    {/*Recebi um Warning que o metodo de implementar props mudou*/}

    </>
  )
}
export default App
