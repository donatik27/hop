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
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common.js";

export interface FxBaseChildTunnelInterface extends utils.Interface {
  functions: {
    "fxChild()": FunctionFragment;
    "fxRootTunnel()": FunctionFragment;
    "processMessageFromRoot(uint256,address,bytes)": FunctionFragment;
    "setFxRootTunnel(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "fxChild"
      | "fxRootTunnel"
      | "processMessageFromRoot"
      | "setFxRootTunnel"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "fxChild", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "fxRootTunnel",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "processMessageFromRoot",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setFxRootTunnel",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "fxChild", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "fxRootTunnel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "processMessageFromRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFxRootTunnel",
    data: BytesLike
  ): Result;

  events: {
    "MessageSent(bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "MessageSent"): EventFragment;
}

export interface MessageSentEventObject {
  message: string;
}
export type MessageSentEvent = TypedEvent<[string], MessageSentEventObject>;

export type MessageSentEventFilter = TypedEventFilter<MessageSentEvent>;

export interface FxBaseChildTunnel extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: FxBaseChildTunnelInterface;

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
    fxChild(overrides?: CallOverrides): Promise<[string]>;

    fxRootTunnel(overrides?: CallOverrides): Promise<[string]>;

    processMessageFromRoot(
      stateId: PromiseOrValue<BigNumberish>,
      rootMessageSender: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setFxRootTunnel(
      _fxRootTunnel: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  fxChild(overrides?: CallOverrides): Promise<string>;

  fxRootTunnel(overrides?: CallOverrides): Promise<string>;

  processMessageFromRoot(
    stateId: PromiseOrValue<BigNumberish>,
    rootMessageSender: PromiseOrValue<string>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setFxRootTunnel(
    _fxRootTunnel: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    fxChild(overrides?: CallOverrides): Promise<string>;

    fxRootTunnel(overrides?: CallOverrides): Promise<string>;

    processMessageFromRoot(
      stateId: PromiseOrValue<BigNumberish>,
      rootMessageSender: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    setFxRootTunnel(
      _fxRootTunnel: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "MessageSent(bytes)"(message?: null): MessageSentEventFilter;
    MessageSent(message?: null): MessageSentEventFilter;
  };

  estimateGas: {
    fxChild(overrides?: CallOverrides): Promise<BigNumber>;

    fxRootTunnel(overrides?: CallOverrides): Promise<BigNumber>;

    processMessageFromRoot(
      stateId: PromiseOrValue<BigNumberish>,
      rootMessageSender: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setFxRootTunnel(
      _fxRootTunnel: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    fxChild(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fxRootTunnel(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    processMessageFromRoot(
      stateId: PromiseOrValue<BigNumberish>,
      rootMessageSender: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setFxRootTunnel(
      _fxRootTunnel: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
