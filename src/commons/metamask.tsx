import React, { useState } from 'react'

declare const window: any

export const addNetwork = (params: any) =>
  window.ethereum.request({ method: 'wallet_addEthereumChain', params })
    .then(() => {
      const [chainId, setChainId] = useState<number | null>(null)
      const [log, setLog] = useState<string[]>([])
      setLog([...log, `Switched to ${params[0].chainName} (${parseInt(params[0].chainId)})`])
      setChainId(parseInt(params[0].chainId))
    })
    .catch((error: Error) => {
      const [chainId, setChainId] = useState<number | null>(null)
      const [log, setLog] = useState<string[]>([])
      setLog([...log, `Error: ${error.message}`])
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
    .then(() => {
      const [chainId, setChainId] = useState<number | null>(null)
      const [log, setLog] = useState<string[]>([])
      setLog([...log, 'Success, Token added!'])
    })
    .catch((error: Error) => {
      const [chainId, setChainId] = useState<number | null>(null)
      const [log, setLog] = useState<string[]>([])
      setLog([...log, `Error: ${error.message}`])
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

export const isMetaMaskInstalled = () => {
  const { ethereum } = window
  console.log(ethereum && ethereum.isMetaMask && !ethereum.isNiftyWallet)
  return Boolean(ethereum && ethereum.isMetaMask && !ethereum.isNiftyWallet)
}
