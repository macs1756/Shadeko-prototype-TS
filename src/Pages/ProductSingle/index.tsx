import * as React from 'react'
import { LuDollarSign } from 'react-icons/lu'
import { useParams } from 'react-router-dom'
import Counter from 'src/Components/Counter'
import GetColorsForProductsSingle from 'src/Components/GetColorsForProductSingle'
import GetMaterialsForProductsSingle from 'src/Components/GetMaterialsForProductsSingle'
import ProductSingleSwiper from 'src/Components/ProductSingleSwiper'
import { useAppDispatch } from 'src/Redux/hook'
import { shadekoApi } from 'src/RTK_Query'
import type { TclickOnButtonAddToBasket, TcountProduct } from 'src/Types'
import { addToBasket } from 'src/Redux/basketReducer'

function ProductSingle (): JSX.Element {
  const { id } = useParams<string>()
  const [countProducts, setCountProducts] = React.useState<number>(1)
  const dispatch = useAppDispatch()
  const { VITE_REACT_APP_IMG_PATH } = import.meta.env

  let data, isLoading, error

  if (id !== undefined) {
    ({ data, isLoading, error } = shadekoApi.useGetProductsByIDQuery(+id))
  }

  const CountProduct: TcountProduct = (count: number) => {
    setCountProducts(count)
  }

  const clickOnButtonAddToBasket: TclickOnButtonAddToBasket = (id, title, image, price, quantity) => {
    dispatch(addToBasket({ id, title, price, quantity, image }))
  }

  const colorsId = data?.data?.attributes?.colors?.data.map((e) => (e.id))
  const materialsId = data?.data?.attributes?.materials?.data.map((e) => (e.id))

  const clearID = (id !== null && id !== undefined && !isNaN(+id)) ? +id : 1
  const clearTitle = data?.data?.attributes?.title !== undefined ? data?.data?.attributes?.title : 'title'
  const clearImageUrl = data?.data?.attributes?.img_card?.data?.attributes?.url !== undefined ? VITE_REACT_APP_IMG_PATH + data?.data?.attributes?.img_card?.data?.attributes?.url : ''
  const clearPrice = (data?.data?.attributes?.price !== undefined && !isNaN(+data?.data?.attributes?.price)) ? +data?.data?.attributes?.price : 0

  return (
    <div>
      {
        (error != null)
          ? <div>Error on server</div>
          : ((isLoading ?? false)
              ? <div>Loading...</div>
              : <div className='grid grid-cols-2 gap-3 items-start w-full pl-4 pr-4 pt-[60px] pb-[60px]'>
                <div>
                  <ProductSingleSwiper slidesSet1={data?.data?.attributes?.img_color_1?.data} />
                </div>
                <div>
                  <h4 className='mb-4 text-[25px]'>{data?.data?.attributes?.title}</h4>
                  <p className='mb-4 text-[20px]'>{data?.data?.attributes?.description}</p>
                  <h4 className='flex items-center text-[32px]'>
                    <span>{data?.data?.attributes?.price}</span>
                    <LuDollarSign />
                  </h4>
                  { data?.data?.attributes?.colors?.data !== undefined && <GetColorsForProductsSingle arr={colorsId} /> }
                  { data?.data?.attributes?.materials?.data !== undefined && <GetMaterialsForProductsSingle arr={materialsId} /> }

                  <div className='mt-[20px] mb-[24px]'>
                    <Counter
                    getValue={CountProduct}
                    />
                  </div>
                  <button
                  className='bg-zinc-200 text-black rounded-none font-semibold py-3 px-8 transition hover:bg-zinc-400'
                  onClick={() => {
                    clickOnButtonAddToBasket(clearID, clearTitle, clearImageUrl, clearPrice, countProducts)
                    setCountProducts(1)
                  }}
                  >Add to basket</button>
                </div>

                </div>
            )
      }
    </div>
  )
}

export default ProductSingle
