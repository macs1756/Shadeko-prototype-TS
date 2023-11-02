import * as React from 'react'
import type { IbasketElement } from 'src/Types'

function BasketElement ({ e }: IbasketElement): JSX.Element {
  return (
    <div>
      {e?.title}
    </div>
  )
}

export default BasketElement
