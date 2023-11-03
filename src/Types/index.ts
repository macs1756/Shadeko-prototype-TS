export interface IcategorySingle {
  createdAt: string
  locale: string
  name: string
  publishedAt: string
  updatedAt: string
  url: string
  img: {
    data: {
      id: number
      attributes: {
        name: string
        url: string
      }
    }
  }
}

export interface Ipagination {
  pagination: {
    page: number
    pageCount: number
    pageSize: number
    total: number
  }
}

export interface Icategory {
  id: number
  attributes: IcategorySingle
}

export interface IrootServerResponse {
  data: Icategory[]
  meta: Ipagination
}

export interface IsubcategorySingleAttributes {
  createdAt: string
  img: {
    data: {
      id: number
      attributes: {
        name: string
        url: string
      }
    }
  }
  locale: string
  publishedAt: string
  title: string
  updatedAt: string
  url: string
}

export interface IsubcategorySingle {
  id: number
  attributes: IsubcategorySingleAttributes
}

export interface Isubcategory {
  data: IsubcategorySingle[]
  meta: Ipagination
}

export interface IpropsForDrawerModal {
  drawerIsActive: boolean
  setDrawerIsActive: React.Dispatch<React.SetStateAction<boolean>>
}

export interface IcolorsSingleAttributes {
  article: string
  createdAt: string
  img: {
    data: {
      id: number
      attributes: {
        name: string
        url: string
      }
    }
  }
  locale: string
  name: string
  publishedAt: string
  updatedAt: string
}

export interface IcolorsSingle {
  id: number
  attributes: IcolorsSingleAttributes
}

export interface ImaterialsSingle {
  id: number
  attributes: IcolorsSingleAttributes
}

export interface Icolors {
  data: IcolorsSingle[]
  meta: Ipagination
}

export interface IcardSetImageAttributes {
  id: number
  attributes: {
    name: string
    alternativeText: string | null
    width: number
    height: 2578
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl: string | null
    provider: string
    createdAt: string
    updatedAt: string
  }
}

export interface IcolorForSingleCard {
  id: number
  attributes: {
    name: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    locale: string
    article: string
  }
}

export interface ImaterialForSingleCard {
  id: number
  attributes: {
    name: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    locale: string
    article: string
  }
}

export interface IcardsSingleAttributes {
  PersonalAccountDiscountPercent: number | null
  UserAccount: boolean
  bestseller: boolean
  characteristics: string
  createdAt: string
  description: string
  locale: string
  oldPrice: number | null
  price: number
  publishedAt: string
  relevance: number
  stockQuantity: number
  title: string
  updatedAt: string
  img_card: {
    data: {
      id: number
      attributes: {
        name: string
        url: string
      }
    }
  }
  img_color_1: {
    data: IcardSetImageAttributes[]
  }
  colors?: {
    data: IcolorForSingleCard[]
  }
  materials?: {
    data: ImaterialForSingleCard[]
  }
}

export interface IcardsSingle {
  id: number
  attributes: IcardsSingleAttributes
}

export interface Icards {
  data: IcardsSingle[]
  meta: Ipagination
}

export interface IcardsRequestSingle {
  data: IcardsSingle
  meta: Ipagination
}

export interface IcardsProps {
  e: IcardsSingle
}

export interface IfavoriteCard {
  id: number
  title: string
  image: string
  price: number
}

export interface IbasketCardForRedux {
  id: number
  title: string
  image: string
  price: number
  quantity: number
}

export interface IfavoriteRedux {
  favorite: IfavoriteCard[]
}

export interface IbasketRedux {
  basket: IbasketCardForRedux[]
}

export interface IfavoritesCardProps {
  e: IfavoriteCard
}

export interface IproductSingleSwiperProps {
  slidesSet1: IcardSetImageAttributes[] | undefined
}

export interface IcolorComponentProps {
  arr: number[] | undefined
}
export interface ImaterialComponentProps {
  arr: number[] | undefined
}

export interface IresponseColorsForSingle {
  data: IcolorsSingle[]
  meta: Ipagination
}

export interface IresponseMaterialsForSingle {
  data: IcolorsSingle[]
  meta: Ipagination
}

export interface IcounterProps {
  initialValue?: number
  getValue?: (count: number) => void
}

export interface IbasketElement {
  e: IbasketCardForRedux
}

export type ChangeTextForCurrentColor = (currentText: string) => void
export type TaddToFavorite = (id: number, image: string, price: number, title: string) => void
export type TcountProduct = (count: number) => void
export type TclickOnButtonAddToBasket = (id: number, title: string, image: string, price: number, quantity: number) => void
export type TtotalPrice = (arr: number[]) => number
