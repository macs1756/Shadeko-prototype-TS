import * as React from 'react'
import type { IpropsForDrawerModal } from '../../Types'
import { AiOutlineCloseCircle } from '../../../node_modules/react-icons/ai'

function Drawer ({ drawerIsActive, setDrawerIsActive }: IpropsForDrawerModal): any {
  return (
  <div className={drawerIsActive ? 'drawer__wr active' : 'drawer__wr' }>
        <div className='flex items-center justify-between'>
        <h6 className='text-black font-medium text-xl'>Кошик:</h6>
                <AiOutlineCloseCircle
                color="#454547"
                fontSize='26px'
                cursor='pointer'
                onClick={() => { setDrawerIsActive(!drawerIsActive) }}
                 />
        </div>
  </div>
  )
}

export default Drawer
