import * as React from 'react'
import type { IcardsProps, TaddToFavorite } from 'src/Types'
import { LuDollarSign } from 'react-icons/lu'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useAppDispatch, useAppSelector } from 'src/Redux/hook'
import { addToFavorite } from 'src/Redux/favoriteReducer'
import { TbBasketUp } from 'react-icons/tb'
import slugify from 'react-slugify'
import { Link } from 'react-router-dom'

function Card ({ e }: IcardsProps): any {
  const { VITE_REACT_APP_IMG_PATH } = import.meta.env
  const dispatch = useAppDispatch()

  const addToFavoriteF: TaddToFavorite = (id, image, price, title) => {
    dispatch(addToFavorite({ id, image, price, title }))
  }

  const IdsFavoritesRedux = useAppSelector((state) => state.favorite.favorite)
  const isCheckId: boolean = IdsFavoritesRedux.some(item => item.id === e?.id)

  return (
        <div className='overflow-hidden'>
            <div className='relative w-full h-[250px] cursor-pointer overflow-hidden rounded-tl-2xl rounded-tr-2xl shadow-lg shadow-rose-500 '>
                 <img
                 src={VITE_REACT_APP_IMG_PATH + e?.attributes?.img_card?.data?.attributes?.url}
                 alt="card preview"
                 className='absolute top-0 left-0 w-full h-full scale-100 transform object-cover hover:scale-110 transition-all duration-500 ease-linear'
                 />

                 <Link to={'/product/' + slugify(e?.attributes?.title) + '/' + e?.id}>
                 <TbBasketUp
                 className='absolute top-[45px] text-[#fff] right-[16px] text-[24px] hover:text-rose-500 transition'
                 />
                 </Link>

{isCheckId
  ? (<MdFavorite
    className='absolute top-[16px] right-[16px] text-[24px] hover:text-[#497b81cc] transition'
    onClick={() => { addToFavoriteF(e?.id, e?.attributes?.img_card?.data?.attributes?.url, e?.attributes?.price, e?.attributes?.title) }}
    color='#242424'
     />)
  : (<MdFavoriteBorder
      className='absolute top-[16px] right-[16px] text-[24px] hover:text-rose-500 transition'
      onClick={() => { addToFavoriteF(e?.id, e?.attributes?.img_card?.data?.attributes?.url, e?.attributes?.price, e?.attributes?.title) }}
    />)}

            </div>

            <div className='overflow-hidden rounded-bl-2xl rounded-br-2xl  border-rose-500 border-2 p-[8px] border-t-0'>
                    <h4>{e?.attributes?.title}</h4>
                    <h4 className='flex items-center text-[18px] pt-1'>
                        <span>{ e?.attributes?.price }</span>
                        <LuDollarSign
                        fontSize='20px'
                         />
                    </h4>
            </div>
        </div>
  )
}

export default Card
