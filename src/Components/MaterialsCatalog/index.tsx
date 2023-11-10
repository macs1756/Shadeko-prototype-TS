import * as React from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { shadekoApi } from 'src/RTK_Query'
import type { ChangeTextForCurrentColor } from 'src/Types'
import classnames from 'classnames'

function MaterialsCaralog (): JSX.Element {
  const { data, error, isLoading } = shadekoApi.useGetMaterialsQuery(null)
  const [currentMaterialText, setcurrentMaterialText] = React.useState<string>('Material')
  const [isOpenBodyMaterials, setisOpenBodyMaterials] = React.useState<boolean>(false)

  const changeTextForCurrentColor: ChangeTextForCurrentColor = (currentText) => {
    setcurrentMaterialText(currentText)
    setisOpenBodyMaterials(false)
  }

  const ulClasses = classnames('absolute', 'top-[110%]', 'left-0', 'bg-slate-400', 'w-200', 'rounded-md', 'overflow-hidden', 'pt-1', 'pb-1', 'none', ' z-[2]', 'bg-[#242424]', {
    active: isOpenBodyMaterials
  })

  return (
    <div className='relative'>
    <h4 className='w-200 rounded-md px-2 flex items-center cursor-pointer bg-[#242424]'
    onClick={() => { setisOpenBodyMaterials(!isOpenBodyMaterials) }} >
        <span>{currentMaterialText}</span>
        <RiArrowDropDownLine
            fontSize='36px'
         />
    </h4>

<ul className={ulClasses}>
    {
        (error != null)
          ? <div>Error on server</div>
          : (isLoading
              ? <div>Loading...</div>
              : data?.data?.map((e, i) =>
                    <li
                    key={i + 'catalog-colors-items' + e?.id}
                    className='pb-1 pt-1 pl-2 pr-2 hover:bg-[#161616] cursor-pointer transition'

                    onClick={() => { changeTextForCurrentColor(e?.attributes?.name) }}
                    >{e?.attributes?.name}</li>
              ))}
</ul>
</div>
  )
}

export default MaterialsCaralog
