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

export declare namespace MockOVM_CrossDomainMessenger {
  export type ReceivedMessageStruct = {
    timestamp: PromiseOrValue<BigNumberish>;
    target: PromiseOrValue<string>;
    sender: PromiseOrValue<string>;
    message: PromiseOrValue<BytesLike>;
    messageNonce: PromiseOrValue<BigNumberish>;
    gasLimit: PromiseOrValue<BigNumberish>;
  };

  export type ReceivedMessageStructOutput = [
    BigNumber,
    string,
    string,
    string,
    BigNumber,
    BigNumber
  ] & {
    timestamp: BigNumber;
    target: string;
    sender: string;
    message: string;
    messageNonce: BigNumber;
    gasLimit: BigNumber;
  };
}

export interface MockOVM_CrossDomainMessengerInterface extends utils.Interface {
  functions: {
    "delay()": FunctionFragment;
    "fullReceivedMessages(uint256)": FunctionFragment;
    "hasNextMessage()": FunctionFragment;
    "lastRelayedMessage()": FunctionFragment;
    "messageNonce()": FunctionFragment;
    "receiveMessage((uint256,address,address,bytes,uint256,uint256))": FunctionFragment;
    "relayNextMessage()": FunctionFragment;
    "relayedMessages(bytes32)": FunctionFragment;
    "sendMessage(address,bytes,uint32)": FunctionFragment;
    "sentMessages(bytes32)": FunctionFragment;
    "setTargetMessengerAddress(address)": FunctionFragment;
    "successfulMessages(bytes32)": FunctionFragment;
    "targetMessengerAddress()": FunctionFragment;
    "xDomainMessageSender()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "delay"
      | "fullReceivedMessages"
      | "hasNextMessage"
      | "lastRelayedMessage"
      | "messageNonce"
      | "receiveMessage"
      | "relayNextMessage"
      | "relayedMessages"
      | "sendMessage"
      | "sentMessages"
      | "setTargetMessengerAddress"
      | "successfulMessages"
      | "targetMessengerAddress"
      | "xDomainMessageSender"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "delay", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "fullReceivedMessages",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "hasNextMessage",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lastRelayedMessage",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "messageNonce",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "receiveMessage",
    values: [MockOVM_CrossDomainMessenger.ReceivedMessageStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "relayNextMessage",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "relayedMessages",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "sendMessage",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "sentMessages",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "setTargetMessengerAddress",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "successfulMessages",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "targetMessengerAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "xDomainMessageSender",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "delay", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "fullReceivedMessages",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hasNextMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastRelayedMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "messageNonce",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "receiveMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "relayNextMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "relayedMessages",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sentMessages",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTargetMessengerAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "successfulMessages",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "targetMessengerAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "xDomainMessageSender",
    data: BytesLike
  ): Result;

  events: {};
}

export interface MockOVM_CrossDomainMessenger extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MockOVM_CrossDomainMessengerInterface;

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
    delay(overrides?: CallOverrides): Promise<[BigNumber]>;

    fullReceivedMessages(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string, string, BigNumber, BigNumber] & {
        timestamp: BigNumber;
        target: string;
        sender: string;
        message: string;
        messageNonce: BigNumber;
        gasLimit: BigNumber;
      }
    >;

    hasNextMessage(
      overrides?: CallOverrides
    ): Promise<[boolean] & { _exists: boolean }>;

    lastRelayedMessage(overrides?: CallOverrides): Promise<[BigNumber]>;

    messageNonce(overrides?: CallOverrides): Promise<[BigNumber]>;

    receiveMessage(
      _message: MockOVM_CrossDomainMessenger.ReceivedMessageStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    relayNextMessage(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    relayedMessages(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    sendMessage(
      _target: PromiseOrValue<string>,
      _message: PromiseOrValue<BytesLike>,
      _gasLimit: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    sentMessages(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    setTargetMessengerAddress(
      _targetMessengerAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    successfulMessages(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    targetMessengerAddress(overrides?: CallOverrides): Promise<[string]>;

    xDomainMessageSender(overrides?: CallOverrides): Promise<[string]>;
  };

  delay(overrides?: CallOverrides): Promise<BigNumber>;

  fullReceivedMessages(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, string, string, BigNumber, BigNumber] & {
      timestamp: BigNumber;
      target: string;
      sender: string;
      message: string;
      messageNonce: BigNumber;
      gasLimit: BigNumber;
    }
  >;

  hasNextMessage(overrides?: CallOverrides): Promise<boolean>;

  lastRelayedMessage(overrides?: CallOverrides): Promise<BigNumber>;

  messageNonce(overrides?: CallOverrides): Promise<BigNumber>;

  receiveMessage(
    _message: MockOVM_CrossDomainMessenger.ReceivedMessageStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  relayNextMessage(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  relayedMessages(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  sendMessage(
    _target: PromiseOrValue<string>,
    _message: PromiseOrValue<BytesLike>,
    _gasLimit: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  sentMessages(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  setTargetMessengerAddress(
    _targetMessengerAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  successfulMessages(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  targetMessengerAddress(overrides?: CallOverrides): Promise<string>;

  xDomainMessageSender(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    delay(overrides?: CallOverrides): Promise<BigNumber>;

    fullReceivedMessages(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string, string, BigNumber, BigNumber] & {
        timestamp: BigNumber;
        target: string;
        sender: string;
        message: string;
        messageNonce: BigNumber;
        gasLimit: BigNumber;
      }
    >;

    hasNextMessage(overrides?: CallOverrides): Promise<boolean>;

    lastRelayedMessage(overrides?: CallOverrides): Promise<BigNumber>;

    messageNonce(overrides?: CallOverrides): Promise<BigNumber>;

    receiveMessage(
      _message: MockOVM_CrossDomainMessenger.ReceivedMessageStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    relayNextMessage(overrides?: CallOverrides): Promise<void>;

    relayedMessages(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    sendMessage(
      _target: PromiseOrValue<string>,
      _message: PromiseOrValue<BytesLike>,
      _gasLimit: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    sentMessages(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    setTargetMessengerAddress(
      _targetMessengerAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    successfulMessages(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    targetMessengerAddress(overrides?: CallOverrides): Promise<string>;

    xDomainMessageSender(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    delay(overrides?: CallOverrides): Promise<BigNumber>;

    fullReceivedMessages(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hasNextMessage(overrides?: CallOverrides): Promise<BigNumber>;

    lastRelayedMessage(overrides?: CallOverrides): Promise<BigNumber>;

    messageNonce(overrides?: CallOverrides): Promise<BigNumber>;

    receiveMessage(
      _message: MockOVM_CrossDomainMessenger.ReceivedMessageStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    relayNextMessage(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    relayedMessages(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    sendMessage(
      _target: PromiseOrValue<string>,
      _message: PromiseOrValue<BytesLike>,
      _gasLimit: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    sentMessages(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setTargetMessengerAddress(
      _targetMessengerAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    successfulMessages(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    targetMessengerAddress(overrides?: CallOverrides): Promise<BigNumber>;

    xDomainMessageSender(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    delay(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fullReceivedMessages(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hasNextMessage(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lastRelayedMessage(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    messageNonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    receiveMessage(
      _message: MockOVM_CrossDomainMessenger.ReceivedMessageStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    relayNextMessage(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    relayedMessages(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    sendMessage(
      _target: PromiseOrValue<string>,
      _message: PromiseOrValue<BytesLike>,
      _gasLimit: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    sentMessages(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setTargetMessengerAddress(
      _targetMessengerAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    successfulMessages(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    targetMessengerAddress(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    xDomainMessageSender(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
