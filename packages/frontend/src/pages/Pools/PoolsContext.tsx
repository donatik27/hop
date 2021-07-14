import React, {
  FC,
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
  useCallback
} from 'react'
import { ethers, Signer, BigNumber } from 'ethers'
import { formatUnits, parseUnits } from 'ethers/lib/utils'
import { Token } from '@hop-protocol/sdk'
import { useApp } from 'src/contexts/AppContext'
import { useWeb3Context } from 'src/contexts/Web3Context'
import Network from 'src/models/Network'
import Address from 'src/models/Address'
import Price from 'src/models/Price'
import { UINT256 } from 'src/constants'
import Transaction from 'src/models/Transaction'
import useInterval from 'src/hooks/useInterval'
import useBalance from 'src/hooks/useBalance'
import logger from 'src/logger'

type PoolsContextProps = {
  networks: Network[]
  canonicalToken: Token | undefined
  hopToken: Token | undefined
  address: Address | undefined
  totalSupply: string | undefined
  selectedNetwork: Network | undefined
  setSelectedNetwork: (network: Network) => void
  token0Amount: string
  setToken0Amount: (value: string) => void
  token1Amount: string
  setToken1Amount: (value: string) => void
  poolSharePercentage: string | undefined
  token0Price: string | undefined
  token1Price: string | undefined
  poolReserves: string[]
  token1Rate: string | undefined
  addLiquidity: () => void
  removeLiquidity: () => void
  userPoolBalance: string | undefined
  userPoolTokenPercentage: string | undefined
  token0Deposited: string | undefined
  token1Deposited: string | undefined
  canonicalBalance: BigNumber | undefined
  hopBalance: BigNumber | undefined
  loadingCanonicalBalance: boolean
  loadingHopBalance: boolean
  txHash: string | undefined
  sending: boolean
  validFormFields: boolean
  sendButtonText: string
  error: string | null | undefined
  setError: (error: string | null | undefined) => void
}

const PoolsContext = createContext<PoolsContextProps>({
  networks: [],
  canonicalToken: undefined,
  hopToken: undefined,
  address: undefined,
  totalSupply: undefined,
  selectedNetwork: undefined,
  setSelectedNetwork: (network: Network) => {},
  token0Amount: '',
  setToken0Amount: (value: string) => {},
  token1Amount: '',
  setToken1Amount: (value: string) => {},
  poolSharePercentage: undefined,
  token0Price: undefined,
  token1Price: undefined,
  poolReserves: [],
  token1Rate: undefined,
  addLiquidity: () => {},
  removeLiquidity: () => {},
  userPoolBalance: undefined,
  userPoolTokenPercentage: undefined,
  token0Deposited: undefined,
  token1Deposited: undefined,
  canonicalBalance: undefined,
  hopBalance: undefined,
  loadingCanonicalBalance: false,
  loadingHopBalance: false,
  txHash: undefined,
  sending: false,
  validFormFields: false,
  sendButtonText: '',
  error: null,
  setError: (error: string | null | undefined) => {}
})

const PoolsContextProvider: FC = ({ children }) => {
  const [token0Amount, setToken0Amount] = useState<string>('')
  const [token1Amount, setToken1Amount] = useState<string>('')
  const [totalSupply, setTotalSupply] = useState<string>('')
  const [token1Rate, setToken1Rate] = useState<string>('')
  const [poolReserves, setPoolReserves] = useState<string[]>([])
  const [poolSharePercentage, setPoolSharePercentage] = useState<string>('0')
  const [token0Price, setToken0Price] = useState<string>('-')
  const [token1Price, setToken1Price] = useState<string>('-')
  const [userPoolBalance, setUserPoolBalance] = useState<string>('')
  const [userPoolTokenPercentage, setUserPoolTokenPercentage] = useState<
    string
  >('')
  const [token0Deposited, setToken0Deposited] = useState<string>('')
  const [token1Deposited, setToken1Deposited] = useState<string>('')

  const {
    networks,
    txConfirm,
    txHistory,
    sdk,
    selectedBridge
  } = useApp()
  const { address, provider, checkConnectedNetworkId } = useWeb3Context()
  const [error, setError] = useState<string | null | undefined>(null)
  const l2Networks = useMemo(() => {
    return networks.filter(network => !network.isLayer1)
  }, [networks])
  const [selectedNetwork, setSelectedNetwork] = useState<Network>(l2Networks[0])

  const canonicalToken = useMemo(() => {
    return selectedBridge?.getCanonicalToken(selectedNetwork.slug)
  }, [selectedBridge, selectedNetwork])

  const hopToken = useMemo(() => {
    return selectedBridge?.getL2HopToken(selectedNetwork.slug)
  }, [selectedBridge, selectedNetwork])

  const [txHash, setTxHash] = useState<string | undefined>()
  const [sending, setSending] = useState<boolean>(false)

  const { balance: canonicalBalance, loading: loadingCanonicalBalance } = useBalance(
    canonicalToken,
    selectedNetwork,
    address
  )

  const { balance: hopBalance, loading: loadingHopBalance } = useBalance(
    hopToken,
    selectedNetwork,
    address
  )

  useEffect(() => {
    if (!l2Networks.includes(selectedNetwork)) {
      setSelectedNetwork(l2Networks[0])
    }
  }, [l2Networks])
  useEffect(() => {
    if (Number(token0Price) && Number(token0Amount) && !Number(token1Amount)) {
      const token1Value = Number(token0Amount) * Number(token1Rate)
      setToken1Amount(token1Value.toFixed(2))
    }
  }, [token0Price, token0Amount, token1Amount])
  useEffect(() => {
    if (Number(token1Price) && Number(token1Amount) && !Number(token0Amount)) {
      const token0Value = Number(token1Amount) / Number(token1Rate)
      setToken0Amount(token0Value.toFixed(2))
    }
  }, [token1Price, token0Amount, token1Amount])

  const updatePrices = useCallback(async () => {
    if (!totalSupply) return
    if (token1Rate) {
      const price = new Price(token1Rate, '1')
      setToken0Price(price.toFixed(2))
      setToken1Price(price.inverted().toFixed(2))
    }

    if (token0Amount && token1Amount) {
      const amount0 =
        (Number(token0Amount) * Number(totalSupply)) / Number(poolReserves[0])
      const amount1 =
        (Number(token1Amount) * Number(totalSupply)) / Number(poolReserves[1])
      const liquidity = Math.min(amount0, amount1)
      const sharePercentage = Math.max(
        Math.min(
          Number(
            ((liquidity / (Number(totalSupply) + liquidity)) * 100).toFixed(2)
          ),
          100
        ),
        0
      )
      setPoolSharePercentage((sharePercentage || '0').toString())
    } else {
      setPoolSharePercentage('0')
    }
  }, [token0Amount, totalSupply, token1Amount, token1Rate, poolReserves])

  useEffect(() => {
    updatePrices()
  }, [
    hopToken,
    token0Amount,
    totalSupply,
    token1Amount,
    token1Rate,
    poolReserves,
    updatePrices
  ])

  const updateUserPoolPositions = useCallback(async () => {
    try {
      if (!canonicalToken) return
      if (!provider) return
      const contractProvider = selectedNetwork.provider
      if (!contractProvider) return
      const bridge = await sdk.bridge(canonicalToken.symbol)
      const lpToken = await bridge.getSaddleLpToken(selectedNetwork.slug)

      const [lpDecimalsBn, totalSupply, balance, reserves] = await Promise.all([
        lpToken.decimals,
        (await lpToken.getErc20()).totalSupply(),
        lpToken.balanceOf(),
        bridge.getSaddleSwapReserves(selectedNetwork.slug)
      ])
      const lpDecimals = Number(lpDecimalsBn.toString())

      const formattedTotalSupply = formatUnits(
        totalSupply.toString(),
        lpDecimals
      )
      setTotalSupply(formattedTotalSupply)

      const formattedBalance = formatUnits(balance.toString(), lpDecimals)
      setUserPoolBalance(Number(formattedBalance).toFixed(2))

      const poolPercentage =
        (Number(formattedBalance) / Number(formattedTotalSupply)) * 100
      const formattedPoolPercentage =
        poolPercentage.toFixed(2) === '0.00'
          ? '<0.01'
          : poolPercentage.toFixed(2)
      setUserPoolTokenPercentage(formattedPoolPercentage)

      const reserve0 = formatUnits(reserves[0].toString(), canonicalToken.decimals)
      const reserve1 = formatUnits(reserves[1].toString(), canonicalToken.decimals)
      setPoolReserves([reserve0, reserve1])

      const token0Deposited =
        (Number(formattedBalance) * Number(reserve0)) /
        Number(formattedTotalSupply)
      const token1Deposited =
        (Number(formattedBalance) * Number(reserve1)) /
        Number(formattedTotalSupply)
      setToken0Deposited(token0Deposited.toFixed(2))
      setToken1Deposited(token1Deposited.toFixed(2))

      const amount0 = (1 * Number(reserve1)) / Number(reserve0)
      setToken1Rate(amount0.toString())
    } catch (err) {
      logger.error(err)
    }
  }, [provider, selectedNetwork, canonicalToken, hopToken])

  useEffect(() => {
    updateUserPoolPositions()
  }, [
    provider,
    selectedNetwork,
    canonicalToken,
    hopToken,
    updateUserPoolPositions
  ])

  useInterval(() => {
    updatePrices()
  }, 5 * 1000)

  useInterval(() => {
    updateUserPoolPositions()
  }, 20 * 1000)

  const approveTokens = async (
    isHop: boolean,
    amount: string,
    network: Network
  ): Promise<ethers.providers.TransactionResponse | undefined> => {
    if (!canonicalToken) {
      throw new Error('Canonical token is required')
    }

    if (!hopToken) {
      throw new Error('Hop token is required')
    }

    const signer = provider?.getSigner()
    const bridge = await sdk.bridge(canonicalToken.symbol).connect(signer as Signer)
    const amm = bridge.getAmm(network.slug)
    const saddleSwap = await amm.getSaddleSwap()
    const spender = saddleSwap.address
    const parsedAmount = parseUnits(amount, canonicalToken.decimals)
    const token = isHop ? bridge.getL2HopToken(network.slug) : bridge.getCanonicalToken(network.slug)
    const approved = await token.allowance(spender)

    if (approved.lt(parsedAmount)) {
      return txConfirm?.show({
        kind: 'approval',
        inputProps: {
          tagline: `Allow Hop to spend your ${token.symbol} on ${selectedNetwork.name}`,
          amount,
          tokenSymbol: isHop ? hopToken.symbol : canonicalToken.symbol
        },
        onConfirm: async (approveAll: boolean) => {
          return token.approve(
            spender,
            approveAll ? UINT256 : parsedAmount
          )
        }
      })
    }
  }

  const addLiquidity = async () => {
    if (!canonicalToken) {
      throw new Error('Canonical token is required')
    }

    if (!hopToken) {
      throw new Error('Hop token is required')
    }

    try {
      setError(null)
      const networkId = Number(selectedNetwork?.networkId)
      const isNetworkConnected = await checkConnectedNetworkId(networkId)
      if (!isNetworkConnected) return

      if (!Number(token0Amount)) {
        return
      }
      if (!Number(token1Amount)) {
        return
      }

      setSending(true)
      let tx = await approveTokens(false, token0Amount, selectedNetwork)
      if (tx?.hash && selectedNetwork) {
        txHistory?.addTransaction(
          new Transaction({
            hash: tx?.hash,
            networkName: selectedNetwork?.slug
          })
        )
      }
      await tx?.wait()
      setTxHash(tx?.hash)
      tx = await approveTokens(true, token1Amount, selectedNetwork)
      if (tx?.hash && selectedNetwork) {
        txHistory?.addTransaction(
          new Transaction({
            hash: tx?.hash,
            networkName: selectedNetwork?.slug
          })
        )
      }
      setTxHash(tx?.hash)
      await tx?.wait()

      const signer = provider?.getSigner()
      const amount0Desired = parseUnits(token0Amount, canonicalToken?.decimals)
      const amount1Desired = parseUnits(token1Amount, hopToken?.decimals)
      const minToMint = 0
      const deadline = (Date.now() / 1000 + 5 * 60) | 0

      tx = await txConfirm?.show({
        kind: 'addLiquidity',
        inputProps: {
          token0: {
            amount: token0Amount,
            token: canonicalToken,
            network: selectedNetwork
          },
          token1: {
            amount: token1Amount,
            token: hopToken,
            network: selectedNetwork
          }
        },
        onConfirm: async () => {
          const bridge = sdk.bridge(canonicalToken.symbol)
          return bridge
            .connect(signer as Signer)
            .addLiquidity(
              amount0Desired,
              amount1Desired,
              selectedNetwork.slug,
              {
                minToMint,
                deadline
              }
            )
        }
      })

      setTxHash(tx?.hash)
      if (tx?.hash && selectedNetwork) {
        txHistory?.addTransaction(
          new Transaction({
            hash: tx?.hash,
            networkName: selectedNetwork?.slug
          })
        )
      }
      await tx?.wait()
      updateUserPoolPositions()
    } catch (err) {
      if (!/cancelled/gi.test(err.message)) {
        setError(err.message)
      }
      logger.error(err)
    }

    setSending(false)
  }

  const removeLiquidity = async () => {
    if (!canonicalToken) {
      throw new Error('Canonical token is required')
    }

    if (!hopToken) {
      throw new Error('Hop token is required')
    }

    try {
      setError(null)
      const networkId = Number(selectedNetwork?.networkId)
      const isNetworkConnected = await checkConnectedNetworkId(networkId)
      if (!isNetworkConnected) return

      const bridge = sdk.bridge(canonicalToken.symbol)
      const amm = bridge.getAmm(selectedNetwork.slug)
      const saddleSwap = await amm.getSaddleSwap()
      const lpToken = await bridge.getSaddleLpToken(selectedNetwork.slug)
      const lpTokenDecimals = await lpToken.decimals

      const signer = provider?.getSigner()
      const balance = await lpToken?.balanceOf()
      const formattedBalance = Number(
        formatUnits(balance.toString(), lpTokenDecimals)
      )
      let liquidityTokensAmount = 0

      let tx: any
      const approved = await lpToken.allowance(
        saddleSwap.address
      )

      if (approved.lt(balance)) {
        tx = await txConfirm?.show({
          kind: 'approval',
          inputProps: {
            tagline: `Allow Hop to spend your LP-${lpToken.symbol} on ${selectedNetwork.name}`,
            amount: formattedBalance,
            tokenSymbol: lpToken.symbol
          },
          onConfirm: async (approveAll: boolean) => {
            return lpToken.approve(
              saddleSwap.address,
              approveAll ? UINT256 : balance
            )
          }
        })
      }

      if (tx?.hash) {
        txHistory?.addTransaction(
          new Transaction({
            hash: tx?.hash,
            networkName: selectedNetwork?.slug
          })
        )
      }
      setTxHash(tx?.hash)
      await tx?.wait()

      // setSending(true)
      const amount0Min = '0'
      const amount1Min = '0'
      const deadline = (Date.now() / 1000 + 5 * 60) | 0

      const token0Amount = token0Deposited
      const token1Amount = token1Deposited

      tx = await txConfirm?.show({
        kind: 'removeLiquidity',
        inputProps: {
          token0: {
            amount: token0Amount,
            token: canonicalToken,
            network: selectedNetwork
          },
          token1: {
            amount: token1Amount,
            token: hopToken,
            network: selectedNetwork
          }
        },
        onConfirm: async (amountPercent: number) => {
          liquidityTokensAmount = formattedBalance * (amountPercent / 100)
          const parsedLiquidityTokenAmount = parseUnits(
            liquidityTokensAmount.toString(),
            lpTokenDecimals
          )

          const bridge = sdk.bridge(canonicalToken.symbol)
          return bridge
            .connect(signer as Signer)
            .removeLiquidity(
              parsedLiquidityTokenAmount,
              selectedNetwork.slug,
              {
                amount0Min,
                amount1Min,
                deadline
              }
            )
        }
      })

      setTxHash(tx?.hash)
      if (tx?.hash && selectedNetwork) {
        txHistory?.addTransaction(
          new Transaction({
            hash: tx?.hash,
            networkName: selectedNetwork?.slug
          })
        )
      }
      await tx?.wait()
      updateUserPoolPositions()
    } catch (err) {
      if (!/cancelled/gi.test(err.message)) {
        setError(err.message)
      }
      logger.error(err)
    }

    setSending(false)
  }

  // ToDo: Use BigNumber everywhere and get rid of this conversion
  const token0Balance = canonicalToken && canonicalBalance ? Number(formatUnits(canonicalBalance, canonicalToken.decimals)) : 0
  const token1Balance = hopToken && hopBalance ? Number(formatUnits(hopBalance, hopToken.decimals)) : 0

  const enoughBalance =
    token0Balance >= Number(token0Amount) &&
    token1Balance >= Number(token1Amount)
  const validFormFields = !!(token0Amount && token1Amount && enoughBalance)
  let sendButtonText = 'Add Liquidity'
  if (!enoughBalance) {
    sendButtonText = 'Insufficient funds'
  }

  return (
    <PoolsContext.Provider
      value={{
        networks: l2Networks,
        canonicalToken,
        hopToken,
        address,
        totalSupply,
        selectedNetwork,
        setSelectedNetwork,
        token0Amount,
        setToken0Amount,
        token1Amount,
        setToken1Amount,
        poolSharePercentage,
        token0Price,
        token1Price,
        poolReserves,
        token1Rate,
        addLiquidity,
        removeLiquidity,
        userPoolBalance,
        userPoolTokenPercentage,
        token0Deposited,
        token1Deposited,
        txHash,
        sending,
        validFormFields,
        canonicalBalance,
        hopBalance,
        loadingCanonicalBalance,
        loadingHopBalance,
        sendButtonText,
        error,
        setError
      }}
    >
      {children}
    </PoolsContext.Provider>
  )
}

export const usePools = () => useContext(PoolsContext)

export default PoolsContextProvider
