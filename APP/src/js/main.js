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
            },
            {
              "internalType": "uint256[]",
              "name": "",
              "type": "uint256[]"
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
      "address": "0x43C337360d6381B971e1fd4ccF5504d6e16C6C64",
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
      "address": "0xdd1E89B999F732A97145BaBD19BAF32d8d74188c",
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
  
  async function getBalance(contractAddress) {
    let balance = await app.token.instance.methods
      .getBalance(contractAddress)
      .then(function(res) {
        console.log("Contract",  contractAddress, "balance", res);
        return res;
      });
    return balance;
  }

  async function refund() {
    let productId = $("#refundTokenInput").val();
    await app.extraFunctionalities.instance.methods
      .RefundRequest(productId)
      .send({from: web3.eth.defaultAccount})
      .then(function(res) {
        console.log("Refund", res);
        getUserTokens();
        getUserProducts();
      });
  }

  async function getTokensCirculation() {
    $("#tokensCirculationDiv").empty();
    let balance = await app.token.instance.methods
      .TokensInCirculation()
      .call()
      .then(function(res) {
        $("#tokensCirculationDiv").append(res);
        console.log("Tokens in Circulation", res);
      });
  }

  async function getTokensRedeemed() {
    $("#tokensRedeemedDiv").empty();
    let balance = await app.token.instance.methods
      .RedeemedTokens()
      .call()
      .then(function(res) {
        $("#tokensRedeemedDiv").append(res);
        console.log("Tokens in Circulation", res);
      });
  }

  async function getContractBalance() {
    $("#contractBalanceDiv").empty();
    var contractAddress = app.extraFunctionalities.address;
    var balance = await web3.eth
    .getBalance(contractAddress)
    .then(function(res) {
      console.log("Contract",  contractAddress, "balance", res);
      $("#contractBalanceDiv").append(res);
      return res;
    }); 
  }

  async function registerUser() {
    let firstName = $("#firstNameInput").val(), lastName = $("#secondNameInput").val();
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
    $("#balanceDiv").empty();
    let account = $("#balanceInput").val();
    let balance = await app.token.instance.methods
    .balanceOf(account)
    .call()
    .then(function(res) {
      console.log("Balance Tokens", res);
      $("#balanceDiv").append(res);
      return res;
    });
    return balance;
  }
  
  async function buyProduct() {
    let amount = $("#productSelect").val();;
    let product = amount/10;
    await app.extraFunctionalities.instance.methods
    .Get_NFYW(product)
    .send({from: web3.eth.defaultAccount, value: web3.utils.toWei(""+amount, "ether").toString()})
    .then(function(res) {
      console.log("Purchased", res);
      getUserTokens();
      getUserProducts();
    });
  }
  
  async function withdrawAmount() {
    await app.extraFunctionalities.instance.methods
    .withdraw()
    .send({from: web3.eth.defaultAccount})
    .then(function(res) {
      console.log("Withdraw Amount", res);
      getContractBalance();
    });
  }
  
  async function getUserProducts() {
    let userProducts = await app.token.instance.methods
      .getUserProducts()
      .call({from: web3.eth.defaultAccount})
      .then(function(res) {
        $("#productsDisplayDiv").empty();
        var products = [];
        let status, expiryStatus;
        console.log("User Products", res);
        for(let i=0, n=res[0].length; i<n; i++) {
          if (res[1][i]) {
            products.push(res[0][i])
            status = "Active";
            expiryStatus = res[2][i]+" days";
          }
          else {
            status = "Not Active";
            expiryStatus = "N/A"
          }
          $("#productsDisplayDiv").append("<div class='mt-2 row'>"+res[0][i]+" -- "+status+" --- "+expiryStatus+" <div>");
        }
        return products;
      });
      return userProducts;
  }

  async function redeemToken() {
    let productId = $("#redeemTokenInput").val();
    await app.extraFunctionalities.instance.methods
    .Redeem_NFYW(productId)
    .send({from: web3.eth.defaultAccount})
    .then(function(res) {
      console.log("Redeemed Token", res);
      getUserTokens();
      getUserProducts();
    });
  }
  
  async function exchangeProduct() {
    let productId = $("#exchangeProductInput").val(), product;

    if(productId.includes("p")) product = 1;
    else if(productId.includes('l')) product = 3;
    else if(productId.includes('m')) product = 2;

    await app.extraFunctionalities.instance.methods
      .ExchangeProduct(productId, product)
      .send({from: web3.eth.defaultAccount})
      .then(function(res) {
        console.log("Exchanged", res);
        getUserTokens();
        getUserProducts();
      });
  }
  
  async function getOwner() {
    let owner = await app.token.instance.methods
      .owner()
      .call()
      .then(function(res) {
        return res;
      });
      return owner;
  }

  async function setHomePage() {
    if(window.location.pathname.includes("customer")) {
      $("#balanceInput").val(web3.eth.defaultAccount);
      $("#productSelect").empty();
      jQuery.each(products, function(product, value) {
        $("#productSelect").append("<option value="+(value*10)+">"+product+", costs "+(value*10)+"</option>")
      });
    }
    if(!window.location.pathname.includes("customer") && web3.eth.defaultAccount != await getOwner()) {
      window.location.href = "http://localhost:3000/customer"
    }
    else if(!window.location.pathname.includes("executive") && web3.eth.defaultAccount == await getOwner()) {
      window.location.href = "http://localhost:3000/executive"
    }
  }

  async function application() {
    await loadWeb3().then(function() {
      console.log("Web3 loaded sucessfully");
    });

    app.token.instance = new web3.eth.Contract(app.token.abi, app.token.address);
    app.extraFunctionalities.instance = new web3.eth.Contract(app.extraFunctionalities.abi, app.extraFunctionalities.address);

    await setHomePage();
  }
  
  application();