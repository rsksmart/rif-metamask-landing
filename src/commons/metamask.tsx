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

export const addTestnetDocToken = () =>
  addToken({
    type: 'ERC20',
    options: {
      address: '0xc3de9f38581f83e281f260d0ddbaac0e102ff9f8',
      symbol: 'tDOC',
      decimals: 18,
      image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3701.png'
    }
  })

export const addTestnetBProToken = () =>
  addToken({
    type: 'ERC20',
    options: {
      address: '0x53Aa76959004Ba80beA1aeAc847dC930840Da418',
      symbol: 'tBPRO',
      decimals: 18,
      image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3701.png'
    }
  })

export const isMetaMaskInstalled = () => {
  const { ethereum } = window
  return Boolean(ethereum && ethereum.isMetaMask && !ethereum.isNiftyWallet)
}

export const getAccounts = () => window.ethereum.request({ method: 'eth_requestAccounts' })
export const getChainId = () => window.ethereum.request({ method: 'eth_chainId' })

export const getNet = async () => {
  let net = await getChainId()
  net = parseInt(net).toString()

  switch (net) {
    case '30': return 'MainNet'
    case '31': return 'TestNet'
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
