/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  MockEthERC20Bridge,
  MockEthERC20BridgeInterface,
} from "../MockEthERC20Bridge.js";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "erc20",
        type: "address",
      },
      {
        internalType: "address",
        name: "destination",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxSubmissionCost",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxGas",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "gasPriceBid",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "callHookData",
        type: "bytes",
      },
    ],
    name: "depositAsERC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class MockEthERC20Bridge__factory {
  static readonly abi = _abi;
  static createInterface(): MockEthERC20BridgeInterface {
    return new utils.Interface(_abi) as MockEthERC20BridgeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockEthERC20Bridge {
    return new Contract(address, _abi, signerOrProvider) as MockEthERC20Bridge;
  }
}
