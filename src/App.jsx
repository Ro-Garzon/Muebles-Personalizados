import React from 'react'
import { useState, useEffect } from 'react'
import { Categorias } from './components/Categorias'
import { FiltradoLista } from './components/FiltradoLista'
import {Loading} from './components/Loading'
import './style/App.css'
import whatsapp from './assets/whatsapp-black.png'
import whatsapp2 from './assets/whatsapp-white.png'
import { FiFilter } from "react-icons/fi";


function App() {

  const urlBase='https://ro-garzon.github.io/json-furniture/muebles.json'

  
  const [muebles, setMuebles] = useState([])

  const [loading, setLoading] = useState(false)

  const [muebleFiltrado, setMuebleFiltrado] = useState([])

  const [showFilter, setShowFilter] = useState(false)

  const [category, setCategory] = useState("")

 

 
  
  useEffect(() =>{
    fetchMuebles()
  },[])

  
  const fetchMuebles = async () =>{

    setLoading(true)
    try{
      const response = await fetch (`${urlBase}`)
      if(!response.ok){
        throw new Error ('Network response was not ok')
      }
      const data = await response.json()
      setMuebles(data)
      setMuebleFiltrado(data)
      setCategory("Todo")
      setLoading(false)
    }catch (error){
      console.error("Ha ocurido un error: ", error)
      setLoading(false)
    }
   
  }
 
  
 
  const categorias = ['Todo',...new Set(muebles.map(mueble => mueble.category))]


  const filtrarCategorias = (categoria) => {
    if (categoria === 'Todo' ){
      setMuebleFiltrado (muebles)
      setCategory(categoria)
      return
    }
    const filtrarMuebles = muebles.filter( muebles => muebles.category === categoria)
    setMuebleFiltrado(filtrarMuebles)
    setCategory(categoria)
  }
 


  return (
    <> 
      <header className='header'>
        <h1 className='title'>Muebles Personalizados</h1>
        <p className='subtitle'>Diseñamos con estilo y funcionalidad</p> 
      </header>
      
      <div className='contact'>
        <a className='unstyle contact-link' target="_blank" href="https://wa.me/5493876181319">
          <p>Solicitá tu presupuesto sin cargo</p>
          <img src={whatsapp } alt="whatsapp" className='contact-icono' />
        </a>
      </div>
      
      

      {loading? <Loading/>  : (
        <>
          <div className='filter-box'>
            <button 
              className='unstyle filter-button'
              onClick={() => setShowFilter(true)}
              >
              <p className="filter-title">Filtrar</p>
              <FiFilter/>
            </button> 
            <p className='labelCategory'>Categoría {'>>'} {category}</p>
          </div>

          <main className='container'>
            <Categorias 
            categorias= {categorias} 
            filtrarCategorias= {filtrarCategorias}
            setShowFilter={setShowFilter}
            showFilter={showFilter}
            />
            <FiltradoLista muebleFiltrado={muebleFiltrado}/>
          </main>

        </>
        
      )}

        <a className='unstyle contact-whatsapp' target="_blank" href="https://wa.me/5493876181319">
          <img src={whatsapp2} alt="whatsapp" className='contact-img' />
        </a>
        
      
      
      <footer className='foot'>
        <a href="https://www.linkedin.com/in/ro-garzon/" target="_blank" className='unstyle creator-link'>
          <p>Creado por Rog - 2024</p>
        </a>
        
      </footer>


    </>
  )
}

export default App


