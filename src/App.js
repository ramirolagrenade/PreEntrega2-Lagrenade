import './App.css' 
import { BrowserRouter, Routes, Route } from "react-router-dom" 
import ItemListContainer from './Components/IntemListContainer' 
import ItemDetailContainer from './Components/ItemDetailContainer' 
import NavBar from './Components/NavBar' 
import LogoMenu from './Components/LogoM' 


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='App-header'>
          <LogoMenu />
          <div className='justify-content-center menu2'>
            <NavBar />
          </div>
        </div>
        <div className='fondo'>
          <Routes>
            <Route path={"/"} exact element={<ItemListContainer/>} />
            <Route path={"/genero/:id"} exact element={<ItemListContainer/>}/>
            <Route path={"/item/:id"} element={<ItemDetailContainer/>}/>
          </Routes>
        </div>

      </BrowserRouter>

    </div>
  ) 
}

export default App 