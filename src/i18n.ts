import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import { initReactI18next } from 'react-i18next'

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    name: 'English',
    translation: {
      About: 'About',
      'How to list your tokens': 'How to list your tokens',
      'How to customize with your tokens': 'How to customize with your tokens',
      'Read more': 'Read more',
      'Github repo': 'Github repo',
      'Connect Metamask to RSK': 'Connect Metamask to RSK',
      'Use this tool to connect your Metamask browser wallet to the RSK network. After this steps you will be able to send tokens and connect to dapps.': 'Use this tool to connect your Metamask browser wallet to the RSK network. After this steps you will be able to send tokens and connect to dapps.',
      'Download and setup Metamask.': 'Download and setup Metamask.',
      'Download Metamask': 'Download Metamask',
      'Connect your Metamask wallet.': 'Connect your Metamask wallet.',
      'Connect Wallet': 'Connect Wallet',
      'Click here to add the Mainnet or Testnet, or change to that network if you already have them configured.': 'Click here to add the Mainnet or Testnet, or change to that network if you already have them configured.',
      'Connect to RSK': 'Connect to RSK',
      'Add the RSK tokens! Click below to add the': 'Add the RSK tokens! Click below to add the',
      'RSK compatible tokens.': 'RSK compatible tokens.',
      Add: 'Add',
      Token: 'Token',
      'RIF enables broad interoperability and faster time-to-deployment, bridging the gap between blockchain technologies and their mass-market adoption.': 'RIF enables broad interoperability and faster time-to-deployment, bridging the gap between blockchain technologies and their mass-market adoption.',
      Whitepaper: 'Whitepaper',
      Blog: 'Blog',
      Roadmap: 'Roadmap',
      Github: 'Github',
      'FAQ´s': 'FAQ´s',
      'Brand Guidelines': 'Brand Guidelines',
      RSK: 'RSK',
      'About IOVLabs': 'About IOVLabs',
      'Contact IOVLabs': 'Contact IOVLabs',
      'Terms & Conditions': 'Terms & Conditions',
      'Privacy Policy': 'Privacy Policy',
      Copyright: 'Copyright',
      'RSK Labs. All rights reserved.': 'RSK Labs. All rights reserved.',
      'Choose your favourite exchange and operate with your tokens.': 'Choose your favourite exchange and operate with your tokens.',
      'Get test RBTC': 'Get test RBTC'
    }
  }
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources,
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  })

export default i18n
