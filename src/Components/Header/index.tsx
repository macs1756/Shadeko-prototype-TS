import React from 'react'
import { Link } from 'react-router-dom'
import { shadekoApi } from '../../RTK_Query'
import { MdAccountCircle, MdFavorite } from '../../../node_modules/react-icons/md'
import { RiShoppingBasketFill } from '../../../node_modules/react-icons/ri'
import { SiShopify } from '../../../node_modules/react-icons/si'
import Drawer from '../Basket'

function Header (): JSX.Element {
  const [drawerIsActive, setDrawerIsActive] = React.useState<boolean>(false)
  const { data, isLoading, error } = shadekoApi.useGetCategoriesQuery('categories')

  return (
        <header className='py-4 px-4 bg-zinc-200 flex justify-between items-center'>

            <Link to='/' className="logo pr-24">
             <SiShopify
             fontSize={46}
             color='#454547'
              />
            </Link>

            <ul className="list">
                {
                    (error != null)
                      ? <div>Error on server</div>
                      : (isLoading
                          ? <div>Loading...</div>
                          : data?.data?.map((e, i) =>
                    <Link className='text-black ml-4 mr-4 hover:text-slate-600 transition' key={i + 'header-categories' + e?.id} to={e.attributes.url}>{e.attributes.name}</Link>
                          )
                        )}
            </ul>

            <div className="icons flex gap-5 items-center">

                <Link to='/login'>
                    <MdAccountCircle
                    fontSize={29}
                    color='#454547'
                     />
                    </Link>

                <Link to='/favorites'>
                    <MdFavorite
                     fontSize={26}
                     color='#454547'
                     />
                </Link>

                <button onClick={() => { setDrawerIsActive(!drawerIsActive) }}>
                <RiShoppingBasketFill
                     fontSize={26}
                     color='#454547'
                />
                </button>
                </div>
                <Drawer
                    drawerIsActive = {drawerIsActive}
                    setDrawerIsActive = {setDrawerIsActive}
                 />
        </header>
  )
}

export default Header
