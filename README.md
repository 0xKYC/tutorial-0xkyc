# 0xKYC Tutorial
This document walks you through the process of using the 0xKYC system.

It takes less than 5 minutes and free.

---

## Tech Stack
- Language: typescript (you can easily convert it to javascript)
- Library: web3.js
- RPC node provider: Alchemy
- Network: Ethereum Sepolia
- Package Manager: npm (you can easily convert it to other package managers like yarn)

## Installation
Clone the tutorial repository to your local machine:

``` bash
$ git clone git@github.com:0xKYC/tutorial-0xkyc.git
$ cd tutorial-0xkyc
```

Install the necessary packages:

``` bash
$ npm install
```

## Update Configurations
- Update {YOUR_PROVIDER_URL} to your provider url in example.ts:

``` typescript
const web3 = new Web3('{YOUR_PROVIDER_URL}');
```

### How to get provider url?
1. Go to [alchemy website](https://www.alchemy.com/)
2. Open a free account
3. Sign in and [go to dashboard](https://dashboard.alchemy.com/)
4. Create a new Sepolia app
5. Copy your HTTPS url and update {YOUR_PROVIDER_URL} to yours.

## Compile and Run

Compile the TypeScript file:

``` bash
$ tsc example.ts
```

Execute the compiled JavaScript file:

``` bash
$ node example.js
```

## Output
The output will look like below:

``` shell output
# testHasSoulScenario0
Error:  Web3 validator found 1 error[s]:
value "invalid_format" at "/0" must pass "address" validation
hasSoul: false

# testHasSoulScenario1
hasSoul: true
walletAddress: 0xb52e0c56e0A8Afc9B28c8e0a8396af3261a5e191
1. The owner is over 18.
2. The owner is not from OFAC sanctioned country.
3. The wallet address is not in the OFAC sanctioned list.

# testHasSoulScenario2
hasSoul: false
walletAddress: 0x3f5CE5FBFe3E9af3971dD833D26bA9b5C936f0bE
- The owner has not finished 0xkyc verification process.
- Or the owner is not over 18.
- Or the owner is from OFAC sanctioned country.
- Or the wallet address is in the OFAC sanctioned list.

# testGetUUIDDataScenario0
Error:  Web3 validator found 1 error[s]:
value "invalid_format" at "/0" must pass "address" validation

# testGetUUIDDataScenario1
uuid: afb701e7-36d9-448c-9c55-ad562aba6c2e
walletAddress: 0xb52e0c56e0A8Afc9B28c8e0a8396af3261a5e191
This walletAddress has been assigned uuid by 0xkyc.

# testGetUUIDDataScenario2
uuid:
walletAddress: 0x3f5CE5FBFe3E9af3971dD833D26bA9b5C936f0bE
This walletAddress has not been assigned uuid by 0xkyc.

# testGetUUIDDataScenario3
walletAddress: 0xb52e0c56e0A8Afc9B28c8e0a8396af3261a5e191 and walletAddress: 0x778c6Eec2b9a1Cf006e854abBcd261F63b3eb769 have the same uuid: afb701e7-36d9-448c-9c55-ad562aba6c2e
It means two addresses are owned by the same person.
NOTE: Even if the network is different, wallet addresses from the same person has the same UUID.

# testGetUUIDDataScenario4
walletAddress1: 0xb52e0c56e0A8Afc9B28c8e0a8396af3261a5e191, uuid1: afb701e7-36d9-448c-9c55-ad562aba6c2e
walletAddress2: 0xc461F7c743a428DE1F20627fbD9243bB0983C94B, uuid2: 5324d1da-c44a-47e5-857e-72db6529b440
It means two wallet addresses are owned by the different person.
```