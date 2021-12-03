const Web3 = require('web3')

var selectedAccount;

const app = {
    "token": {
      "abi": [
        {
          "inputs": [],
          "stateMutability": "payable",
          "type": "constructor",
          "payable": true
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
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "allowance",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "constant": true
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "balanceOf",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "constant": true
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "customerdetails",
          "outputs": [
            {
              "internalType": "address",
              "name": "customeraddress",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "reg",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "num_of_products",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "first_name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "last_name",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "constant": true
        },
        {
          "inputs": [],
          "name": "decimals",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "constant": true
        },
        {
          "inputs": [],
          "name": "name",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "constant": true
        },
        {
          "inputs": [],
          "name": "owner",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "constant": true
        },
        {
          "inputs": [],
          "name": "symbol",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "constant": true
        },
        {
          "inputs": [],
          "name": "totalSupply",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "constant": true
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "_first_name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "_last_name",
              "type": "string"
            }
          ],
          "name": "register",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "choice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "choose",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "payable",
          "type": "function",
          "payable": true
        },
        {
          "inputs": [],
          "name": "displayproductID",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "constant": true
        },
        {
          "inputs": [
            {
              "internalType": "enum Token.productchoice",
              "name": "pro",
              "type": "uint8"
            }
          ],
          "name": "product_number",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_value",
              "type": "uint256"
            }
          ],
          "name": "transfer",
          "outputs": [
            {
              "internalType": "bool",
              "name": "success",
              "type": "bool"
            }
          ],
          "stateMutability": "payable",
          "type": "function",
          "payable": true
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_value",
              "type": "uint256"
            }
          ],
          "name": "transferFrom",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "payable",
          "type": "function",
          "payable": true
        },
        {
          "inputs": [],
          "name": "mint",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "a",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "b",
              "type": "string"
            }
          ],
          "name": "compareStrings",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "constant": true
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "pid",
              "type": "string"
            }
          ],
          "name": "removeWarranty",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_from",
              "type": "address"
            }
          ],
          "name": "redeem",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "TokensInCirculation",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "ActiveWarrantyCards",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "constant": true
        },
        {
          "inputs": [],
          "name": "RedeemedTokens",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "Redeemedtokens",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "constant": true
        },
        {
          "inputs": [],
          "name": "refund",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function",
          "payable": true
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "pid",
              "type": "string"
            }
          ],
          "name": "status",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "constant": true
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "pid",
              "type": "string"
            }
          ],
          "name": "timerem",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "pid",
              "type": "string"
            }
          ],
          "name": "timeremforrefund",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "constant": true
        },
        {
          "inputs": [],
          "name": "checkreg",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "constant": true
        },
        {
          "inputs": [],
          "name": "getUserProducts",
          "outputs": [
            {
              "internalType": "string[]",
              "name": "",
              "type": "string[]"
            },
            {
              "internalType": "bool[]",
              "name": "",
              "type": "bool[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "returnpid",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "constant": true
        }
      ],
      "address": "0x522c65d403D585F8ECBC44330a4254cfFcc660bb",
      "instance": ""
    },
    "extraFunctionalities": {
      "abi": [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_token",
              "type": "address"
            }
          ],
          "stateMutability": "payable",
          "type": "constructor",
          "payable": true
        },
        {
          "inputs": [],
          "name": "token",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "constant": true
        },
        {
          "inputs": [],
          "name": "get_balance",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "constant": true
        },
        {
          "inputs": [],
          "name": "withdraw",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "choice",
              "type": "uint256"
            }
          ],
          "name": "Get_NFYW",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "payable",
          "type": "function",
          "payable": true
        },
        {
          "inputs": [],
          "name": "Get_proid",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "constant": true
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "product_id",
              "type": "string"
            }
          ],
          "name": "Redeem_NFYW",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function",
          "payable": true
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "product_id",
              "type": "string"
            }
          ],
          "name": "RefundRequest",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function",
          "payable": true
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "product_id",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "choice",
              "type": "uint256"
            }
          ],
          "name": "ExchangeProduct",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "_first_name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "_last_name",
              "type": "string"
            }
          ],
          "name": "_register",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ],
      "address": "0x92766960cA3D3117538155772307Ab2F57D4c573",
      "instance": ""
    }
}



async function loadWeb3() {
    if (typeof web3 !== 'undefined') {
        console.log('MetaMask is installed!');
        web3 = new Web3(web3.currentProvider);
    } else {
        web3 = new Web3(new Web3('http://127.0.0.1:7545'));
        console.log("Direct Connect");
    }

    app.token.instance = new web3.eth.Contract(app.token.abi, app.token.address);
    app.extraFunctionalities.instance = new web3.eth.Contract(app.extraFunctionalities.abi, app.extraFunctionalities.address);

    await setDefaultAccount();
}

async function getOwner() {
    let owner = await app.token.instance.methods
        .owner()
        .call()
        .then(function(res) {
            console.log("Owner", res);
            console.log("accou", web3.eth.defaultAccount);
            return res;
        });
    return owner;
}

async function getUserType() {
    let owner = await getOwner();
    if(web3.eth.defaultAccount == owner ) {
        return "executive";
    }
    return "customer";
}

async function setDefaultAccount() {
    await web3.eth
    .getAccounts()
    .then(data => {
        web3.eth.defaultAccount = data[0];
        console.log("Default", data[0]);
    });
}

module.exports = {
    loadWeb3: loadWeb3,
    getUserType: getUserType
}