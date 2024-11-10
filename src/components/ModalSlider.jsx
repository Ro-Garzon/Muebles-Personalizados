import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../style/ModalSlider.css'

export const ModalSlider = ({isOpen, setIsOpen, selectedImages}) => {

    console.log(selectedImages[0])
  

    

    return (
        <>
            {isOpen&&
                <div className="overlay">
                    <div className='modal-container'>
                        <div className='close-modal'>
                            <button 
                                className='unstyle close-icon'
                                onClick={()=>setIsOpen(false)}
                                >🗙
                            </button>
                        </div>

                        <Swiper
                            className='slider-size'
                            modules={[Navigation, Pagination, A11y]}
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                        >
                            {selectedImages.map((photo, index) => (
                                <SwiperSlide key={index}>
                                <img src={photo} alt="Foto" className='slider-img'/>
                                </SwiperSlide>
                            ))}

                        </Swiper>
                       
                    </div>
                </div>
            }
        </>
    )
}

/*
{'\u2716'}
*/
