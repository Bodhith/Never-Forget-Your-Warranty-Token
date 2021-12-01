
/* 
sampleContract.methods.get().call({from: web3.eth.defaultAccount}).then(function(count) {
	console.log(count);
	sampleContract.methods.inc().send({from: web3.eth.defaultAccount}).then(function(receipt) {
		console.log(receipt);
		sampleContract.methods.get().call({from: web3.eth.defaultAccount}).then(function(count) {
			console.log(count);
		});
	});
});
*/

/* 
await web3.eth.sendTransaction({
  from: web3.eth.defaultAccount,
  to: tokenContractAddress,
  value: web3.utils.toWei(""+15, "ether").toString()
}).then(function(rec) {
  console.log(rec);
});

tokenContract.methods.balanceOf(web3.eth.defaultAccount).call(function(res) {
  console.log(2, res);
});
*/

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

const products = {
  "Phone": 1,
  "Personal Computer": 2,
  "Television": 3
}

async function loadWeb3() {
  if (typeof web3 !== 'undefined') {
    console.log('MetaMask is installed!');
    web3 = new Web3(web3.currentProvider);
    ethereum.request({ method: 'eth_requestAccounts' });
  } else {
    web3 = new Web3(new web3.providers.HttpProvider('http://127.0.0.1:7545'));
  }
  await setDefaultAccount();
}

async function setDefaultAccount() {
  await web3.eth.getAccounts().then(data => {
    web3.eth.defaultAccount = data[0];
  });
}

async function getContractBalance(contractAddress) {
  var balance = await web3.eth
  .getBalance(contractAddress)
  .then(function(res) {
    console.log("Contract",  contractAddress, "balance", res);
    return res
  })
  return balance;
}

async function registerUser() {
  let firstName = "ac", lastName = "bc";
  await app.extraFunctionalities.instance.methods
  ._register(firstName, lastName)
  .send({from: web3.eth.defaultAccount})
  .then(function(res) {
    console.log("User Registered", res);
  });
}

async function isRegistered() {
  let registered = await app.token.instance.methods
    .customerdetails(web3.eth.defaultAccount)
    .call({from: web3.eth.defaultAccount})
    .then(function(res) {
      console.log("Check Registered", res);
    });
    return registered;
}

async function getUserTokens() {
  let balance = await app.token.instance.methods
  .balanceOf(web3.eth.defaultAccount)
  .call()
  .then(function(res) {
    console.log("Balance Tokens", res);
    return res;
  });
  return balance;
}

async function buyProduct() {
  let product = products["Phone"];
  let amount = 11;
  await app.extraFunctionalities.instance.methods
  .Get_NFYW(product)
  .send({from: web3.eth.defaultAccount, value: web3.utils.toWei(""+amount, "ether").toString()})
  .then(function(res) {
    console.log("Purchased", res);
  });
}

async function withdrawAmount() {
  await app.extraFunctionalities.instance.methods
  .withdraw()
  .send({from: web3.eth.defaultAccount})
  .then(function(res) {
    console.log("Withdraw Amount", res);
  });
}

async function getUserProducts() {
  let userProducts = await app.token.instance.methods
    .getUserProducts()
    .call({from: web3.eth.defaultAccount})
    .then(function(res) {
      var products = [];
      console.log("User Products", res);
      for(let i=0, n=res[0].length; i<n; i++) {
        if (res[1][i]) {
          products.push(res[0][i])
        }
      }
      return products;
    });
    return userProducts;
}

async function redeemToken() {
  let productId = "p5";
  await app.extraFunctionalities.instance.methods
  .Redeem_NFYW(productId)
  .send({from: web3.eth.defaultAccount})
  .then(function(res) {
    console.log("Redeemed Token", res);
  });
}

async function exchangeProduct() {
  let productId = "p6", product = products["Television"];
  await app.extraFunctionalities.instance.methods
    .ExchangeProduct(productId, product)
    .send({from: web3.eth.defaultAccount})
    .then(function(res) {
      console.log("Exchanged", res);
    });
}

async function application() {
  await loadWeb3().then(function() {
    console.log("Web3 loaded sucessfully");
  });

  app.token.instance = new web3.eth.Contract(app.token.abi, app.token.address);
  app.extraFunctionalities.instance = new web3.eth.Contract(app.extraFunctionalities.abi, app.extraFunctionalities.address);

}

application();