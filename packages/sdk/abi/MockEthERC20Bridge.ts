export default [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "erc20",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "destination",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "maxSubmissionCost",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "maxGas",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "gasPriceBid",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "callHookData",
        "type": "bytes"
      }
    ],
    "name": "depositAsERC20",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]
