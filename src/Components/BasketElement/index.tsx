import * as React from 'react'
import type { IbasketElement } from 'src/Types'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useAppDispatch } from 'src/Redux/hook'
import { deleteItem } from 'src/Redux/basketReducer'

function BasketElement ({ e }: IbasketElement): JSX.Element {
  const dispatch = useAppDispatch()
  return (
    <div className='grid grid-cols-25-75 mb-3'>

      <div className='w-[100%] h-[75px] min-h-full'>
        <img className='object-cover' src={e?.image} alt="preview" />
      </div>

      <div className='border-2 border-rose-500 border-l-transparent p-2 flex items-center justify-between'>

      <div>
        <h4>{e?.title}</h4>
        <p className='flex items-center gap-1 text-[13px] pt-1 pb-1'>
          <span>Qty:</span>
          <span>{e?.quantity}</span>
        </p>
        <p>{e?.quantity * e?.price}$</p>
      </div>

      <AiOutlineCloseCircle
      cursor='pointer'
      fontSize='20px'
      onClick={() => { dispatch(deleteItem(e?.id)) }}
       />

      </div>
    </div>
  )
}

export default BasketElement
