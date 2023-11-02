import * as React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import type { IproductSingleSwiperProps } from 'src/Types'
import { Thumbs } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper/types'
import Lightbox from 'react-awesome-lightbox'
import 'react-awesome-lightbox/build/style.css'

function ProductSingleSwiper ({ slidesSet1 }: IproductSingleSwiperProps): JSX.Element {
  const { VITE_REACT_APP_IMG_PATH } = import.meta.env
  const [thumbsSwiper, setThumbsSwiper] = React.useState<SwiperType>(null)
  const [isGaleryOpen, setIsGaleryOpen] = React.useState<boolean>(false)

  const galleryPhoto = slidesSet1?.map((e, i) => {
    const url = VITE_REACT_APP_IMG_PATH + e?.attributes?.url
    const title = 'Image ' + (i + 1)
    const key = `key_${i}`
    return { url, title, key }
  })

  return (
    <div className='w-full overflow-hidden max-w-full pl-6 pr-6'>
      <Swiper
        className={'h-[500px] mb-3'}
        modules={[Thumbs]}
        thumbs={{ swiper: thumbsSwiper !== null && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        spaceBetween={8}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
            slidesSet1?.map((e, i) =>
            <SwiperSlide
            key={i + 'slide-set-1' + e?.id}
            className='relation'
            onClick={() => { setIsGaleryOpen(true) }}
            >
              <img className='object-cover absolute top-0 left-0 w-full h-full cursor-zoom-in' src={VITE_REACT_APP_IMG_PATH + e?.attributes?.url} alt={'slide' + i} />
            </SwiperSlide>
            )
        }
      </Swiper>

      <Swiper
          className={'h-[100px]'}
          modules={[Thumbs]}
          slidesPerView={5}
          spaceBetween={8}
          watchSlidesProgress
          onSwiper={setThumbsSwiper}
        >
        {
            slidesSet1?.map((e, i) =>
            <SwiperSlide key={i + 'slide-set-1' + e?.id} className='relative'>
              <img className='object-cover absolute top-0 left-0 w-full h-full cursor-pointer' src={VITE_REACT_APP_IMG_PATH + e?.attributes?.url} alt={'slide' + i} />
            </SwiperSlide>
            )
        }
      </Swiper>
{
  isGaleryOpen && <Lightbox
  images={galleryPhoto}
  onClose={() => { setIsGaleryOpen(!isGaleryOpen) }}
></Lightbox>
}
    </div>
  )
}

export default ProductSingleSwiper
