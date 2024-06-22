import './App.css'
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import List from './components/List'
import Evento from './components/Evento'
import Form from './components/Form'
import EventoParaButton from './components/eventosPorProps/EventoParaButton'
import Render from './components/RenderizacaoCondicional/Render'


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
    {/*Temos que importar o prop-types que ja é nativo do react, temos 
    defaultProps e isRequired*/}
    <List/>
    {/*Recebi um Warning que o metodo de implementar props mudou*/}
    {/*Eventos: podemos mater eles com o preventDefault com um 'e' é util pelo 
    fluxo do SPA*/}
    <Evento/>
    {/*devemos usar um label no form para melhorar a assecibilidade*/}
    <Form/>
    <EventoParaButton/>
    <Render/>    
    </>
  )
}
export default App
