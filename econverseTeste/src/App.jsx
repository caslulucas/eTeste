import { Category } from "./components/Category"
import { Header } from "./components/Header"
import { NavProduct } from "./components/NavProduct"
import { TitleMain } from "./components/TitleMain"

import "./styles/components/app.sass"

import { Promotion } from "./components/Promotion"
import { Produto } from "./components/Produto"
import { Colaborators } from "./components/Colaborators"
import { Marks } from "./components/Marks"
import { Footer } from "./components/Footer"

function App() {
  return (
    <div id="aplication">
      <Header />
     <Promotion />
      <Category />
      <TitleMain />
      <NavProduct />
      <Produto />
      <Colaborators/>

      <TitleMain />
      <Produto />
      <Colaborators/>
      <Marks />

      <TitleMain />
      <Produto />
      <Footer />    
    </div>
  )
}

export default App
