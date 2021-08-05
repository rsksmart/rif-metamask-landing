declare const window: any

export const addNetwork = (params: any) =>
  window.ethereum.request({ method: 'wallet_addEthereumChain', params })
    .then(() => {
      console.log(`Switched to ${params[0].chainName} (${parseInt(params[0].chainId)})`)
    })
    .catch((error: Error) => {
      console.log(`Error: ${error.message}`)
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

export const addToken = (params: any) =>
  window.ethereum.request({ method: 'wallet_watchAsset', params })
    .then((response: any) => {
      console.log(response)
    })
    .catch((error: Error) => {
      console.log(error)
    })

export const addTestnetRifToken = () =>
  addToken({
    type: 'ERC20',
    options: {
      address: '0x19f64674d8a5b4e652319f5e239efd3bc969a1fe',
      symbol: 'tRIF',
      decimals: 18,
      image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3701.png'
    }
  })

export const addRifToken = () =>
  addToken({
    type: 'ERC20',
    options: {
      address: '0x2acc95758f8b5f583470ba265eb685a8f45fc9d5',
      symbol: 'RIF',
      decimals: 18,
      image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3701.png'
    }
  })

export const isMetaMaskInstalled = () => {
  const { ethereum } = window
  return Boolean(ethereum && ethereum.isMetaMask && !ethereum.isNiftyWallet)
}

export const handleConection = () => {
  return window.ethereum
    .request({
      method: 'eth_requestAccounts'
    }).then((response: any) => {
      console.log(response)
      return response
    })
    .catch((err: string) => console.log(err))
}

export const handleAccounts = () => {
  window.ethereum
    .request({
      method: 'eth_accounts'
    }).then((response: any) => {
      console.log(response)
      return response
    })
    .catch((err: string) => console.log(err))
}

export const handleNet = () => {
  window.ethereum
    .request({
      method: 'eth_chainId'
    }).then((response: any) => {
      console.log(response)
      return response
    })
    .catch((err: string) => console.log(err))
}
