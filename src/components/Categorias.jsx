import { useState } from 'react'

export const Categorias = ({categorias, filtrarCategorias, setShowFilter, showFilter}) => {

  const [categoryActive, setCategoryActive] = useState("Todo")


  const handleFilterCategory = (categoria) =>{
    filtrarCategorias(categoria)
    setCategoryActive(categoria)
    setShowFilter(false)
  }
  

  return (
    <>
      
      <div className={showFilter? 'category-box active' : 'category-box'}>
        <div className="category-title">
          <p>Categorías</p>
          <button 
            className="unstyle category-close"
            onClick={() => setShowFilter(false)}
            >🗙</button>
        </div>
        
        
          {categorias.map(categoria => (
            <div key={categoria}>
              <button 
                className={categoryActive==categoria? 'unstyle category-item item-active' :'unstyle category-item'}
                onClick = {()=>handleFilterCategory(categoria)}
                >{categoria}
              </button>
            </div>
          ))}
        </div>

    </>

  )
}
