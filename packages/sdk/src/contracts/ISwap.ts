/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common.js";

export interface ISwapInterface extends utils.Interface {
  functions: {
    "addLiquidity(uint256[],uint256,uint256)": FunctionFragment;
    "calculateRemoveLiquidity(uint256)": FunctionFragment;
    "calculateRemoveLiquidityOneToken(uint256,uint8)": FunctionFragment;
    "calculateSwap(uint8,uint8,uint256)": FunctionFragment;
    "calculateTokenAmount(uint256[],bool)": FunctionFragment;
    "getA()": FunctionFragment;
    "getAllowlist()": FunctionFragment;
    "getToken(uint8)": FunctionFragment;
    "getTokenBalance(uint8)": FunctionFragment;
    "getTokenIndex(address)": FunctionFragment;
    "getVirtualPrice()": FunctionFragment;
    "initialize(address[],uint8[],string,string,uint256,uint256,uint256,uint256)": FunctionFragment;
    "isGuarded()": FunctionFragment;
    "removeLiquidity(uint256,uint256[],uint256)": FunctionFragment;
    "removeLiquidityImbalance(uint256[],uint256,uint256)": FunctionFragment;
    "removeLiquidityOneToken(uint256,uint8,uint256,uint256)": FunctionFragment;
    "swap(uint8,uint8,uint256,uint256,uint256)": FunctionFragment;
    "updateUserWithdrawFee(address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addLiquidity"
      | "calculateRemoveLiquidity"
      | "calculateRemoveLiquidityOneToken"
      | "calculateSwap"
      | "calculateTokenAmount"
      | "getA"
      | "getAllowlist"
      | "getToken"
      | "getTokenBalance"
      | "getTokenIndex"
      | "getVirtualPrice"
      | "initialize"
      | "isGuarded"
      | "removeLiquidity"
      | "removeLiquidityImbalance"
      | "removeLiquidityOneToken"
      | "swap"
      | "updateUserWithdrawFee"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addLiquidity",
    values: [
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateRemoveLiquidity",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateRemoveLiquidityOneToken",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateSwap",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateTokenAmount",
    values: [PromiseOrValue<BigNumberish>[], PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(functionFragment: "getA", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getAllowlist",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getToken",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenBalance",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenIndex",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getVirtualPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(functionFragment: "isGuarded", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeLiquidity",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "removeLiquidityImbalance",
    values: [
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "removeLiquidityOneToken",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swap",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "updateUserWithdrawFee",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "addLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateRemoveLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateRemoveLiquidityOneToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateSwap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateTokenAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getA", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAllowlist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTokenBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVirtualPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isGuarded", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidityImbalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidityOneToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateUserWithdrawFee",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ISwap extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ISwapInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addLiquidity(
      amounts: PromiseOrValue<BigNumberish>[],
      minToMint: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    calculateRemoveLiquidity(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    calculateRemoveLiquidityOneToken(
      tokenAmount: PromiseOrValue<BigNumberish>,
      tokenIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { availableTokenAmount: BigNumber }>;

    calculateSwap(
      tokenIndexFrom: PromiseOrValue<BigNumberish>,
      tokenIndexTo: PromiseOrValue<BigNumberish>,
      dx: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    calculateTokenAmount(
      amounts: PromiseOrValue<BigNumberish>[],
      deposit: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getA(overrides?: CallOverrides): Promise<[BigNumber]>;

    getAllowlist(overrides?: CallOverrides): Promise<[string]>;

    getToken(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getTokenBalance(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getTokenIndex(
      tokenAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[number]>;

    getVirtualPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    initialize(
      pooledTokens: PromiseOrValue<string>[],
      decimals: PromiseOrValue<BigNumberish>[],
      lpTokenName: PromiseOrValue<string>,
      lpTokenSymbol: PromiseOrValue<string>,
      a: PromiseOrValue<BigNumberish>,
      fee: PromiseOrValue<BigNumberish>,
      adminFee: PromiseOrValue<BigNumberish>,
      withdrawFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    isGuarded(overrides?: CallOverrides): Promise<[boolean]>;

    removeLiquidity(
      amount: PromiseOrValue<BigNumberish>,
      minAmounts: PromiseOrValue<BigNumberish>[],
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    removeLiquidityImbalance(
      amounts: PromiseOrValue<BigNumberish>[],
      maxBurnAmount: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    removeLiquidityOneToken(
      tokenAmount: PromiseOrValue<BigNumberish>,
      tokenIndex: PromiseOrValue<BigNumberish>,
      minAmount: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    swap(
      tokenIndexFrom: PromiseOrValue<BigNumberish>,
      tokenIndexTo: PromiseOrValue<BigNumberish>,
      dx: PromiseOrValue<BigNumberish>,
      minDy: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateUserWithdrawFee(
      recipient: PromiseOrValue<string>,
      transferAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  addLiquidity(
    amounts: PromiseOrValue<BigNumberish>[],
    minToMint: PromiseOrValue<BigNumberish>,
    deadline: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  calculateRemoveLiquidity(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  calculateRemoveLiquidityOneToken(
    tokenAmount: PromiseOrValue<BigNumberish>,
    tokenIndex: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  calculateSwap(
    tokenIndexFrom: PromiseOrValue<BigNumberish>,
    tokenIndexTo: PromiseOrValue<BigNumberish>,
    dx: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  calculateTokenAmount(
    amounts: PromiseOrValue<BigNumberish>[],
    deposit: PromiseOrValue<boolean>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getA(overrides?: CallOverrides): Promise<BigNumber>;

  getAllowlist(overrides?: CallOverrides): Promise<string>;

  getToken(
    index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  getTokenBalance(
    index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTokenIndex(
    tokenAddress: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<number>;

  getVirtualPrice(overrides?: CallOverrides): Promise<BigNumber>;

  initialize(
    pooledTokens: PromiseOrValue<string>[],
    decimals: PromiseOrValue<BigNumberish>[],
    lpTokenName: PromiseOrValue<string>,
    lpTokenSymbol: PromiseOrValue<string>,
    a: PromiseOrValue<BigNumberish>,
    fee: PromiseOrValue<BigNumberish>,
    adminFee: PromiseOrValue<BigNumberish>,
    withdrawFee: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  isGuarded(overrides?: CallOverrides): Promise<boolean>;

  removeLiquidity(
    amount: PromiseOrValue<BigNumberish>,
    minAmounts: PromiseOrValue<BigNumberish>[],
    deadline: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  removeLiquidityImbalance(
    amounts: PromiseOrValue<BigNumberish>[],
    maxBurnAmount: PromiseOrValue<BigNumberish>,
    deadline: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  removeLiquidityOneToken(
    tokenAmount: PromiseOrValue<BigNumberish>,
    tokenIndex: PromiseOrValue<BigNumberish>,
    minAmount: PromiseOrValue<BigNumberish>,
    deadline: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  swap(
    tokenIndexFrom: PromiseOrValue<BigNumberish>,
    tokenIndexTo: PromiseOrValue<BigNumberish>,
    dx: PromiseOrValue<BigNumberish>,
    minDy: PromiseOrValue<BigNumberish>,
    deadline: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateUserWithdrawFee(
    recipient: PromiseOrValue<string>,
    transferAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addLiquidity(
      amounts: PromiseOrValue<BigNumberish>[],
      minToMint: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateRemoveLiquidity(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    calculateRemoveLiquidityOneToken(
      tokenAmount: PromiseOrValue<BigNumberish>,
      tokenIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateSwap(
      tokenIndexFrom: PromiseOrValue<BigNumberish>,
      tokenIndexTo: PromiseOrValue<BigNumberish>,
      dx: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateTokenAmount(
      amounts: PromiseOrValue<BigNumberish>[],
      deposit: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getA(overrides?: CallOverrides): Promise<BigNumber>;

    getAllowlist(overrides?: CallOverrides): Promise<string>;

    getToken(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getTokenBalance(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTokenIndex(
      tokenAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<number>;

    getVirtualPrice(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      pooledTokens: PromiseOrValue<string>[],
      decimals: PromiseOrValue<BigNumberish>[],
      lpTokenName: PromiseOrValue<string>,
      lpTokenSymbol: PromiseOrValue<string>,
      a: PromiseOrValue<BigNumberish>,
      fee: PromiseOrValue<BigNumberish>,
      adminFee: PromiseOrValue<BigNumberish>,
      withdrawFee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    isGuarded(overrides?: CallOverrides): Promise<boolean>;

    removeLiquidity(
      amount: PromiseOrValue<BigNumberish>,
      minAmounts: PromiseOrValue<BigNumberish>[],
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    removeLiquidityImbalance(
      amounts: PromiseOrValue<BigNumberish>[],
      maxBurnAmount: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeLiquidityOneToken(
      tokenAmount: PromiseOrValue<BigNumberish>,
      tokenIndex: PromiseOrValue<BigNumberish>,
      minAmount: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swap(
      tokenIndexFrom: PromiseOrValue<BigNumberish>,
      tokenIndexTo: PromiseOrValue<BigNumberish>,
      dx: PromiseOrValue<BigNumberish>,
      minDy: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateUserWithdrawFee(
      recipient: PromiseOrValue<string>,
      transferAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    addLiquidity(
      amounts: PromiseOrValue<BigNumberish>[],
      minToMint: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    calculateRemoveLiquidity(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateRemoveLiquidityOneToken(
      tokenAmount: PromiseOrValue<BigNumberish>,
      tokenIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateSwap(
      tokenIndexFrom: PromiseOrValue<BigNumberish>,
      tokenIndexTo: PromiseOrValue<BigNumberish>,
      dx: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateTokenAmount(
      amounts: PromiseOrValue<BigNumberish>[],
      deposit: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getA(overrides?: CallOverrides): Promise<BigNumber>;

    getAllowlist(overrides?: CallOverrides): Promise<BigNumber>;

    getToken(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTokenBalance(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTokenIndex(
      tokenAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getVirtualPrice(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      pooledTokens: PromiseOrValue<string>[],
      decimals: PromiseOrValue<BigNumberish>[],
      lpTokenName: PromiseOrValue<string>,
      lpTokenSymbol: PromiseOrValue<string>,
      a: PromiseOrValue<BigNumberish>,
      fee: PromiseOrValue<BigNumberish>,
      adminFee: PromiseOrValue<BigNumberish>,
      withdrawFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    isGuarded(overrides?: CallOverrides): Promise<BigNumber>;

    removeLiquidity(
      amount: PromiseOrValue<BigNumberish>,
      minAmounts: PromiseOrValue<BigNumberish>[],
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    removeLiquidityImbalance(
      amounts: PromiseOrValue<BigNumberish>[],
      maxBurnAmount: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    removeLiquidityOneToken(
      tokenAmount: PromiseOrValue<BigNumberish>,
      tokenIndex: PromiseOrValue<BigNumberish>,
      minAmount: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    swap(
      tokenIndexFrom: PromiseOrValue<BigNumberish>,
      tokenIndexTo: PromiseOrValue<BigNumberish>,
      dx: PromiseOrValue<BigNumberish>,
      minDy: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateUserWithdrawFee(
      recipient: PromiseOrValue<string>,
      transferAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addLiquidity(
      amounts: PromiseOrValue<BigNumberish>[],
      minToMint: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    calculateRemoveLiquidity(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculateRemoveLiquidityOneToken(
      tokenAmount: PromiseOrValue<BigNumberish>,
      tokenIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculateSwap(
      tokenIndexFrom: PromiseOrValue<BigNumberish>,
      tokenIndexTo: PromiseOrValue<BigNumberish>,
      dx: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculateTokenAmount(
      amounts: PromiseOrValue<BigNumberish>[],
      deposit: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getA(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAllowlist(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getToken(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTokenBalance(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTokenIndex(
      tokenAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getVirtualPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      pooledTokens: PromiseOrValue<string>[],
      decimals: PromiseOrValue<BigNumberish>[],
      lpTokenName: PromiseOrValue<string>,
      lpTokenSymbol: PromiseOrValue<string>,
      a: PromiseOrValue<BigNumberish>,
      fee: PromiseOrValue<BigNumberish>,
      adminFee: PromiseOrValue<BigNumberish>,
      withdrawFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    isGuarded(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeLiquidity(
      amount: PromiseOrValue<BigNumberish>,
      minAmounts: PromiseOrValue<BigNumberish>[],
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    removeLiquidityImbalance(
      amounts: PromiseOrValue<BigNumberish>[],
      maxBurnAmount: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    removeLiquidityOneToken(
      tokenAmount: PromiseOrValue<BigNumberish>,
      tokenIndex: PromiseOrValue<BigNumberish>,
      minAmount: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    swap(
      tokenIndexFrom: PromiseOrValue<BigNumberish>,
      tokenIndexTo: PromiseOrValue<BigNumberish>,
      dx: PromiseOrValue<BigNumberish>,
      minDy: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateUserWithdrawFee(
      recipient: PromiseOrValue<string>,
      transferAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
