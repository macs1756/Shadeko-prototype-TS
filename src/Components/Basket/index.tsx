import * as React from 'react'
import type { IpropsForDrawerModal, TtotalPrice } from '../../Types'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useAppDispatch, useAppSelector } from 'src/Redux/hook'
import BasketElement from '../BasketElement'
import { resetBasket } from 'src/Redux/basketReducer'

function Drawer ({ drawerIsActive, setDrawerIsActive }: IpropsForDrawerModal): any {
  const basketProducts = useAppSelector(state => state.basket.basket)
  const dispatch = useAppDispatch()

  const totalPrice: TtotalPrice = (arr) => {
    const total = arr.reduce((accumulator, current) => accumulator + current, 0)
    return total
  }

  return (
  <div className={drawerIsActive ? 'drawer__wr text-black active bg-zinc-200 flex flex-col' : 'drawer__wr bg-zinc-200' }>

        <div className='flex items-center justify-between'>
        <h6 className='text-black font-medium text-xl'>Кошик:</h6>
                <AiOutlineCloseCircle
                color="#454547"
                fontSize='26px'
                cursor='pointer'
                onClick={() => { setDrawerIsActive(!drawerIsActive) }}
                 />
        </div>

        <div className="basket-elements pt-5 pb-3 flex-1">
          {
            basketProducts.map((e, i) =>
              <BasketElement
              key={i + 'basket-element' + e?.id}
              e={e}
               />
            )
          }
        </div>

        <div>
          <button
          className='text-[12px] underline hover:hover:no-underline mb-2'
          onClick={ () => { dispatch(resetBasket()) }}
          >Reset Basket</button>

          <div className='flex justify-between items-center pt-1 pb-1 pr-1 border-2 border-rose-500 border-l-transparent  font-medium text-[20px]'>
            <p>Total price</p>
            <span>{ totalPrice(basketProducts.map((e) => (e?.price * e?.quantity))) }$</span>
          </div>

        </div>
  </div>
  )
}

export default Drawer
