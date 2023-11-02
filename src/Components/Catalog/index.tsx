import * as React from 'react'
import { shadekoApi } from 'src/RTK_Query'
import Card from '../Card'
import ColorsCatalog from 'src/Components/ColorsCatalog'
import type { IcardsSingle } from 'src/Types'

function Catalog (): any {
  const [currentPage, setCurrentPage] = React.useState<number>(1)
  const { data, isLoading, error } = shadekoApi.useGetCardsQuery(currentPage)
  const [products, setProducts] = React.useState<IcardsSingle[]>([])

  const allPage: number | undefined = data?.meta?.pagination?.pageCount

  React.useEffect(() => {
    (data != null) && (products.length !== 0 ? setProducts([...products, ...data?.data]) : setProducts(data?.data))
  }, [data])
  return (
        <div className='p-10'>
            <div className="filters mb-5">
            <ColorsCatalog />
        </div>
            <div className="grid grid-cols-4 gap-x-3 gap-y-5 ">
                {
                    (error != null)
                      ? <div>Error on server</div>
                      : (
                          isLoading
                            ? <div>Loading...</div>
                            : products.map((e, i) =>
                            <Card
                                    key={i + 'catalog-cards' + e.id}
                                    e={e}
                                />

                            )
                        )
                }
            </div>

            {
                currentPage !== allPage &&

                <div className="w-full mt-16">
                    <button onClick={() => { setCurrentPage(currentPage + 1) }} className="products__more m-auto block bg-slate-400 py-2 px-4 font-bold hover:bg-slate-500 transition">Product more</button>
                </div>

            }

        </div>
  )
}

export default Catalog
