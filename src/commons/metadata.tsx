
export interface ITokenMetadata {
  address: string
  name: string
  logo: string
  erc20: boolean
  symbol: string
  decimals: number
}

export const getURLtoTokenImg = () => process.env.REACT_APP_URL_IMAGES
