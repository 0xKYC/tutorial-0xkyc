import Web3 from "web3";
import { ContractAbi } from "web3-types";

// YOU MUST PROVIDE YOUR OWN PROVIDER URL
const web3 = new Web3('{YOUR_PROVIDER_URL}');

const abi: ContractAbi = [
  {
    inputs: [
      { internalType: 'string', name: 'name_', type: 'string' },
      { internalType: 'string', name: 'symbol_', type: 'string' },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: '_address',
        type: 'address',
      },
    ],
    name: 'AssignUUID',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: '_soul',
        type: 'address',
      },
    ],
    name: 'Burn',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: '_soul',
        type: 'address',
      },
    ],
    name: 'Mint',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: '_soul',
        type: 'address',
      },
    ],
    name: 'Update',
    type: 'event',
  },
  {
    inputs: [],
    name: '_name',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: '_symbol',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: '_totalSBT',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'string', name: 'UUID', type: 'string' },
      { internalType: 'address', name: 'to', type: 'address' },
    ],
    name: 'assignUUID',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: '_soul', type: 'address' }],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: '_address', type: 'address' }],
    name: 'getSBTData',
    outputs: [
      { internalType: 'uint256[2]', name: '', type: 'uint256[2]' },
      { internalType: 'uint256[2][2]', name: '', type: 'uint256[2][2]' },
      { internalType: 'uint256[2]', name: '', type: 'uint256[2]' },
      { internalType: 'uint256[3]', name: '', type: 'uint256[3]' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: '_address', type: 'address' }],
    name: 'getUUIDData',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: '_soul', type: 'address' }],
    name: 'hasSoul',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'string', name: 'UUID', type: 'string' },
      { internalType: 'uint256[2]', name: 'a', type: 'uint256[2]' },
      { internalType: 'uint256[2][2]', name: 'b', type: 'uint256[2][2]' },
      { internalType: 'uint256[2]', name: 'c', type: 'uint256[2]' },
      { internalType: 'uint256[3]', name: 'input', type: 'uint256[3]' },
      { internalType: 'address', name: 'to', type: 'address' },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSBT',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: '_soul', type: 'address' },
      {
        components: [
          { internalType: 'uint256[2]', name: 'a', type: 'uint256[2]' },
          { internalType: 'uint256[2][2]', name: 'b', type: 'uint256[2][2]' },
          { internalType: 'uint256[2]', name: 'c', type: 'uint256[2]' },
          { internalType: 'uint256[3]', name: 'input', type: 'uint256[3]' },
        ],
        internalType: 'struct OxKYC.Proof',
        name: '_soulData',
        type: 'tuple',
      },
    ],
    name: 'updateSBT',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

// The same contract used in the `sandbox` environment.
// https://sandbox.0xkyc.id
const sepoliaContractAddress = '0xbC5ED9669fc8cA7f40e8147ff40cBf48C531eE0A'
const soulbound = new web3.eth.Contract(abi, sepoliaContractAddress);

async function callHasSoul(walletAddress: string): Promise<boolean> {
  try {
    return await soulbound.methods
      // @ts-ignore
      .hasSoul(walletAddress)
      .call();
  } catch (error) {
    console.error('Error: ', error.message);
    return false;
  }
}

async function callGetUUIDData(walletAddress: string): Promise<string> {
  try {
    return await soulbound.methods
      // @ts-ignore
      .getUUIDData(walletAddress)
      .call();
  } catch (error) {
    console.error('Error: ', error.message);
    return '';
  }
}

async function testHasSoulScenario0() {
  console.log('\n# testHasSoulScenario0')
  const walletAddressWithInvalidFormat: string = 'invalid_format';
  const result = await callHasSoul(walletAddressWithInvalidFormat);
  console.log(`hasSoul: ${result}`);
}

async function testHasSoulScenario1() {
  console.log('\n# testHasSoulScenario1')
  const walletAddressWithSoul: string = '0xb52e0c56e0A8Afc9B28c8e0a8396af3261a5e191';
  const result = await callHasSoul(walletAddressWithSoul);
  if (result) {
    console.log(`hasSoul: ${result}`);
    console.log(`walletAddress: ${walletAddressWithSoul}`);
    console.log(`1. The owner is over 18.`);
    console.log(`2. The owner is not from OFAC sanctioned country.`);
    console.log(`3. The wallet address is not in the OFAC sanctioned list.`);
  }
}

async function testHasSoulScenario2() {
  console.log('\n# testHasSoulScenario2')
  const walletAddressWithoutSoul: string = '0x3f5CE5FBFe3E9af3971dD833D26bA9b5C936f0bE';
  const result = await callHasSoul(walletAddressWithoutSoul);
  if (!result) {
    console.log(`hasSoul: ${result}`);
    console.log(`walletAddress: ${walletAddressWithoutSoul}`);
    console.log(`- The owner has not finished 0xkyc verification process.`);
    console.log(`- Or the owner is not over 18.`);
    console.log(`- Or the owner is from OFAC sanctioned country.`);
    console.log(`- Or the wallet address is in the OFAC sanctioned list.`);
  }
}

async function testGetUUIDDataScenario0() {
  console.log('\n# testGetUUIDDataScenario0')
  const walletAddress: string = 'invalid_format';
  try {
    await callGetUUIDData(walletAddress);
  } catch (error) {
    console.error(typeof error);
  }
}

async function testGetUUIDDataScenario1() {
  console.log('\n# testGetUUIDDataScenario1')
  const walletAddressWithUUID: string = '0xb52e0c56e0A8Afc9B28c8e0a8396af3261a5e191';
  const uuid = await callGetUUIDData(walletAddressWithUUID);
  if (uuid !== '') {
    console.log(`uuid: ${uuid}`);
    console.log(`walletAddress: ${walletAddressWithUUID}`);
    console.log(`This walletAddress has been assigned uuid by 0xkyc.`);
  }
}

async function testGetUUIDDataScenario2() {
  console.log('\n# testGetUUIDDataScenario2')
  const walletAddressWithoutUUID: string = '0x3f5CE5FBFe3E9af3971dD833D26bA9b5C936f0bE';
  const uuid = await callGetUUIDData(walletAddressWithoutUUID);
  if (uuid === '') {
    console.log(`uuid: ${uuid}`);
    console.log(`walletAddress: ${walletAddressWithoutUUID}`);
    console.log(`This walletAddress has not been assigned uuid by 0xkyc.`);
  }

}

async function testGetUUIDDataScenario3() {
  console.log('\n# testGetUUIDDataScenario3')
  const walletAddress1: string = '0xb52e0c56e0A8Afc9B28c8e0a8396af3261a5e191';
  const walletAddress2: string = '0x778c6Eec2b9a1Cf006e854abBcd261F63b3eb769';
  const uuid1 = await callGetUUIDData(walletAddress1);
  const uuid2 = await callGetUUIDData(walletAddress2);
  if (uuid1 !== '' && uuid2 !== '' && uuid1 === uuid2) {
    console.log(`walletAddress: ${walletAddress1} and walletAddress: ${walletAddress2} have the same uuid: ${uuid1}`);
    console.log(`It means two addresses are owned by the same person.`);
    console.log(`NOTE: Even if the network is different, wallet addresses from the same person has the same UUID.`);
  }
}

async function testGetUUIDDataScenario4() {
  console.log('\n# testGetUUIDDataScenario4')
  const walletAddress1: string = '0xb52e0c56e0A8Afc9B28c8e0a8396af3261a5e191';
  const walletAddress2: string = '0xc461F7c743a428DE1F20627fbD9243bB0983C94B';
  const uuid1 = await callGetUUIDData(walletAddress1);
  const uuid2 = await callGetUUIDData(walletAddress2);
  if (uuid1 !== '' && uuid2 !== '' && uuid1 !== uuid2) {
    console.log(`walletAddress1: ${walletAddress1}, uuid1: ${uuid1}`);
    console.log(`walletAddress2: ${walletAddress2}, uuid2: ${uuid2}`);
    console.log(`It means two wallet addresses are owned by the different person.`);
  }
}

async function main() {
  try {
    await testHasSoulScenario0();
    await testHasSoulScenario1();
    await testHasSoulScenario2();
    await testGetUUIDDataScenario0();
    await testGetUUIDDataScenario1();
    await testGetUUIDDataScenario2();
    await testGetUUIDDataScenario3();
    await testGetUUIDDataScenario4();
  } catch (error) {
    console.error('An error occurred during tests execution: ', error.message);
  }
}

main();
