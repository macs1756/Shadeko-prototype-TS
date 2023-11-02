import * as React from 'react';
import { SiShopify } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { shadekoApi,useGetCategoriesQuery } from '../../RTK_Query';


function Footer() {


    const { data,error,isLoading } = shadekoApi.useGetCategoriesQuery('categories')



    return (
        <footer className='flex justify-between items-start p-8'>

            <Link to='/' className="logo pr-24">          
             <SiShopify
             fontSize={46}
             color='#fff'
              />
            </Link>

            <ul>
                {
                    error ? <div>Error on server</div> : (
                        isLoading ? <div>Loading...</div> : 

                        data?.data?.map((e,i)=>
                            <li className='pt-1' key={i+'footer-link-list'+e?.id}>
                                <Link to={"/"+e?.attributes?.url}>{e?.attributes?.name}</Link>
                            </li>
                        )
                    )
                }
            </ul>

            <ul>

                <li>   
                   <a className='pt-4 pb-4 block' href='#'>Lviv ul. Zelena 44</a>
                </li>

                <li> 
                    <a href='#'>+380957954233</a>
                </li>

            </ul>

        </footer>

        );
}

export default Footer;