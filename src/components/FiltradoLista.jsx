import { ModalSlider } from "./ModalSlider"
import { useState, Suspense} from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';




export const FiltradoLista = ({muebleFiltrado}) => {

  const [isOpen, setIsOpen] = useState(false)

  const [selectedImages, setSelectedImages] = useState([])

  

  const handleModal = (details)=>{
    setIsOpen(true)
    setSelectedImages(details)
  }


  return (
    <>
      <div className='muebles-list'>
        {muebleFiltrado.map((mueble) =>(
          <figure key={mueble.id} className='card'>
              <LazyLoadImage 
                className='card-image' 
                src={mueble.imagen[0]} 
                alt="Foto del mueble"
              /> 
            <h2 className='card-title'>{mueble.title}</h2>
            <button 
              className='unstyle card-button'
              onClick={()=> handleModal(mueble.imagen)}
              >Ver fotos
            </button>
          </figure>
        ))}
      </div>

        <ModalSlider
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          selectedImages={selectedImages}
        />
      
    </>

  )
}





