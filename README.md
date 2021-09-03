<p align="middle">
  <img src="https://www.rifos.org/assets/img/logo.svg" alt="logo" height="100" >
</p>
<h3 align="middle"><code>rif-metamask-landing</code></h3>
<p align="middle">
  Setup the RSK Networks in Metamask with a single click!
</p>
<p align="middle">
  <a href="https://metamask-landing.rifos.org/" target="_blank">metamask-landing.rifos.org</a>
</p>
<p align="middle">
  <a href="https://metamask-landing.testnet.rifos.org/" target="_blank">metamask-landing.testnet.rifos.org</a>
</p>

## Features

- Download links
- Detects if MetaMask is installed
- Offers to connect to RSK
- Lists of all tokens to add to your wallet
- Smart link: use `?tokens=0x2d9...A1F,0xF4d...a61` to show your dApp tokens by default (e.g.: `https://metamask-landing.rifos.org/?tokens=0x2d919f19D4892381d58EdEbEcA66D5642ceF1A1F,0xF4d27C56595eD59B66cC7f03CFF5193E4Bd74a61` would show Money on Chain tokens)

## Run for development

Install dependencies:

```
yarn
```

Run the app:

```
yarn start:testnet
yarn start:mainnet
yarn start # to use your own config file
```

### Brancing model

- `main` has latest release. Merge to `main` will deploy to S3
- Pull requests must point to `main`

## Run for production

Build for production:

```
yarn build:testnet
yarn build:mainnet
yarn build # to use your own config file
```

## Resources

- [Using custom networks with MetaMask article](https://metamask.zendesk.com/hc/en-us/articles/360056196151-Using-custom-networks-with-MetaMask)
- [wallet_addEthereumChain](https://docs.metamask.io/guide/rpc-api.html#other-rpc-methods)
- [wallet_watchAsset](https://docs.metamask.io/guide/rpc-api.html#wallet-watchasset)
