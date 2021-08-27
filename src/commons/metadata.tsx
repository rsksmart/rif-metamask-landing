const contractMapTesnet = require('@rsksmart/rsk-testnet-contract-metadata')
const contractMap = require('@rsksmart/rsk-contract-metadata')

export interface TokenMetadata {
  address: string
  name: string
  logo: string
  erc20: boolean
  symbol: string
  decimals: number
}

export interface TokenMetadataPair {
[address: string] : TokenMetadata
}

export const getMetaMap = (chainId: string, symbol: string) => {
  let allTokens
  if (chainId === '30') {
    allTokens = contractMap as TokenMetadataPair
  } else {
    allTokens = contractMapTesnet as TokenMetadataPair
  }

  if (!allTokens) {
    return {}
  }

  for (const address in allTokens) {
    const metadata = allTokens[address]
    const result = { address: address, name: metadata.name, logo: metadata.logo, erc20: metadata.erc20, symbol: metadata.symbol, decimals: metadata.decimals }

    if (result.symbol === symbol) {
      return result as TokenMetadata
    }
  }
}

export const getURLtoTokenImg = (chainId: string) => {
  if (chainId === '30') {
    return process.env.REACT_APP_URL_TO_METADATA_MAIN_IMAGES
  }
  return process.env.REACT_APP_URL_TO_METADATA_TEST_IMAGES
}
