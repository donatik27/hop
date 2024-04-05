/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  OVM_L1_ERC20_Bridge,
  OVM_L1_ERC20_BridgeInterface,
} from "../OVM_L1_ERC20_Bridge.js";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_messenger",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_l1TokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_l2TokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_depositor",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "messenger",
    outputs: [
      {
        internalType: "contract iAbs_BaseCrossDomainMessenger",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_l1TokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_withdrawer",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class OVM_L1_ERC20_Bridge__factory {
  static readonly abi = _abi;
  static createInterface(): OVM_L1_ERC20_BridgeInterface {
    return new utils.Interface(_abi) as OVM_L1_ERC20_BridgeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OVM_L1_ERC20_Bridge {
    return new Contract(address, _abi, signerOrProvider) as OVM_L1_ERC20_Bridge;
  }
}
