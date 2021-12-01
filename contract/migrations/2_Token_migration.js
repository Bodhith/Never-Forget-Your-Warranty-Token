const Token = artifacts.require("Token");
const ExtraFunctionalities = artifacts.require("ExtraFunctionalities");

module.exports = function (deployer, network, accounts) {
  console.log(deployer, accounts);
  deployer.deploy(Token, {
    from: accounts[0],
    value: "30000000000"
  }).then(function() {
    return deployer.deploy(ExtraFunctionalities, Token.address, {
      from: accounts[0],
      value: "30000000000"
    });
  });  
};
