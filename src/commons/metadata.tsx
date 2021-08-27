
export interface ITokenMetadata {
  address: string
  name: string
  logo: string
  erc20: boolean
  symbol: string
  decimals: number
}

export const getURLtoTokenImg = (isMainnet: boolean) => {
  if (isMainnet) {
    return process.env.REACT_APP_URL_TO_METADATA_MAIN_IMAGES
  }
  return process.env.REACT_APP_URL_TO_METADATA_TEST_IMAGES
}
