import React from 'react';
import {shadekoApi, useGetCategoriesQuery} from '../../RTK_Query/index'
import { Link } from '../../../node_modules/react-router-dom/dist/index'



function HomeCategories() {

    const { data: category, error, isLoading } = shadekoApi.useGetCategoriesQuery('categories')
    const { VITE_REACT_APP_IMG_PATH } = import.meta.env;

    

    return (
        <>
            

            {
                    !error ? (
                        isLoading ? <div>Loading</div> : 

                        <div className='categories__net'>
                            {
                                category?.data.map((e,i)=>

                                <div key={'category'+i+e?.id} className='categories__net-item'>
                                    
                                     <img src={VITE_REACT_APP_IMG_PATH + e?.attributes?.img?.data?.attributes?.url } alt="category" />

                                     <Link className='up' to={e?.attributes?.url}>{e?.attributes?.name}</Link>

                                </div>

                                )
                            }
                        </div>

                    ) : 
                    <div>Error on server</div>
            }
        </>
    );
}

export default HomeCategories;