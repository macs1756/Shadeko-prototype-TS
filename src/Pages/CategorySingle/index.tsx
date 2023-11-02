import * as React from 'react'
import { Link, useLocation } from '../../../node_modules/react-router-dom/dist/index'
import { useGetSubcategoryQuery } from '../../RTK_Query'

function CategorySingle (): JSX.Element {
  const location = useLocation()
  const currentCategory = location.pathname.substring(1)
  const { data, isLoading, error } = useGetSubcategoryQuery(currentCategory)
  const { VITE_REACT_APP_IMG_PATH } = import.meta.env

  return (
        <div className='categories__net'>
                {
                    (error != null)
                      ? <div>Error on server</div>
                      : (isLoading
                          ? <div>Loading...</div>
                          : data?.data?.map?.((e, i) => (
                        <div key={'subcategory' + i + e?.id} className='categories__net-item'>
                        <img alt='subcategory' src={VITE_REACT_APP_IMG_PATH + e.attributes?.img?.data?.attributes?.url} />

                        <Link className='up' to={'/' + e?.attributes?.url}>{e?.attributes?.title}</Link>
                        </div>
                          )))
                }
        </div>
  )
}

export default CategorySingle
