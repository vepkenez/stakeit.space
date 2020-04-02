import Web3 from "web3";
const web3 = new Web3(window.ethereum)
// Dispatcher
const abiDispatcherOld = [
  "Dispatcher",
  "v0.0.0",
  "0xdC098916291e1ef683A4f469fa32025c872194df",
  [
    {
      constant: true,
      inputs: [],
      name: "previousTarget",
      outputs: [{ name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: false,
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "owner",
      outputs: [{ name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "isOwner",
      outputs: [{ name: "", type: "bool" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        { name: "_target", type: "address" },
        { name: "_secret", type: "bytes" },
        { name: "_newSecretHash", type: "bytes32" }
      ],
      name: "upgrade",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [{ name: "_testTarget", type: "address" }],
      name: "verifyState",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "secretHash",
      outputs: [{ name: "", type: "bytes32" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "target",
      outputs: [{ name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "isUpgrade",
      outputs: [{ name: "", type: "uint8" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: false,
      inputs: [{ name: "", type: "address" }],
      name: "finishUpgrade",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [{ name: "newOwner", type: "address" }],
      name: "transferOwnership",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        { name: "_secret", type: "bytes" },
        { name: "_newSecretHash", type: "bytes32" }
      ],
      name: "rollback",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        { name: "_target", type: "address" },
        { name: "_newSecretHash", type: "bytes32" }
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "constructor"
    },
    { payable: true, stateMutability: "payable", type: "fallback" },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: "from", type: "address" },
        { indexed: true, name: "to", type: "address" },
        { indexed: false, name: "owner", type: "address" }
      ],
      name: "Upgraded",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: "from", type: "address" },
        { indexed: true, name: "to", type: "address" },
        { indexed: false, name: "owner", type: "address" }
      ],
      name: "RolledBack",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: "testTarget", type: "address" },
        { indexed: false, name: "sender", type: "address" }
      ],
      name: "StateVerified",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: "target", type: "address" },
        { indexed: false, name: "sender", type: "address" }
      ],
      name: "UpgradeFinished",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: "previousOwner", type: "address" },
        { indexed: true, name: "newOwner", type: "address" }
      ],
      name: "OwnershipTransferred",
      type: "event"
    }
  ]
];
const abiDispatcher = [
  "Dispatcher",
  "v0.0.0",
  "0xAB51fBDd4Faf6c691884B3A9b475E34E2092aE81",
  [
    {
      "inputs": [
        { "internalType": "address", "name": "_target", "type": "address" },
        {
          "internalType": "bytes32",
          "name": "_newSecretHash",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "RolledBack",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "testTarget",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "StateVerified",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "target",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "UpgradeFinished",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "Upgraded",
      "type": "event"
    },
    { "payable": true, "stateMutability": "payable", "type": "fallback" },
    {
      "constant": false,
      "inputs": [
        { "internalType": "address", "name": "", "type": "address" }
      ],
      "name": "finishUpgrade",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "isOwner",
      "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "isUpgrade",
      "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        { "internalType": "address", "name": "", "type": "address" }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "previousTarget",
      "outputs": [
        { "internalType": "address", "name": "", "type": "address" }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        { "internalType": "bytes", "name": "_secret", "type": "bytes" },
        {
          "internalType": "bytes32",
          "name": "_newSecretHash",
          "type": "bytes32"
        }
      ],
      "name": "rollback",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "secretHash",
      "outputs": [
        { "internalType": "bytes32", "name": "", "type": "bytes32" }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "target",
      "outputs": [
        { "internalType": "address", "name": "", "type": "address" }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        { "internalType": "address", "name": "newOwner", "type": "address" }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        { "internalType": "address", "name": "_target", "type": "address" },
        { "internalType": "bytes", "name": "_secret", "type": "bytes" },
        {
          "internalType": "bytes32",
          "name": "_newSecretHash",
          "type": "bytes32"
        }
      ],
      "name": "upgrade",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "_testTarget",
          "type": "address"
        }
      ],
      "name": "verifyState",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
]

const DISPATCHER_ADDRESS = abiDispatcher[2];
const DISPATCHER_ABI = abiDispatcher[3];
export const instanceDispatcher = new web3.eth.Contract(
  DISPATCHER_ABI,
  DISPATCHER_ADDRESS
);

// Policy Manager
const abiManagerold = [
  "PolicyManager",
  "v2.2.1",
  "0x544B1a3E6281706414A2412CC8bd6E8257F352aB",
  [
    {
      inputs: [
        {
          internalType: "contract StakingEscrow",
          name: "_escrow",
          type: "address"
        }
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "constructor"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes16",
          name: "policyId",
          type: "bytes16"
        },
        {
          indexed: true,
          internalType: "address",
          name: "sender",
          type: "address"
        },
        {
          indexed: true,
          internalType: "address",
          name: "node",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256"
        }
      ],
      name: "ArrangementRevoked",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "sender",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "min",
          type: "uint256"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "defaultValue",
          type: "uint256"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "max",
          type: "uint256"
        }
      ],
      name: "MinRewardRateRangeSet",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "node",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256"
        }
      ],
      name: "MinRewardRateSet",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "node",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint16",
          name: "period",
          type: "uint16"
        }
      ],
      name: "NodeBrokenState",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address"
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address"
        }
      ],
      name: "OwnershipTransferred",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes16",
          name: "policyId",
          type: "bytes16"
        },
        {
          indexed: true,
          internalType: "address",
          name: "sponsor",
          type: "address"
        },
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "rewardRate",
          type: "uint256"
        },
        {
          indexed: false,
          internalType: "uint64",
          name: "startTimestamp",
          type: "uint64"
        },
        {
          indexed: false,
          internalType: "uint64",
          name: "endTimestamp",
          type: "uint64"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "numberOfNodes",
          type: "uint256"
        }
      ],
      name: "PolicyCreated",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes16",
          name: "policyId",
          type: "bytes16"
        },
        {
          indexed: true,
          internalType: "address",
          name: "sender",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256"
        }
      ],
      name: "PolicyRevoked",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes16",
          name: "policyId",
          type: "bytes16"
        },
        {
          indexed: true,
          internalType: "address",
          name: "sender",
          type: "address"
        },
        {
          indexed: true,
          internalType: "address",
          name: "node",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256"
        }
      ],
      name: "RefundForArrangement",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes16",
          name: "policyId",
          type: "bytes16"
        },
        {
          indexed: true,
          internalType: "address",
          name: "sender",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256"
        }
      ],
      name: "RefundForPolicy",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "testTarget",
          type: "address"
        },
        {
          indexed: false,
          internalType: "address",
          name: "sender",
          type: "address"
        }
      ],
      name: "StateVerified",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "target",
          type: "address"
        },
        {
          indexed: false,
          internalType: "address",
          name: "sender",
          type: "address"
        }
      ],
      name: "UpgradeFinished",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "node",
          type: "address"
        },
        {
          indexed: true,
          internalType: "address",
          name: "recipient",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256"
        }
      ],
      name: "Withdrawn",
      type: "event"
    },
    {
      constant: true,
      inputs: [],
      name: "DEFAULT_REWARD_DELTA",
      outputs: [{ internalType: "int256", name: "", type: "int256" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [
        { internalType: "bytes16", name: "_policyId", type: "bytes16" },
        { internalType: "address", name: "_node", type: "address" }
      ],
      name: "calculateRefundValue",
      outputs: [
        {
          internalType: "uint256",
          name: "refundValue",
          type: "uint256"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [{ internalType: "bytes16", name: "_policyId", type: "bytes16" }],
      name: "calculateRefundValue",
      outputs: [
        {
          internalType: "uint256",
          name: "refundValue",
          type: "uint256"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        { internalType: "bytes16", name: "_policyId", type: "bytes16" },
        {
          internalType: "address",
          name: "_policyOwner",
          type: "address"
        },
        {
          internalType: "uint64",
          name: "_endTimestamp",
          type: "uint64"
        },
        { internalType: "address[]", name: "_nodes", type: "address[]" }
      ],
      name: "createPolicy",
      outputs: [],
      payable: true,
      stateMutability: "payable",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "escrow",
      outputs: [
        {
          internalType: "contract StakingEscrow",
          name: "",
          type: "address"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: false,
      inputs: [{ internalType: "address", name: "_target", type: "address" }],
      name: "finishUpgrade",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: true,
      inputs: [
        { internalType: "bytes16", name: "_policyId", type: "bytes16" },
        { internalType: "uint256", name: "_index", type: "uint256" }
      ],
      name: "getArrangementInfo",
      outputs: [
        { internalType: "address", name: "node", type: "address" },
        {
          internalType: "uint256",
          name: "indexOfDowntimePeriods",
          type: "uint256"
        },
        {
          internalType: "uint16",
          name: "lastRefundedPeriod",
          type: "uint16"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [{ internalType: "bytes16", name: "_policyId", type: "bytes16" }],
      name: "getArrangementsLength",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "getCurrentPeriod",
      outputs: [{ internalType: "uint16", name: "", type: "uint16" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: false,
      inputs: [{ internalType: "address", name: "_node", type: "address" }],
      name: "getMinRewardRate",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: true,
      inputs: [
        { internalType: "address", name: "_node", type: "address" },
        { internalType: "uint16", name: "_period", type: "uint16" }
      ],
      name: "getNodeRewardDelta",
      outputs: [{ internalType: "int256", name: "", type: "int256" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [{ internalType: "bytes16", name: "_policyId", type: "bytes16" }],
      name: "getPolicyOwner",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [
        { internalType: "bytes16", name: "_policyId", type: "bytes16" },
        { internalType: "address", name: "_node", type: "address" }
      ],
      name: "getRevocationHash",
      outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "isOwner",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "isUpgrade",
      outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "minRewardRateRange",
      outputs: [
        { internalType: "uint256", name: "min", type: "uint256" },
        {
          internalType: "uint256",
          name: "defaultValue",
          type: "uint256"
        },
        { internalType: "uint256", name: "max", type: "uint256" }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [{ internalType: "address", name: "", type: "address" }],
      name: "nodes",
      outputs: [
        { internalType: "uint256", name: "reward", type: "uint256" },
        {
          internalType: "uint256",
          name: "rewardRate",
          type: "uint256"
        },
        {
          internalType: "uint16",
          name: "lastMinedPeriod",
          type: "uint16"
        },
        {
          internalType: "uint256",
          name: "minRewardRate",
          type: "uint256"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "owner",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [{ internalType: "bytes16", name: "", type: "bytes16" }],
      name: "policies",
      outputs: [
        {
          internalType: "address payable",
          name: "sponsor",
          type: "address"
        },
        { internalType: "address", name: "owner", type: "address" },
        {
          internalType: "uint256",
          name: "rewardRate",
          type: "uint256"
        },
        {
          internalType: "uint64",
          name: "startTimestamp",
          type: "uint64"
        },
        {
          internalType: "uint64",
          name: "endTimestamp",
          type: "uint64"
        },
        { internalType: "bool", name: "disabled", type: "bool" },
        {
          internalType: "uint256",
          name: "reservedSlot1",
          type: "uint256"
        },
        {
          internalType: "uint256",
          name: "reservedSlot2",
          type: "uint256"
        },
        {
          internalType: "uint256",
          name: "reservedSlot3",
          type: "uint256"
        },
        {
          internalType: "uint256",
          name: "reservedSlot4",
          type: "uint256"
        },
        {
          internalType: "uint256",
          name: "reservedSlot5",
          type: "uint256"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "previousTarget",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        { internalType: "bytes16", name: "_policyId", type: "bytes16" },
        { internalType: "address", name: "_node", type: "address" }
      ],
      name: "refund",
      outputs: [
        {
          internalType: "uint256",
          name: "refundValue",
          type: "uint256"
        }
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [{ internalType: "bytes16", name: "_policyId", type: "bytes16" }],
      name: "refund",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        { internalType: "address", name: "_node", type: "address" },
        { internalType: "uint16", name: "_period", type: "uint16" }
      ],
      name: "register",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        { internalType: "bytes16", name: "_policyId", type: "bytes16" },
        { internalType: "address", name: "_node", type: "address" },
        { internalType: "bytes", name: "_signature", type: "bytes" }
      ],
      name: "revoke",
      outputs: [
        {
          internalType: "uint256",
          name: "refundValue",
          type: "uint256"
        }
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        { internalType: "bytes16", name: "_policyId", type: "bytes16" },
        { internalType: "address", name: "_node", type: "address" }
      ],
      name: "revokeArrangement",
      outputs: [
        {
          internalType: "uint256",
          name: "refundValue",
          type: "uint256"
        }
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [{ internalType: "bytes16", name: "_policyId", type: "bytes16" }],
      name: "revokePolicy",
      outputs: [
        {
          internalType: "uint256",
          name: "refundValue",
          type: "uint256"
        }
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "secondsPerPeriod",
      outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "secretHash",
      outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        { internalType: "address", name: "_node", type: "address" },
        { internalType: "uint16", name: "_period", type: "uint16" }
      ],
      name: "setDefaultRewardDelta",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        {
          internalType: "uint256",
          name: "_minRewardRate",
          type: "uint256"
        }
      ],
      name: "setMinRewardRate",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        { internalType: "uint256", name: "_min", type: "uint256" },
        { internalType: "uint256", name: "_default", type: "uint256" },
        { internalType: "uint256", name: "_max", type: "uint256" }
      ],
      name: "setMinRewardRateRange",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "target",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: false,
      inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
      name: "transferOwnership",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        { internalType: "address", name: "_node", type: "address" },
        { internalType: "uint16", name: "_period", type: "uint16" }
      ],
      name: "updateReward",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        {
          internalType: "address",
          name: "_testTarget",
          type: "address"
        }
      ],
      name: "verifyState",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [],
      name: "withdraw",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        {
          internalType: "address payable",
          name: "_recipient",
          type: "address"
        }
      ],
      name: "withdraw",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    }
  ]
];
const abiManager =   [
  "PolicyManager",
  "v2.2.1",
  "0xF1Fe01eb9dfDb1F43BEd97923E96176526525EF4",
  [
    {
      "inputs": [
        {
          "internalType": "contract StakingEscrow",
          "name": "_escrow",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes16",
          "name": "policyId",
          "type": "bytes16"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "node",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "ArrangementRevoked",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "min",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "defaultValue",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "max",
          "type": "uint256"
        }
      ],
      "name": "MinRewardRateRangeSet",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "node",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "MinRewardRateSet",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "node",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint16",
          "name": "period",
          "type": "uint16"
        }
      ],
      "name": "NodeBrokenState",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes16",
          "name": "policyId",
          "type": "bytes16"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sponsor",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "rewardRate",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint64",
          "name": "startTimestamp",
          "type": "uint64"
        },
        {
          "indexed": false,
          "internalType": "uint64",
          "name": "endTimestamp",
          "type": "uint64"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "numberOfNodes",
          "type": "uint256"
        }
      ],
      "name": "PolicyCreated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes16",
          "name": "policyId",
          "type": "bytes16"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "PolicyRevoked",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes16",
          "name": "policyId",
          "type": "bytes16"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "node",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "RefundForArrangement",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes16",
          "name": "policyId",
          "type": "bytes16"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "RefundForPolicy",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "testTarget",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "StateVerified",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "target",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "UpgradeFinished",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "node",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Withdrawn",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "DEFAULT_REWARD_DELTA",
      "outputs": [{ "internalType": "int256", "name": "", "type": "int256" }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        { "internalType": "bytes16", "name": "_policyId", "type": "bytes16" },
        { "internalType": "address", "name": "_node", "type": "address" }
      ],
      "name": "calculateRefundValue",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "refundValue",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        { "internalType": "bytes16", "name": "_policyId", "type": "bytes16" }
      ],
      "name": "calculateRefundValue",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "refundValue",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        { "internalType": "bytes16", "name": "_policyId", "type": "bytes16" },
        {
          "internalType": "address",
          "name": "_policyOwner",
          "type": "address"
        },
        {
          "internalType": "uint64",
          "name": "_endTimestamp",
          "type": "uint64"
        },
        { "internalType": "address[]", "name": "_nodes", "type": "address[]" }
      ],
      "name": "createPolicy",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "escrow",
      "outputs": [
        {
          "internalType": "contract StakingEscrow",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        { "internalType": "address", "name": "_target", "type": "address" }
      ],
      "name": "finishUpgrade",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        { "internalType": "bytes16", "name": "_policyId", "type": "bytes16" },
        { "internalType": "uint256", "name": "_index", "type": "uint256" }
      ],
      "name": "getArrangementInfo",
      "outputs": [
        { "internalType": "address", "name": "node", "type": "address" },
        {
          "internalType": "uint256",
          "name": "indexOfDowntimePeriods",
          "type": "uint256"
        },
        {
          "internalType": "uint16",
          "name": "lastRefundedPeriod",
          "type": "uint16"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        { "internalType": "bytes16", "name": "_policyId", "type": "bytes16" }
      ],
      "name": "getArrangementsLength",
      "outputs": [
        { "internalType": "uint256", "name": "", "type": "uint256" }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getCurrentPeriod",
      "outputs": [{ "internalType": "uint16", "name": "", "type": "uint16" }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        { "internalType": "address", "name": "_node", "type": "address" }
      ],
      "name": "getMinRewardRate",
      "outputs": [
        { "internalType": "uint256", "name": "", "type": "uint256" }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        { "internalType": "address", "name": "_node", "type": "address" },
        { "internalType": "uint16", "name": "_period", "type": "uint16" }
      ],
      "name": "getNodeRewardDelta",
      "outputs": [{ "internalType": "int256", "name": "", "type": "int256" }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        { "internalType": "bytes16", "name": "_policyId", "type": "bytes16" }
      ],
      "name": "getPolicyOwner",
      "outputs": [
        { "internalType": "address", "name": "", "type": "address" }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        { "internalType": "bytes16", "name": "_policyId", "type": "bytes16" },
        { "internalType": "address", "name": "_node", "type": "address" }
      ],
      "name": "getRevocationHash",
      "outputs": [
        { "internalType": "bytes32", "name": "", "type": "bytes32" }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "isOwner",
      "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "isUpgrade",
      "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "minRewardRateRange",
      "outputs": [
        { "internalType": "uint256", "name": "min", "type": "uint256" },
        {
          "internalType": "uint256",
          "name": "defaultValue",
          "type": "uint256"
        },
        { "internalType": "uint256", "name": "max", "type": "uint256" }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        { "internalType": "address", "name": "", "type": "address" }
      ],
      "name": "nodes",
      "outputs": [
        { "internalType": "uint256", "name": "reward", "type": "uint256" },
        {
          "internalType": "uint256",
          "name": "rewardRate",
          "type": "uint256"
        },
        {
          "internalType": "uint16",
          "name": "lastMinedPeriod",
          "type": "uint16"
        },
        {
          "internalType": "uint256",
          "name": "minRewardRate",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        { "internalType": "address", "name": "", "type": "address" }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        { "internalType": "bytes16", "name": "", "type": "bytes16" }
      ],
      "name": "policies",
      "outputs": [
        {
          "internalType": "address payable",
          "name": "sponsor",
          "type": "address"
        },
        { "internalType": "address", "name": "owner", "type": "address" },
        {
          "internalType": "uint256",
          "name": "rewardRate",
          "type": "uint256"
        },
        {
          "internalType": "uint64",
          "name": "startTimestamp",
          "type": "uint64"
        },
        {
          "internalType": "uint64",
          "name": "endTimestamp",
          "type": "uint64"
        },
        { "internalType": "bool", "name": "disabled", "type": "bool" },
        {
          "internalType": "uint256",
          "name": "reservedSlot1",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "reservedSlot2",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "reservedSlot3",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "reservedSlot4",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "reservedSlot5",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "previousTarget",
      "outputs": [
        { "internalType": "address", "name": "", "type": "address" }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        { "internalType": "bytes16", "name": "_policyId", "type": "bytes16" },
        { "internalType": "address", "name": "_node", "type": "address" }
      ],
      "name": "refund",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "refundValue",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        { "internalType": "bytes16", "name": "_policyId", "type": "bytes16" }
      ],
      "name": "refund",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        { "internalType": "address", "name": "_node", "type": "address" },
        { "internalType": "uint16", "name": "_period", "type": "uint16" }
      ],
      "name": "register",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        { "internalType": "bytes16", "name": "_policyId", "type": "bytes16" },
        { "internalType": "address", "name": "_node", "type": "address" },
        { "internalType": "bytes", "name": "_signature", "type": "bytes" }
      ],
      "name": "revoke",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "refundValue",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        { "internalType": "bytes16", "name": "_policyId", "type": "bytes16" },
        { "internalType": "address", "name": "_node", "type": "address" }
      ],
      "name": "revokeArrangement",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "refundValue",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        { "internalType": "bytes16", "name": "_policyId", "type": "bytes16" }
      ],
      "name": "revokePolicy",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "refundValue",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "secondsPerPeriod",
      "outputs": [{ "internalType": "uint32", "name": "", "type": "uint32" }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "secretHash",
      "outputs": [
        { "internalType": "bytes32", "name": "", "type": "bytes32" }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        { "internalType": "address", "name": "_node", "type": "address" },
        { "internalType": "uint16", "name": "_period", "type": "uint16" }
      ],
      "name": "setDefaultRewardDelta",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_minRewardRate",
          "type": "uint256"
        }
      ],
      "name": "setMinRewardRate",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        { "internalType": "uint256", "name": "_min", "type": "uint256" },
        { "internalType": "uint256", "name": "_default", "type": "uint256" },
        { "internalType": "uint256", "name": "_max", "type": "uint256" }
      ],
      "name": "setMinRewardRateRange",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "target",
      "outputs": [
        { "internalType": "address", "name": "", "type": "address" }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        { "internalType": "address", "name": "newOwner", "type": "address" }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        { "internalType": "address", "name": "_node", "type": "address" },
        { "internalType": "uint16", "name": "_period", "type": "uint16" }
      ],
      "name": "updateReward",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "_testTarget",
          "type": "address"
        }
      ],
      "name": "verifyState",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "withdraw",
      "outputs": [
        { "internalType": "uint256", "name": "", "type": "uint256" }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address payable",
          "name": "_recipient",
          "type": "address"
        }
      ],
      "name": "withdraw",
      "outputs": [
        { "internalType": "uint256", "name": "", "type": "uint256" }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
];

const POLICY_MANAGER_ADDRESS = "0x1A0bA37398f2476F533Ae2ab622A79E310AA7680";
const POLICY_MANAGER_ABI = abiManager[3];
export const instancePolicy = new web3.eth.Contract(
  POLICY_MANAGER_ABI,
  POLICY_MANAGER_ADDRESS
);

// Staking escrow
const abiEscrowold = [
  "StakingEscrow",
  "v2.2.3",
  "0xb657C81C9b78A1301daD1EFD7e0312424a327fA8",
  [
    {
      inputs: [
        {
          internalType: "contract NuCypherToken",
          name: "_token",
          type: "address"
        },
        {
          internalType: "uint32",
          name: "_hoursPerPeriod",
          type: "uint32"
        },
        {
          internalType: "uint256",
          name: "_miningCoefficient",
          type: "uint256"
        },
        {
          internalType: "uint256",
          name: "_lockedPeriodsCoefficient",
          type: "uint256"
        },
        {
          internalType: "uint16",
          name: "_rewardedPeriods",
          type: "uint16"
        },
        {
          internalType: "uint16",
          name: "_minLockedPeriods",
          type: "uint16"
        },
        {
          internalType: "uint256",
          name: "_minAllowableLockedTokens",
          type: "uint256"
        },
        {
          internalType: "uint256",
          name: "_maxAllowableLockedTokens",
          type: "uint256"
        },
        {
          internalType: "uint16",
          name: "_minWorkerPeriods",
          type: "uint16"
        },
        { internalType: "bool", name: "_isTestContract", type: "bool" }
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "constructor"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "staker",
          type: "address"
        },
        {
          indexed: true,
          internalType: "uint16",
          name: "period",
          type: "uint16"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256"
        }
      ],
      name: "ActivityConfirmed",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "sender",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256"
        }
      ],
      name: "Burnt",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "staker",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256"
        },
        {
          indexed: false,
          internalType: "uint16",
          name: "periods",
          type: "uint16"
        }
      ],
      name: "Deposited",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "staker",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "oldValue",
          type: "uint256"
        },
        {
          indexed: false,
          internalType: "uint16",
          name: "lastPeriod",
          type: "uint16"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "newValue",
          type: "uint256"
        },
        {
          indexed: false,
          internalType: "uint16",
          name: "periods",
          type: "uint16"
        }
      ],
      name: "Divided",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "reservedReward",
          type: "uint256"
        }
      ],
      name: "Initialized",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "staker",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256"
        },
        {
          indexed: false,
          internalType: "uint16",
          name: "firstPeriod",
          type: "uint16"
        },
        {
          indexed: false,
          internalType: "uint16",
          name: "periods",
          type: "uint16"
        }
      ],
      name: "Locked",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "staker",
          type: "address"
        },
        {
          indexed: true,
          internalType: "uint16",
          name: "period",
          type: "uint16"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256"
        }
      ],
      name: "Mined",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address"
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address"
        }
      ],
      name: "OwnershipTransferred",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "staker",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256"
        },
        {
          indexed: false,
          internalType: "uint16",
          name: "lastPeriod",
          type: "uint16"
        },
        {
          indexed: false,
          internalType: "uint16",
          name: "periods",
          type: "uint16"
        }
      ],
      name: "Prolonged",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "staker",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint16",
          name: "lockUntilPeriod",
          type: "uint16"
        }
      ],
      name: "ReStakeLocked",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "staker",
          type: "address"
        },
        {
          indexed: false,
          internalType: "bool",
          name: "reStake",
          type: "bool"
        }
      ],
      name: "ReStakeSet",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "staker",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "penalty",
          type: "uint256"
        },
        {
          indexed: true,
          internalType: "address",
          name: "investigator",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "reward",
          type: "uint256"
        }
      ],
      name: "Slashed",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "testTarget",
          type: "address"
        },
        {
          indexed: false,
          internalType: "address",
          name: "sender",
          type: "address"
        }
      ],
      name: "StateVerified",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "target",
          type: "address"
        },
        {
          indexed: false,
          internalType: "address",
          name: "sender",
          type: "address"
        }
      ],
      name: "UpgradeFinished",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "staker",
          type: "address"
        },
        {
          indexed: false,
          internalType: "bool",
          name: "windDown",
          type: "bool"
        }
      ],
      name: "WindDownSet",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "staker",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256"
        }
      ],
      name: "Withdrawn",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "staker",
          type: "address"
        },
        {
          indexed: false,
          internalType: "bool",
          name: "measureWork",
          type: "bool"
        }
      ],
      name: "WorkMeasurementSet",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "staker",
          type: "address"
        },
        {
          indexed: true,
          internalType: "address",
          name: "worker",
          type: "address"
        },
        {
          indexed: true,
          internalType: "uint16",
          name: "startPeriod",
          type: "uint16"
        }
      ],
      name: "WorkerSet",
      type: "event"
    },
    {
      constant: true,
      inputs: [],
      name: "EMPTY_CONFIRMED_PERIOD",
      outputs: [{ internalType: "uint16", name: "", type: "uint16" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "MAX_SUB_STAKES",
      outputs: [{ internalType: "uint16", name: "", type: "uint16" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "adjudicator",
      outputs: [
        {
          internalType: "contract AdjudicatorInterface",
          name: "",
          type: "address"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: false,
      inputs: [{ internalType: "uint256", name: "_value", type: "uint256" }],
      name: "burn",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [],
      name: "confirmActivity",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "currentMintingPeriod",
      outputs: [{ internalType: "uint16", name: "", type: "uint16" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "currentSupply1",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "currentSupply2",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        { internalType: "uint256", name: "_value", type: "uint256" },
        { internalType: "uint16", name: "_periods", type: "uint16" }
      ],
      name: "deposit",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        { internalType: "address", name: "_staker", type: "address" },
        { internalType: "uint256", name: "_value", type: "uint256" },
        { internalType: "uint16", name: "_periods", type: "uint16" }
      ],
      name: "deposit",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        { internalType: "uint256", name: "_index", type: "uint256" },
        { internalType: "uint256", name: "_newValue", type: "uint256" },
        { internalType: "uint16", name: "_periods", type: "uint16" }
      ],
      name: "divideStake",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: true,
      inputs: [
        { internalType: "address", name: "_staker", type: "address" },
        { internalType: "uint16", name: "_period", type: "uint16" }
      ],
      name: "findIndexOfPastDowntime",
      outputs: [{ internalType: "uint256", name: "index", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: false,
      inputs: [{ internalType: "address", name: "_target", type: "address" }],
      name: "finishUpgrade",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: true,
      inputs: [
        { internalType: "uint16", name: "_periods", type: "uint16" },
        {
          internalType: "uint256",
          name: "_startIndex",
          type: "uint256"
        },
        {
          internalType: "uint256",
          name: "_maxStakers",
          type: "uint256"
        }
      ],
      name: "getActiveStakers",
      outputs: [
        {
          internalType: "uint256",
          name: "allLockedTokens",
          type: "uint256"
        },
        {
          internalType: "uint256[2][]",
          name: "activeStakers",
          type: "uint256[2][]"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [{ internalType: "address", name: "_staker", type: "address" }],
      name: "getAllTokens",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [{ internalType: "address", name: "_staker", type: "address" }],
      name: "getCompletedWork",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "getCurrentPeriod",
      outputs: [{ internalType: "uint16", name: "", type: "uint16" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [{ internalType: "address", name: "_staker", type: "address" }],
      name: "getLastActivePeriod",
      outputs: [{ internalType: "uint16", name: "", type: "uint16" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [
        { internalType: "address", name: "_staker", type: "address" },
        { internalType: "uint256", name: "_index", type: "uint256" }
      ],
      name: "getLastPeriodOfSubStake",
      outputs: [{ internalType: "uint16", name: "", type: "uint16" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [
        { internalType: "address", name: "_staker", type: "address" },
        { internalType: "uint16", name: "_periods", type: "uint16" }
      ],
      name: "getLockedTokens",
      outputs: [
        {
          internalType: "uint256",
          name: "lockedValue",
          type: "uint256"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [
        { internalType: "address", name: "_staker", type: "address" },
        { internalType: "uint16", name: "_periods", type: "uint16" }
      ],
      name: "getLockedTokensInPast",
      outputs: [
        {
          internalType: "uint256",
          name: "lockedValue",
          type: "uint256"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [
        { internalType: "address", name: "_staker", type: "address" },
        { internalType: "uint256", name: "_index", type: "uint256" }
      ],
      name: "getPastDowntime",
      outputs: [
        { internalType: "uint16", name: "startPeriod", type: "uint16" },
        { internalType: "uint16", name: "endPeriod", type: "uint16" }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [{ internalType: "address", name: "_staker", type: "address" }],
      name: "getPastDowntimeLength",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "getReservedReward",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [{ internalType: "address", name: "_worker", type: "address" }],
      name: "getStakerFromWorker",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "getStakersLength",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [
        { internalType: "address", name: "_staker", type: "address" },
        { internalType: "uint256", name: "_index", type: "uint256" }
      ],
      name: "getSubStakeInfo",
      outputs: [
        { internalType: "uint16", name: "firstPeriod", type: "uint16" },
        { internalType: "uint16", name: "lastPeriod", type: "uint16" },
        { internalType: "uint16", name: "periods", type: "uint16" },
        {
          internalType: "uint256",
          name: "lockedValue",
          type: "uint256"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [{ internalType: "address", name: "_staker", type: "address" }],
      name: "getSubStakesLength",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [{ internalType: "address", name: "_staker", type: "address" }],
      name: "getWorkerFromStaker",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        {
          internalType: "uint256",
          name: "_reservedReward",
          type: "uint256"
        }
      ],
      name: "initialize",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "isOwner",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [{ internalType: "address", name: "_staker", type: "address" }],
      name: "isReStakeLocked",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "isTestContract",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "isUpgrade",
      outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        { internalType: "uint256", name: "_value", type: "uint256" },
        { internalType: "uint16", name: "_periods", type: "uint16" }
      ],
      name: "lock",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        {
          internalType: "uint16",
          name: "_lockReStakeUntilPeriod",
          type: "uint16"
        }
      ],
      name: "lockReStake",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: true,
      inputs: [{ internalType: "uint16", name: "", type: "uint16" }],
      name: "lockedPerPeriod",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "lockedPeriodsCoefficient",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "maxAllowableLockedTokens",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "minAllowableLockedTokens",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "minLockedPeriods",
      outputs: [{ internalType: "uint16", name: "", type: "uint16" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "minWorkerPeriods",
      outputs: [{ internalType: "uint16", name: "", type: "uint16" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "miningCoefficient",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: false,
      inputs: [],
      name: "mint",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "owner",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "policyManager",
      outputs: [
        {
          internalType: "contract PolicyManagerInterface",
          name: "",
          type: "address"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "previousTarget",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        { internalType: "uint256", name: "_index", type: "uint256" },
        { internalType: "uint16", name: "_periods", type: "uint16" }
      ],
      name: "prolongStake",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        { internalType: "address", name: "_from", type: "address" },
        { internalType: "uint256", name: "_value", type: "uint256" },
        {
          internalType: "address",
          name: "_tokenContract",
          type: "address"
        },
        { internalType: "bytes", name: "", type: "bytes" }
      ],
      name: "receiveApproval",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "rewardedPeriods",
      outputs: [{ internalType: "uint16", name: "", type: "uint16" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "secondsPerPeriod",
      outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "secretHash",
      outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        {
          internalType: "contract AdjudicatorInterface",
          name: "_adjudicator",
          type: "address"
        }
      ],
      name: "setAdjudicator",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        {
          internalType: "contract PolicyManagerInterface",
          name: "_policyManager",
          type: "address"
        }
      ],
      name: "setPolicyManager",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [{ internalType: "bool", name: "_reStake", type: "bool" }],
      name: "setReStake",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [{ internalType: "bool", name: "_windDown", type: "bool" }],
      name: "setWindDown",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        {
          internalType: "contract WorkLockInterface",
          name: "_workLock",
          type: "address"
        }
      ],
      name: "setWorkLock",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        { internalType: "address", name: "_staker", type: "address" },
        { internalType: "bool", name: "_measureWork", type: "bool" }
      ],
      name: "setWorkMeasurement",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [{ internalType: "address", name: "_worker", type: "address" }],
      name: "setWorker",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        { internalType: "address", name: "_staker", type: "address" },
        { internalType: "uint256", name: "_penalty", type: "uint256" },
        {
          internalType: "address",
          name: "_investigator",
          type: "address"
        },
        { internalType: "uint256", name: "_reward", type: "uint256" }
      ],
      name: "slashStaker",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: true,
      inputs: [{ internalType: "address", name: "", type: "address" }],
      name: "stakerInfo",
      outputs: [
        { internalType: "uint256", name: "value", type: "uint256" },
        {
          internalType: "uint16",
          name: "confirmedPeriod1",
          type: "uint16"
        },
        {
          internalType: "uint16",
          name: "confirmedPeriod2",
          type: "uint16"
        },
        { internalType: "bool", name: "reStakeDisabled", type: "bool" },
        {
          internalType: "uint16",
          name: "lockReStakeUntilPeriod",
          type: "uint16"
        },
        { internalType: "address", name: "worker", type: "address" },
        {
          internalType: "uint16",
          name: "workerStartPeriod",
          type: "uint16"
        },
        {
          internalType: "uint16",
          name: "lastActivePeriod",
          type: "uint16"
        },
        { internalType: "bool", name: "measureWork", type: "bool" },
        {
          internalType: "uint256",
          name: "completedWork",
          type: "uint256"
        },
        { internalType: "bool", name: "windDown", type: "bool" },
        {
          internalType: "uint256",
          name: "reservedSlot2",
          type: "uint256"
        },
        {
          internalType: "uint256",
          name: "reservedSlot3",
          type: "uint256"
        },
        {
          internalType: "uint256",
          name: "reservedSlot4",
          type: "uint256"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      name: "stakers",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "target",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "token",
      outputs: [
        {
          internalType: "contract NuCypherToken",
          name: "",
          type: "address"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "totalSupply",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: false,
      inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
      name: "transferOwnership",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        {
          internalType: "address",
          name: "_testTarget",
          type: "address"
        }
      ],
      name: "verifyState",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [{ internalType: "uint256", name: "_value", type: "uint256" }],
      name: "withdraw",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "workLock",
      outputs: [
        {
          internalType: "contract WorkLockInterface",
          name: "",
          type: "address"
        }
      ],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [{ internalType: "address", name: "", type: "address" }],
      name: "workerToStaker",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    }
  ]
];
const abiEscrow = [
  "StakingEscrow",
  "v2.2.3",
  "0xd3c9eD88B19D37E78cD4c344699837DDFd0F1F5B",
  [
    {
      "inputs": [
        {
          "internalType": "contract NuCypherToken",
          "name": "_token",
          "type": "address"
        },
        {
          "internalType": "uint32",
          "name": "_hoursPerPeriod",
          "type": "uint32"
        },
        {
          "internalType": "uint256",
          "name": "_miningCoefficient",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_lockedPeriodsCoefficient",
          "type": "uint256"
        },
        {
          "internalType": "uint16",
          "name": "_rewardedPeriods",
          "type": "uint16"
        },
        {
          "internalType": "uint16",
          "name": "_minLockedPeriods",
          "type": "uint16"
        },
        {
          "internalType": "uint256",
          "name": "_minAllowableLockedTokens",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_maxAllowableLockedTokens",
          "type": "uint256"
        },
        {
          "internalType": "uint16",
          "name": "_minWorkerPeriods",
          "type": "uint16"
        },
        { "internalType": "bool", "name": "_isTestContract", "type": "bool" }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "staker",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint16",
          "name": "period",
          "type": "uint16"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "ActivityConfirmed",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Burnt",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "staker",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint16",
          "name": "periods",
          "type": "uint16"
        }
      ],
      "name": "Deposited",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "staker",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "oldValue",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint16",
          "name": "lastPeriod",
          "type": "uint16"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newValue",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint16",
          "name": "periods",
          "type": "uint16"
        }
      ],
      "name": "Divided",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "reservedReward",
          "type": "uint256"
        }
      ],
      "name": "Initialized",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "staker",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint16",
          "name": "firstPeriod",
          "type": "uint16"
        },
        {
          "indexed": false,
          "internalType": "uint16",
          "name": "periods",
          "type": "uint16"
        }
      ],
      "name": "Locked",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "staker",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint16",
          "name": "period",
          "type": "uint16"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Mined",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "staker",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint16",
          "name": "lastPeriod",
          "type": "uint16"
        },
        {
          "indexed": false,
          "internalType": "uint16",
          "name": "periods",
          "type": "uint16"
        }
      ],
      "name": "Prolonged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "staker",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint16",
          "name": "lockUntilPeriod",
          "type": "uint16"
        }
      ],
      "name": "ReStakeLocked",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "staker",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "reStake",
          "type": "bool"
        }
      ],
      "name": "ReStakeSet",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "staker",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "penalty",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "investigator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "reward",
          "type": "uint256"
        }
      ],
      "name": "Slashed",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "testTarget",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "StateVerified",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "target",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "UpgradeFinished",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "staker",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "windDown",
          "type": "bool"
        }
      ],
      "name": "WindDownSet",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "staker",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Withdrawn",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "staker",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "measureWork",
          "type": "bool"
        }
      ],
      "name": "WorkMeasurementSet",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "staker",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "worker",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint16",
          "name": "startPeriod",
          "type": "uint16"
        }
      ],
      "name": "WorkerSet",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "EMPTY_CONFIRMED_PERIOD",
      "outputs": [{ "internalType": "uint16", "name": "", "type": "uint16" }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "MAX_SUB_STAKES",
      "outputs": [{ "internalType": "uint16", "name": "", "type": "uint16" }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "adjudicator",
      "outputs": [
        {
          "internalType": "contract AdjudicatorInterface",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        { "internalType": "uint256", "name": "_value", "type": "uint256" }
      ],
      "name": "burn",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "confirmActivity",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "currentMintingPeriod",
      "outputs": [{ "internalType": "uint16", "name": "", "type": "uint16" }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "currentSupply1",
      "outputs": [
        { "internalType": "uint256", "name": "", "type": "uint256" }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "currentSupply2",
      "outputs": [
        { "internalType": "uint256", "name": "", "type": "uint256" }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        { "internalType": "uint256", "name": "_value", "type": "uint256" },
        { "internalType": "uint16", "name": "_periods", "type": "uint16" }
      ],
      "name": "deposit",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        { "internalType": "address", "name": "_staker", "type": "address" },
        { "internalType": "uint256", "name": "_value", "type": "uint256" },
        { "internalType": "uint16", "name": "_periods", "type": "uint16" }
      ],
      "name": "deposit",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        { "internalType": "uint256", "name": "_index", "type": "uint256" },
        { "internalType": "uint256", "name": "_newValue", "type": "uint256" },
        { "internalType": "uint16", "name": "_periods", "type": "uint16" }
      ],
      "name": "divideStake",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        { "internalType": "address", "name": "_staker", "type": "address" },
        { "internalType": "uint16", "name": "_period", "type": "uint16" }
      ],
      "name": "findIndexOfPastDowntime",
      "outputs": [
        { "internalType": "uint256", "name": "index", "type": "uint256" }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        { "internalType": "address", "name": "_target", "type": "address" }
      ],
      "name": "finishUpgrade",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        { "internalType": "uint16", "name": "_periods", "type": "uint16" },
        {
          "internalType": "uint256",
          "name": "_startIndex",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_maxStakers",
          "type": "uint256"
        }
      ],
      "name": "getActiveStakers",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "allLockedTokens",
          "type": "uint256"
        },
        {
          "internalType": "uint256[2][]",
          "name": "activeStakers",
          "type": "uint256[2][]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        { "internalType": "address", "name": "_staker", "type": "address" }
      ],
      "name": "getAllTokens",
      "outputs": [
        { "internalType": "uint256", "name": "", "type": "uint256" }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        { "internalType": "address", "name": "_staker", "type": "address" }
      ],
      "name": "getCompletedWork",
      "outputs": [
        { "internalType": "uint256", "name": "", "type": "uint256" }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getCurrentPeriod",
      "outputs": [{ "internalType": "uint16", "name": "", "type": "uint16" }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        { "internalType": "address", "name": "_staker", "type": "address" }
      ],
      "name": "getLastActivePeriod",
      "outputs": [{ "internalType": "uint16", "name": "", "type": "uint16" }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        { "internalType": "address", "name": "_staker", "type": "address" },
        { "internalType": "uint256", "name": "_index", "type": "uint256" }
      ],
      "name": "getLastPeriodOfSubStake",
      "outputs": [{ "internalType": "uint16", "name": "", "type": "uint16" }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        { "internalType": "address", "name": "_staker", "type": "address" },
        { "internalType": "uint16", "name": "_periods", "type": "uint16" }
      ],
      "name": "getLockedTokens",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "lockedValue",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        { "internalType": "address", "name": "_staker", "type": "address" },
        { "internalType": "uint16", "name": "_periods", "type": "uint16" }
      ],
      "name": "getLockedTokensInPast",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "lockedValue",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        { "internalType": "address", "name": "_staker", "type": "address" },
        { "internalType": "uint256", "name": "_index", "type": "uint256" }
      ],
      "name": "getPastDowntime",
      "outputs": [
        { "internalType": "uint16", "name": "startPeriod", "type": "uint16" },
        { "internalType": "uint16", "name": "endPeriod", "type": "uint16" }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        { "internalType": "address", "name": "_staker", "type": "address" }
      ],
      "name": "getPastDowntimeLength",
      "outputs": [
        { "internalType": "uint256", "name": "", "type": "uint256" }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getReservedReward",
      "outputs": [
        { "internalType": "uint256", "name": "", "type": "uint256" }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        { "internalType": "address", "name": "_worker", "type": "address" }
      ],
      "name": "getStakerFromWorker",
      "outputs": [
        { "internalType": "address", "name": "", "type": "address" }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getStakersLength",
      "outputs": [
        { "internalType": "uint256", "name": "", "type": "uint256" }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        { "internalType": "address", "name": "_staker", "type": "address" },
        { "internalType": "uint256", "name": "_index", "type": "uint256" }
      ],
      "name": "getSubStakeInfo",
      "outputs": [
        { "internalType": "uint16", "name": "firstPeriod", "type": "uint16" },
        { "internalType": "uint16", "name": "lastPeriod", "type": "uint16" },
        { "internalType": "uint16", "name": "periods", "type": "uint16" },
        {
          "internalType": "uint256",
          "name": "lockedValue",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        { "internalType": "address", "name": "_staker", "type": "address" }
      ],
      "name": "getSubStakesLength",
      "outputs": [
        { "internalType": "uint256", "name": "", "type": "uint256" }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        { "internalType": "address", "name": "_staker", "type": "address" }
      ],
      "name": "getWorkerFromStaker",
      "outputs": [
        { "internalType": "address", "name": "", "type": "address" }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_reservedReward",
          "type": "uint256"
        }
      ],
      "name": "initialize",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "isOwner",
      "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        { "internalType": "address", "name": "_staker", "type": "address" }
      ],
      "name": "isReStakeLocked",
      "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "isTestContract",
      "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "isUpgrade",
      "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        { "internalType": "uint256", "name": "_value", "type": "uint256" },
        { "internalType": "uint16", "name": "_periods", "type": "uint16" }
      ],
      "name": "lock",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint16",
          "name": "_lockReStakeUntilPeriod",
          "type": "uint16"
        }
      ],
      "name": "lockReStake",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [{ "internalType": "uint16", "name": "", "type": "uint16" }],
      "name": "lockedPerPeriod",
      "outputs": [
        { "internalType": "uint256", "name": "", "type": "uint256" }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "lockedPeriodsCoefficient",
      "outputs": [
        { "internalType": "uint256", "name": "", "type": "uint256" }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "maxAllowableLockedTokens",
      "outputs": [
        { "internalType": "uint256", "name": "", "type": "uint256" }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "minAllowableLockedTokens",
      "outputs": [
        { "internalType": "uint256", "name": "", "type": "uint256" }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "minLockedPeriods",
      "outputs": [{ "internalType": "uint16", "name": "", "type": "uint16" }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "minWorkerPeriods",
      "outputs": [{ "internalType": "uint16", "name": "", "type": "uint16" }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "miningCoefficient",
      "outputs": [
        { "internalType": "uint256", "name": "", "type": "uint256" }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "mint",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        { "internalType": "address", "name": "", "type": "address" }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "policyManager",
      "outputs": [
        {
          "internalType": "contract PolicyManagerInterface",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "previousTarget",
      "outputs": [
        { "internalType": "address", "name": "", "type": "address" }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        { "internalType": "uint256", "name": "_index", "type": "uint256" },
        { "internalType": "uint16", "name": "_periods", "type": "uint16" }
      ],
      "name": "prolongStake",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        { "internalType": "address", "name": "_from", "type": "address" },
        { "internalType": "uint256", "name": "_value", "type": "uint256" },
        {
          "internalType": "address",
          "name": "_tokenContract",
          "type": "address"
        },
        { "internalType": "bytes", "name": "", "type": "bytes" }
      ],
      "name": "receiveApproval",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "rewardedPeriods",
      "outputs": [{ "internalType": "uint16", "name": "", "type": "uint16" }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "secondsPerPeriod",
      "outputs": [{ "internalType": "uint32", "name": "", "type": "uint32" }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "secretHash",
      "outputs": [
        { "internalType": "bytes32", "name": "", "type": "bytes32" }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "contract AdjudicatorInterface",
          "name": "_adjudicator",
          "type": "address"
        }
      ],
      "name": "setAdjudicator",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "contract PolicyManagerInterface",
          "name": "_policyManager",
          "type": "address"
        }
      ],
      "name": "setPolicyManager",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        { "internalType": "bool", "name": "_reStake", "type": "bool" }
      ],
      "name": "setReStake",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        { "internalType": "bool", "name": "_windDown", "type": "bool" }
      ],
      "name": "setWindDown",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "contract WorkLockInterface",
          "name": "_workLock",
          "type": "address"
        }
      ],
      "name": "setWorkLock",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        { "internalType": "address", "name": "_staker", "type": "address" },
        { "internalType": "bool", "name": "_measureWork", "type": "bool" }
      ],
      "name": "setWorkMeasurement",
      "outputs": [
        { "internalType": "uint256", "name": "", "type": "uint256" }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        { "internalType": "address", "name": "_worker", "type": "address" }
      ],
      "name": "setWorker",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        { "internalType": "address", "name": "_staker", "type": "address" },
        { "internalType": "uint256", "name": "_penalty", "type": "uint256" },
        {
          "internalType": "address",
          "name": "_investigator",
          "type": "address"
        },
        { "internalType": "uint256", "name": "_reward", "type": "uint256" }
      ],
      "name": "slashStaker",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        { "internalType": "address", "name": "", "type": "address" }
      ],
      "name": "stakerInfo",
      "outputs": [
        { "internalType": "uint256", "name": "value", "type": "uint256" },
        {
          "internalType": "uint16",
          "name": "confirmedPeriod1",
          "type": "uint16"
        },
        {
          "internalType": "uint16",
          "name": "confirmedPeriod2",
          "type": "uint16"
        },
        { "internalType": "bool", "name": "reStakeDisabled", "type": "bool" },
        {
          "internalType": "uint16",
          "name": "lockReStakeUntilPeriod",
          "type": "uint16"
        },
        { "internalType": "address", "name": "worker", "type": "address" },
        {
          "internalType": "uint16",
          "name": "workerStartPeriod",
          "type": "uint16"
        },
        {
          "internalType": "uint16",
          "name": "lastActivePeriod",
          "type": "uint16"
        },
        { "internalType": "bool", "name": "measureWork", "type": "bool" },
        {
          "internalType": "uint256",
          "name": "completedWork",
          "type": "uint256"
        },
        { "internalType": "bool", "name": "windDown", "type": "bool" },
        {
          "internalType": "uint256",
          "name": "reservedSlot2",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "reservedSlot3",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "reservedSlot4",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        { "internalType": "uint256", "name": "", "type": "uint256" }
      ],
      "name": "stakers",
      "outputs": [
        { "internalType": "address", "name": "", "type": "address" }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "target",
      "outputs": [
        { "internalType": "address", "name": "", "type": "address" }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "token",
      "outputs": [
        {
          "internalType": "contract NuCypherToken",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        { "internalType": "uint256", "name": "", "type": "uint256" }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        { "internalType": "address", "name": "newOwner", "type": "address" }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "_testTarget",
          "type": "address"
        }
      ],
      "name": "verifyState",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        { "internalType": "uint256", "name": "_value", "type": "uint256" }
      ],
      "name": "withdraw",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "workLock",
      "outputs": [
        {
          "internalType": "contract WorkLockInterface",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        { "internalType": "address", "name": "", "type": "address" }
      ],
      "name": "workerToStaker",
      "outputs": [
        { "internalType": "address", "name": "", "type": "address" }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ]
];

const STAKING_ESCROW_ADDRESSold = '0xdC098916291e1ef683A4f469fa32025c872194df';

const STAKING_ESCROW_ADDRESS = '0xAB51fBDd4Faf6c691884B3A9b475E34E2092aE81';
const STAKING_ESCROW_ABI = abiEscrow[3];
export const instanceEscrow = new web3.eth.Contract(
  STAKING_ESCROW_ABI,
  STAKING_ESCROW_ADDRESS
);

// Token 
const abiTokenold = [
  "NuCypherToken",
  "v0.0.0",
  "0xA59820B4C01A3c3869554DB0243a02bcA7b15730",
  [
    {
      constant: true,
      inputs: [],
      name: "name",
      outputs: [{ name: "", type: "string" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        { name: "spender", type: "address" },
        { name: "value", type: "uint256" }
      ],
      name: "approve",
      outputs: [{ name: "", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "totalSupply",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        { name: "from", type: "address" },
        { name: "to", type: "address" },
        { name: "value", type: "uint256" }
      ],
      name: "transferFrom",
      outputs: [{ name: "", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "decimals",
      outputs: [{ name: "", type: "uint8" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        { name: "spender", type: "address" },
        { name: "addedValue", type: "uint256" }
      ],
      name: "increaseAllowance",
      outputs: [{ name: "", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: true,
      inputs: [{ name: "owner", type: "address" }],
      name: "balanceOf",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "symbol",
      outputs: [{ name: "", type: "string" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        { name: "spender", type: "address" },
        { name: "subtractedValue", type: "uint256" }
      ],
      name: "decreaseAllowance",
      outputs: [{ name: "", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        { name: "to", type: "address" },
        { name: "value", type: "uint256" }
      ],
      name: "transfer",
      outputs: [{ name: "", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        { name: "_spender", type: "address" },
        { name: "_value", type: "uint256" },
        { name: "_extraData", type: "bytes" }
      ],
      name: "approveAndCall",
      outputs: [{ name: "success", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: true,
      inputs: [
        { name: "owner", type: "address" },
        { name: "spender", type: "address" }
      ],
      name: "allowance",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [{ name: "_totalSupply", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "constructor"
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: "from", type: "address" },
        { indexed: true, name: "to", type: "address" },
        { indexed: false, name: "value", type: "uint256" }
      ],
      name: "Transfer",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: "owner", type: "address" },
        { indexed: true, name: "spender", type: "address" },
        { indexed: false, name: "value", type: "uint256" }
      ],
      name: "Approval",
      type: "event"
    }
  ]
];
const abiToken = [
  "NuCypherToken",
  "v0.0.0",
  "0x1F805c93A0AA3Ef7D17C43B7D2b316D101722F21",
  [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_totalSupplyOfTokens",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [
        { "internalType": "address", "name": "owner", "type": "address" },
        { "internalType": "address", "name": "spender", "type": "address" }
      ],
      "name": "allowance",
      "outputs": [
        { "internalType": "uint256", "name": "", "type": "uint256" }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        { "internalType": "address", "name": "spender", "type": "address" },
        { "internalType": "uint256", "name": "value", "type": "uint256" }
      ],
      "name": "approve",
      "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        { "internalType": "address", "name": "_spender", "type": "address" },
        { "internalType": "uint256", "name": "_value", "type": "uint256" },
        { "internalType": "bytes", "name": "_extraData", "type": "bytes" }
      ],
      "name": "approveAndCall",
      "outputs": [
        { "internalType": "bool", "name": "success", "type": "bool" }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        { "internalType": "address", "name": "owner", "type": "address" }
      ],
      "name": "balanceOf",
      "outputs": [
        { "internalType": "uint256", "name": "", "type": "uint256" }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "decimals",
      "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        { "internalType": "address", "name": "spender", "type": "address" },
        {
          "internalType": "uint256",
          "name": "subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseAllowance",
      "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        { "internalType": "address", "name": "spender", "type": "address" },
        { "internalType": "uint256", "name": "addedValue", "type": "uint256" }
      ],
      "name": "increaseAllowance",
      "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        { "internalType": "uint256", "name": "", "type": "uint256" }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        { "internalType": "address", "name": "to", "type": "address" },
        { "internalType": "uint256", "name": "value", "type": "uint256" }
      ],
      "name": "transfer",
      "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        { "internalType": "address", "name": "from", "type": "address" },
        { "internalType": "address", "name": "to", "type": "address" },
        { "internalType": "uint256", "name": "value", "type": "uint256" }
      ],
      "name": "transferFrom",
      "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
];

const TOKEN_ADDRESS = abiToken[2];
const TOKEN_ABI = abiToken[3];
export const instanceToken = new web3.eth.Contract(TOKEN_ABI, TOKEN_ADDRESS);