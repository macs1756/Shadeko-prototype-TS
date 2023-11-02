import * as React from 'react'
import type { IpropsForDrawerModal } from '../../Types'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useAppSelector } from 'src/Redux/hook'
import BasketElement from '../BasketElement'

function Drawer ({ drawerIsActive, setDrawerIsActive }: IpropsForDrawerModal): any {
  const basketProducts = useAppSelector(state => state.basket.basket)

  return (
  <div className={drawerIsActive ? 'drawer__wr text-black active' : 'drawer__wr' }>
        <div className='flex items-center justify-between'>
        <h6 className='text-black font-medium text-xl'>Кошик:</h6>
                <AiOutlineCloseCircle
                color="#454547"
                fontSize='26px'
                cursor='pointer'
                onClick={() => { setDrawerIsActive(!drawerIsActive) }}
                 />
        </div>
        <div className="basket-elements">
          {
            basketProducts.map((e, i) =>
              <BasketElement
              key={i + 'basket-element' + e?.id}
              e={e}
               />
            )
          }
        </div>
  </div>
  )
}

export default Drawer
