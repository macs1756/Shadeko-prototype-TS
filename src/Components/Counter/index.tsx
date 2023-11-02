import * as React from 'react'
import { PiMinusCircleDuotone, PiPlusCircleDuotone } from 'react-icons/pi'
import type { IcounterProps } from 'src/Types'

function Counter ({ initialValue, getValue }: IcounterProps): JSX.Element {
  const [count, setCount] = React.useState<number>(initialValue ?? 1)

  if (getValue !== undefined) {
    React.useEffect(() => {
      getValue(count)
    }, [count])
  }

  return (
    <div className='flex items-center gap-2'>
      <button onClick={() => { count > 1 && setCount(count - 1) }}> <PiMinusCircleDuotone fontSize='28px' /> </button>
      <p className='text-[28px]'>{count}</p>
      <button onClick={() => { setCount(count + 1) }}> <PiPlusCircleDuotone fontSize='27px' /></button>
    </div>
  )
}

export default Counter
