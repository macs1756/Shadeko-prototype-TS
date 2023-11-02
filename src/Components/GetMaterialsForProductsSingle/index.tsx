import classNames from 'classnames'
import * as React from 'react'
import { shadekoApi } from 'src/RTK_Query'
import type { ImaterialComponentProps } from 'src/Types'

function GetMaterialsForProductsSingle ({ arr }: ImaterialComponentProps): JSX.Element {
  const [currentMaterial, setCurrentMaterial] = React.useState<number>(0)
  const { VITE_REACT_APP_IMG_PATH } = import.meta.env
  let data, isLoading, error
  if (arr !== undefined) {
    const result = shadekoApi.useGetMaterialsForCardSingleQuery(arr)
    data = result.data
    isLoading = result.isLoading
    error = result.error
  }

  return (
      <>
      {
        (arr !== undefined && arr.length > 0) &&
        <div>
            <h4 className='mt-[20px] text-[24px] mb-3'>Materials:</h4>
            <ul className='flex gap-3'>
            {
              (error != null)
                ? <div>Error on server</div>
                : (isLoading ?? false)
                    ? <div>Loading...</div>
                    : data?.data?.map((e, i) =>
                <li
                key={i + 'colorCard' + e?.id}
                className={classNames('w-[32px] h-[32px] rounded-full overflow-hidden cursor-pointer tr', {
                  'active-color tr': currentMaterial === i
                })}
                >
                  <img
                  className='rounded-full'
                  src={ VITE_REACT_APP_IMG_PATH + e?.attributes?.img?.data?.attributes?.url }
                  alt="color"
                  onClick={() => { setCurrentMaterial(i) }}
                   />
                </li>
                    )}
              </ul>
        </div>
      }
      </>
  )
}

export default GetMaterialsForProductsSingle
