import classNames from 'classnames'
import * as React from 'react'
import { shadekoApi } from 'src/RTK_Query'
import type { IcolorComponentProps } from 'src/Types'

function GetColorsForProductsSingle ({ arr }: IcolorComponentProps): JSX.Element {
  let data, isLoading, error
  const [currentColor, setCurrentColor] = React.useState<number>(0)

  if (arr !== undefined) {
    const result = shadekoApi.useGetColorsForCardSingleQuery(arr)
    data = result.data
    isLoading = result.isLoading
    error = result.error
  }
  const { VITE_REACT_APP_IMG_PATH } = import.meta.env

  return (
    <>
    {(arr !== undefined) && arr?.length > 0 && <div>
    <h4 className='mt-[20px] text-[24px] mb-3'>Colors:</h4>
    <ul className='flex gap-3'>
      {
        (error != null)
          ? <div>Error on server</div>
          : ((isLoading ?? false)
              ? <div>Loading...</div>
              : data?.data?.map((e, i) =>
                <li
                key={i + 'colorCard' + e?.id}
                className={classNames('w-[32px] h-[32px] rounded-full overflow-hidden cursor-pointer tr', {
                  'active-color tr': currentColor === i
                })}
                >
                  <img
                  className='rounded-full'
                  src={ VITE_REACT_APP_IMG_PATH + e?.attributes?.img?.data?.attributes?.url }
                  alt="color"
                  onClick={() => { setCurrentColor(i) }}
                   />
                </li>
              ))}
    </ul>
    </div>}
    </>
  )
}

export default GetColorsForProductsSingle
