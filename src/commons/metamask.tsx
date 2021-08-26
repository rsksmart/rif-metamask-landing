import { getMetaMap, TokenMetadata, getURLtoTokenImg } from './metadata'

declare const window: any

export const addNetwork = (params: any) =>
  window.ethereum.request({ method: 'wallet_addEthereumChain', params })
    .then(() => {
      console.log(`Switched to ${params[0].chainName} (${parseInt(params[0].chainId)})`)
    })
    .catch((error: Error) => {
      console.log(`Error: ${error.message}`)
    })

export const onChainChanged = (toStep3:() => void) => window.ethereum.on('chainChanged', (selectedChainId:string) => {
  const envChainId:number = parseInt(process.env.REACT_APP_ENVIRONMENT_ID!)
  const formattedEnvChainId = '0x' + envChainId?.toString(16)

  if (selectedChainId !== formattedEnvChainId) {
    toStep3()
    console.log('Chain switched to: ', selectedChainId)
  }
})

export const addRskTestnet = () =>
  addNetwork([
    {
      chainId: '0x1f',
      chainName: 'RSK Testnet',
      nativeCurrency: {
        name: 'Test RSK BTC',
        symbol: 'tRBTC',
        decimals: 18
      },
      rpcUrls: ['https://public-node.testnet.rsk.co'],
      blockExplorerUrls: ['https://explorer.testnet.rsk.co']
    }
  ])

export const addRskMainnet = () =>
  addNetwork([
    {
      chainId: '0x1e',
      chainName: 'RSK Mainnet',
      nativeCurrency: {
        name: 'RSK BTC',
        symbol: 'RBTC',
        decimals: 18
      },
      rpcUrls: ['https://public-node.rsk.co'],
      blockExplorerUrls: ['https://explorer.rsk.co']
    }
  ])

export const addTestnetRifToken = () =>
  addToken({
    type: 'ERC20',
    options: {
      address: '0x19f64674D8a5b4e652319F5e239EFd3bc969a1FE',
      symbol: 'tRIF',
      decimals: 18,
      image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3701.png'
    }
  })

export const addTestnetBProToken = () =>
  addToken({
    type: 'ERC20',
    options: {
      address: '0x4dA7997A819bb46B6758b9102234c289Dd2ad3bf',
      symbol: 'tBPRO',
      decimals: 18,
      image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3701.png'
    }
  })

export const addTestnetDocToken = () =>
  addToken({
    type: 'ERC20',
    options: {
      address: '0xCb46C0DdC60d18eFEB0e586c17AF6Ea36452DaE0',
      symbol: 'tDOC',
      decimals: 18,
      image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3701.png'
    }
  })

export const addToken = (params: any) =>
  window.ethereum.request({ method: 'wallet_watchAsset', params })
    .then((response: any) => {
      console.log(response)
    })
    .catch((error: Error) => {
      console.log(error)
    })

export const addTokens = (net: string, token: string) => {
  const metaMap = getMetaMap(net, token) as TokenMetadata
  if (metaMap !== undefined) {
    const img = getURLtoTokenImg(net) + metaMap.logo

    addToken({
      type: 'ERC20',
      options: {
        address: metaMap.address,
        symbol: metaMap.symbol,
        decimals: metaMap.decimals,
        image: img
      }
    })
  }
}

export const isMetaMaskInstalled = () => {
  const { ethereum } = window
  return Boolean(ethereum && ethereum.isMetaMask && !ethereum.isNiftyWallet)
}

export const isMetaMaskConnected = () => {
  const { ethereum } = window
  if ((ethereum) && (ethereum.isConnected())) {
    return Boolean(true)
  }
  return Boolean(false)
}

export const isButtonTokenAvailable = () => {
  return getAccounts() && getNet()
}

export const getAccounts = () => {
  return window.ethereum.request({ method: 'eth_requestAccounts' })
}

export const getChainId = () => window.ethereum.request({ method: 'eth_chainId' })

export const getNet = async () => {
  let net = await getChainId()
  net = parseInt(net).toString()

  switch (net) {
    case '30': return 'RSK MainNet'
    case '31': return 'RSK TestNet'
    default: return 'Invalid net'
  }
}

export const handleConection = () => Promise.all([
  window.ethereum.request({ method: 'eth_requestAccounts' }).then((accounts: string[]) => accounts[0]),
  window.ethereum.request({ method: 'eth_chainId' })
])

export const handleAccounts = () => {
  window.ethereum
    .request({
      method: 'eth_accounts'
    }).then((response: any) => {
      return response
    })
    .catch((err: string) => console.log(err))
}

export const handleNet = () => {
  window.ethereum
    .request({
      method: 'eth_chainId'
    }).then((response: any) => {
      return response
    })
    .catch((err: string) => console.log(err))
}
