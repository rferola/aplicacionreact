import './App.css';
// import Button from './components/Button/Button' Esto lo dejé de la clase
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContanier/ItemListContainer';


function App() {
  return (
    <div className="App">

      {/* Esto lo dejé de la clase! Pero no lo voy a usar por ahora */}
          {/* <Button label={'CANCELAR'} background='red' color='black' />
           <Button label={'ACEPTAR'} background='green' color='white' /> */ } 


 <Navbar></Navbar>
 <ItemListContainer greeting={'Gracias por elegirnos'}/>

   
    </div>
  );
}

export default App;
