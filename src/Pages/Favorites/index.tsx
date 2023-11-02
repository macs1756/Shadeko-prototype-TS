import * as React from 'react'
import CardFavorites from 'src/Components/CardFavorites'
import { useAppSelector } from 'src/Redux/hook'

function Favorites (): any {
  const favorites = useAppSelector((state) => state.favorite.favorite)

  console.log(favorites)

  return (
    <div className='pl-4 pr-4 mt-10'>
      <h4 className='mb-5 text-[24px]'>Favorites:</h4>
      <div className="favorites__net grid grid-cols-4 gap-x-3 gap-y-5">
        {
          favorites.map((e, i) =>
            <CardFavorites key={i + 'favoritesElements' + e?.id} e={e} />
          )
        }
      </div>
    </div>
  )
}

export default Favorites
