export const rpcUrls: { [key: string]: string } = {
  kovan: 'https://kovan.rpc.hop.exchange',
  optimism: 'https://kovan.optimism.io',
  arbitrum: 'https://kovan3.arbitrum.io/rpc',
  xdai: 'https://sokol.poa.network'
}

export const networkIds: { [key: string]: string } = {
  kovan: '42',
  optimism: '69',
  arbitrum: '79377087078960',
  xdai: '77'
}

export const tokens: {
  [key: string]: {
    [key: string]: {
      [key: string]: string
    }
  }
} = {
  DAI: {
    kovan: {
      l1CanonicalToken: '0x7d669A64deb8a4A51eEa755bb0E19FD39CE25Ae9',
      l1Bridge: '0x8C295068Cd136C348F90f9f31C85A5c61Ed490Bc'
    },
    /*
    arbitrum: {
      l1CanonicalBridge: '0xE681857DEfE8b454244e701BA63EfAa078d7eA85',
      l2CanonicalToken: '0x7d669A64deb8a4A51eEa755bb0E19FD39CE25Ae9',
      l2Bridge: '0x9a57ED0207EE95Aa580253dBaef9FDf4A478FcBc',
      l2HopBridgeToken: '0xac9db0707bBC106B1Acd9CCDc07EdB9ED190108b',
      l2UniswapRouter: '0x5B64A7A5c5C4F61e8bEABB721c5988016D9b1587',
      l2UniswapFactory: '0x5006BB088D06dEBA783a54769Bf8a883bBaDDA6a',
      l2UniswapExchange: '0x3cb14029f46D7A4Ee346A2b1F61C8e5bACD86341',
      arbChain: '0x2e8aF9f74046D3E55202Fcfb893348316B142230'
    },
		*/
    optimism: {
      l1CanonicalBridge: '0xC1e7Be0E1aDD345afB2485aA5E774cD79cBbbBf5',
      l2CanonicalBridge: '0x782e1ec5F7381269b2e5DC4eD58648C60161539b',
      l2CanonicalToken: '0x782e1ec5F7381269b2e5DC4eD58648C60161539b',
      l2Bridge: '0xd6935d3FE65f804e54a8e0d0A0F8793f0aC196Ff',
      l2HopBridgeToken: '0x761ac04A47076eadf2BfAF545e2B101C8417498e',
      l2UniswapWrapper: '0x6523C434ce2a4AAf168FD59a1d6074772C9a15bE',
      l2UniswapRouter: '0x8D65D4160559493b0a687ED5Ae39dcce88cB5cFc',
      l2UniswapFactory: '0x6523C434ce2a4AAf168FD59a1d6074772C9a15bE',
      l2UniswapExchange: '0xBEa657cb5BD947811694882A821F7EC08370c252'
    },
    xdai: {
      l1CanonicalBridge: '0xA960d095470f7509955d5402e36d9DB984B5C8E2',
      l2CanonicalBridge: '0x40CdfF886715A4012fAD0219D15C98bB149AeF0e',
      l2CanonicalToken: '0x714983a8Dc3329bf3BeB8F36b49878CF944E5A3B',
      l2Bridge: '0xc638F45C59DBD449173266Cd2c47E9670630F013',
      l2HopBridgeToken: '0x66CC0844797349801984323Ed0c0Cac0d81290E9',
      l2UniswapWrapper: '0x8E692A638Ac9Ab55C8224175C60EBF9a17dba372',
      l2UniswapRouter: '0x85a288Dd75BE15b4C839BAEcbC6cAd2F2889aB5a',
      l2UniswapFactory: '0xA672420F4779f26Db86dD5bB5711F86B6d6e5a1f',
      l2UniswapExchange: '0x1A48d744b738c9a045a18A129E253361775512De',
      l1Amb: '0xFe446bEF1DbF7AFE24E81e05BC8B271C1BA9a560',
      l2Amb: '0xFe446bEF1DbF7AFE24E81e05BC8B271C1BA9a560'
    }
  },
  sETH: {
    kovan: {
      l1CanonicalToken: '0x7EE6109672c07Dcf97435C8238835EFF5D6E89FD',
      l1Bridge: '0xfB576E0f97428e938Ca27AAF9668D39a8658A479'
    },
    optimism: {
      l1CanonicalBridge: '0xC1e7Be0E1aDD345afB2485aA5E774cD79cBbbBf5',
      l2CanonicalBridge: '0x782e1ec5F7381269b2e5DC4eD58648C60161539b',
      l2CanonicalToken: '0x5C18Cd9D59ca1B587db57838cf9ca8a21e3714AF',
      l2Bridge: '0xE0cd7450184B89Ed6B8F4682B796642522536757',
      l2HopBridgeToken: '0x563B4d928bF7561A88D4E4FD6313B5d976603E7d',
      l2UniswapWrapper: '0x6C0DE4cA0901827dd5C3D56708B698B493F28004',
      l2UniswapRouter: '0x83e04F8628A14fA560423A1813d6fcec8186Cc0F',
      l2UniswapFactory: '0xcD1C7da9D80A03Aee7FB7743B5376612530DC8e5',
      l2UniswapExchange: '0xFf0ecd10325E9E60d941e8864f45CcF73b929e9e'
    },
    xdai: {
      l1CanonicalBridge: '0xA960d095470f7509955d5402e36d9DB984B5C8E2',
      l2CanonicalBridge: '0x40CdfF886715A4012fAD0219D15C98bB149AeF0e',
      l2CanonicalToken: '0xeC3B005D2BF47f505F1A0cD68eEb7Ea439D6daF6',
      l2Bridge: '0x8C8CB448d3c683e09750AE6BdfabF18eB9F42941',
      l2HopBridgeToken: '0xbBA530F8B96C82d5DCC9d987728E12A36e3fF87D',
      l2UniswapWrapper: '0xADfC87C375a3698A89ee1d7Cf9250810b6d0CF19',
      l2UniswapRouter: '0xDca75F271b435112B22d4B5b0e53cA2a7cA9ceB1',
      l2UniswapFactory: '0xaC9D27C4379FD9389Bc6FFd59Ca699c6Db5F9848',
      l2UniswapExchange: '0xb2bB840a83E3f3E10AD87bD8A3d571899085aF2c',
      l1Amb: '0xFe446bEF1DbF7AFE24E81e05BC8B271C1BA9a560',
      l2Amb: '0xFe446bEF1DbF7AFE24E81e05BC8B271C1BA9a560'
    }
  },
  sBTC: {
    kovan: {
      l1CanonicalToken: '0x7a4f56B0Dd21d730604A266245a0067b97605DAE',
      l1Bridge: '0x12084002058A998C3A7A3E306c9441bD858c8052'
    },
    optimism: {
      l1CanonicalBridge: '0xC1e7Be0E1aDD345afB2485aA5E774cD79cBbbBf5',
      l2CanonicalBridge: '0x782e1ec5F7381269b2e5DC4eD58648C60161539b',
      l2CanonicalToken: '0x4beAFb9DfA4842Cf81A26b4e49E3f322616c4Ca5',
      l2Bridge: '0x59D19B60AFeC79BeA45270fEf344539374E5a972',
      l2HopBridgeToken: '0xd4334684db9DcbD9Dc3b77039598b66A998d5FBF',
      l2UniswapWrapper: '0xD9260500417820A7927c8611a36F95d039d5dA7a',
      l2UniswapRouter: '0xcc68D7A5ed9a0f6EF7DD26E3102dC43D1A088FCf',
      l2UniswapFactory: '0x9D560C6Bfd54447042dc81F67f23e52d3CA73eD0',
      l2UniswapExchange: '0x39B052820F808534d5eD7C2b26f070169Fa6A686'
    },
    xdai: {
      l1CanonicalBridge: '0xA960d095470f7509955d5402e36d9DB984B5C8E2',
      l2CanonicalBridge: '0x40CdfF886715A4012fAD0219D15C98bB149AeF0e',
      l2CanonicalToken: '0x696ED254EC9bD27328d5ef81905042913260eccd',
      l2Bridge: '0x2eD39fdDee5f7a313E28aFcdB373C97CfE5B17DB',
      l2HopBridgeToken: '0xaE75AB5eF8c013a78320E296F9C89F005D5E5DA7',
      l2UniswapWrapper: '0x20aF91d7789b9717dd931251e6337b84c8c62b5D',
      l2UniswapRouter: '0xCbBcAA6b18D52da737b46c904a9C9F19E44513E7',
      l2UniswapFactory: '0x057d871Ec6a93A05835B4db3Fb45305Cf367e0AB',
      l2UniswapExchange: '0x2Cf09ad0bC88718cac957a4946f652fCd40AB954',
      l1Amb: '0xFe446bEF1DbF7AFE24E81e05BC8B271C1BA9a560',
      l2Amb: '0xFe446bEF1DbF7AFE24E81e05BC8B271C1BA9a560'
    }
  }
  /*
  ARB: {
    kovan: {
      l1CanonicalToken: '0xE41d965f6e7541139f8D9F331176867FB6972Baf',
      l1Bridge: '0x0E5a812ebA2b17B2Aea3E50Ed05518668839afa9'
    },
    arbitrum: {
      l1CanonicalBridge: '0xE681857DEfE8b454244e701BA63EfAa078d7eA85',
      l2CanonicalToken: '0xE41d965f6e7541139f8D9F331176867FB6972Baf',
      l2Bridge: '0xAb00C81e9d90c5c068218FF1eaA8264FcDf5f5fB',
      l2HopBridgeToken: '0x427aA184ce8bDC92c0B4dDf19A5b9A3D5B7F45BC',
      l2UniswapRouter: '0x653616AFcD6f4D645d8d5A08b3F74e140f981b00',
      l2UniswapFactory: '0x880046478C059643B6624452Af203F5CC478E3AC',
      l2UniswapExchange: '0x67ef9648f7c45087fCc85eA7b2F1fe79f07D52be'
    }
  }
	*/
}