import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { IrootServerResponse, Isubcategory, Icolors, Icards, IcardsRequestSingle, IresponseColorsForSingle, IresponseMaterialsForSingle } from 'src/Types'

export const shadekoApi = createApi({
  reducerPath: 'shadekoApi',

  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:1337/api/',
    prepareHeaders: (headers, { getState }) => {
      const apiToken = import.meta.env.VITE_REACT_APP_API_TOKEN
      if (apiToken != null) {
        headers.set('Authorization', `Bearer ${apiToken}`)
      }
      return headers
    }
  }),

  endpoints: (builder) => ({

    getCategories: builder.query<IrootServerResponse, string>({
      query: (name) => `/${name}?populate=*`
    }),

    getSubcategory: builder.query<Isubcategory, string>({
      query: (currentSubcategory) => `/subcategories?filters[url][$contains]=${currentSubcategory}&populate=*`
    }),

    getColors: builder.query<Icolors, null>({
      query: () => '/colors?populate=*'
    }),
    getMaterials: builder.query<Icolors, null>({
      query: () => '/materials?populate=*'
    }),

    getCards: builder.query<Icards, number>({
      query: (currentPage) => ({
        url: 'products',
        params: {
          'pagination[page]': currentPage,
          'pagination[pageSize]': 9,
          populate: '*'
        }
      })
    }),

    getProductsByID: builder.query<IcardsRequestSingle, number>({
      query: (id) => ({
        url: `products/${id}`,
        params: {
          populate: '*'
        }
      })
    }),

    getColorsForCardSingle: builder.query<IresponseColorsForSingle, number[]>({
      query: (ids) => ({
        url: 'colors',
        params: ids.map(e => `filters[id][$eq]=${e}`).concat('populate=*').join('&')
      })
    }),

    getMaterialsForCardSingle: builder.query<IresponseMaterialsForSingle, number[]>({
      query: (ids) => ({
        url: 'materials',
        params: ids.map(e => `filters[id][$eq]=${e}`).concat('populate=*').join('&')
      })
    })

  })
})

export const
  {
    useGetCategoriesQuery,
    useGetSubcategoryQuery,
    useGetColorsQuery,
    useGetCardsQuery,
    useGetColorsForCardSingleQuery,
    useGetMaterialsForCardSingleQuery,
    useGetMaterialsQuery
  } = shadekoApi
