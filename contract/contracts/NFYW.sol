
// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <=0.8.6; 
contract Token {

   
    address public owner; //address of the deployer of the smart contract
    string public name;
    string public symbol;
    uint256 public decimals;
    uint256 public totalSupply;
    string productID;
    uint lapindex;
    uint phoneindex;
    uint pcindex;
    string res;
    struct customer
    {
        address customeraddress;
        bool reg;
        uint num_of_products;
        string first_name;
        string last_name;
        string[] products;
        uint256[] time_of_purchase;
        uint256[] pricepaid;
        bool[] productwarranty;
    }
    enum productchoice {PHONE,LAPTOP,PC}
    
    mapping(address => customer) public customerdetails;
    mapping(address => uint256) public balanceOf; // function to find the balance of each address
    mapping(address => mapping(address => uint256)) public allowance;



    // Events - fire events on state changes 
    event Transfer(address indexed from, address indexed to, uint256 value);

    // constructor to be executed after the smart contract is deployed
    constructor() public payable
    {
        name = "WARRANTY";
        symbol = "NFYW";
        decimals = 0;
        totalSupply = 0; 
        balanceOf[msg.sender] = totalSupply;
        owner = msg.sender;
        lapindex = 0;
        phoneindex =0;
        pcindex = 0;
    }
    
    function append(string memory a, string memory b) internal pure returns (string memory) 
    {
    return string(abi.encodePacked(a, b));
    }

    function register(string memory _first_name, string memory _last_name)public 
    {   
    require(customerdetails[tx.origin].reg==false);
    customerdetails[tx.origin].reg=true;
    customerdetails[tx.origin].first_name=_first_name;
    customerdetails[tx.origin].last_name=_last_name;
    customerdetails[tx.origin].num_of_products=0;
    }


    function choose(uint256 choice,uint amount) public payable returns(string memory)
    {
        require(customerdetails[tx.origin].reg==true);
    if(choice == 1){
    product_number(productchoice.PHONE);
    }
    else if(choice == 2)
    {
    product_number(productchoice.PC);
    }
    else if(choice == 3){
    product_number(productchoice.LAPTOP);
    }
    customerdetails[tx.origin].products.push(productID);
    customerdetails[tx.origin].time_of_purchase.push(block.timestamp);
    customerdetails[tx.origin].num_of_products+=1;
    customerdetails[tx.origin].pricepaid.push(amount);
    customerdetails[tx.origin].productwarranty.push(true);
    return productID;
    
    }

  
    function displayproductID() public view returns(string memory)
    {
    return customerdetails[tx.origin].products[0];
    }
    
    
    function product_number(productchoice pro) public returns(string memory)
    {
        productID = "";
        
        if(pro == productchoice.PHONE)
            {
                phoneindex+=1;
                res= (uintToStr(phoneindex));
                productID = append("p",res);
            }
        if(pro == productchoice.LAPTOP)
            {
                lapindex+=1;
                res = uintToStr(lapindex);
                productID = append("l",res);
            
            }
        if(pro == productchoice.PC)
            {
                pcindex+=1;
                res = uintToStr(pcindex);
                productID = append("m",res);
            }
        return string(productID);
    }
    
    
    function uintToStr(uint _i) internal pure returns (string memory _uintAsString) 
    {
        if (_i == 0) {
            return "0";
        }
        uint j = _i;
        uint len;
        while (j != 0) {
            len++;
            j /= 10;
        }
        bytes memory bstr = new bytes(len);
        uint k = len;
        while (_i != 0) {
            k = k-1;
            uint8 temp = (48 + uint8(_i - _i / 10 * 10));
            bytes1 b1 = bytes1(temp);
            bstr[k] = b1;
            _i /= 10;
        }
        return string(bstr);
    }

    
    
    // calls _transfer funciton 
    function transfer(address _to, uint256 _value) payable external returns (bool success) 
    {
        require(balanceOf[msg.sender] >= _value);
        _transfer(msg.sender, _to, _value);
        return true;
    }


    //transfers the Token from sender to receiver
    function _transfer(address _from, address _to, uint256 _value) internal
    {
        // Ensure sending is to valid address! 0x0 address cane be used to burn() 
        require(_to != address(0));
        balanceOf[_from] = balanceOf[_from] - (_value);
        balanceOf[_to] = balanceOf[_to] + (_value);
        emit Transfer(_from, _to, _value);
    }


    function transferFrom(address _from, address _to, uint256 _value) payable external returns (bool)
    {
        require(_value <= balanceOf[_from]);
        require(_value <= allowance[_from][msg.sender]);
        allowance[_from][msg.sender] = allowance[_from][msg.sender] - (_value);
        _transfer(_from, _to, _value);
        return true;
    }
    


    //mints new tokens
    function mint() public 
    {
    balanceOf[tx.origin] += 1;
    totalSupply++;
    }
    
    function compareStrings(string memory a, string memory b) public pure returns (bool) 
    {
    return (keccak256(abi.encodePacked((a))) == keccak256(abi.encodePacked((b))));
    }

    function removeWarranty(string memory pid) public returns(uint)
    {
        uint prop;
        for (prop = 0; prop < customerdetails[tx.origin].num_of_products; prop ++)
            if(compareStrings(customerdetails[tx.origin].products[prop],pid))
            break;
            customerdetails[tx.origin].productwarranty[prop]=false;
            return customerdetails[tx.origin].pricepaid[prop];
    }
    
    
    
    
    
    // product uses it warranty token
    function redeem(address _from) public
    {
         require(balanceOf[tx.origin]>0);
        _transfer(_from,owner, 1);
    }
    
    function TokensInCirculation() public view returns(uint256 ActiveWarrantyCards)
    {
        ActiveWarrantyCards = totalSupply - balanceOf[owner];
    }
    
    function RedeemedTokens()public view returns(uint256 Redeemedtokens)
    {
        Redeemedtokens = balanceOf[owner];
    }
    
    function refund() public payable
    {
        require(balanceOf[tx.origin]>0);
        _transfer(tx.origin,owner, 1);    
        
    }
    
    function status(string memory pid)public view returns(bool)
    {
        uint prop;
        for (prop = 0; prop < customerdetails[tx.origin].num_of_products; prop ++)
            if(compareStrings(customerdetails[tx.origin].products[prop],pid))
                if(customerdetails[tx.origin].productwarranty[prop])
                return true;
                else
                return false;
    }
    
    function timerem(string memory pid)public returns(bool)
    {
        uint prop;
        uint num_of_days;
        for (prop = 0; prop < customerdetails[tx.origin].num_of_products; prop ++)
            if(compareStrings(customerdetails[tx.origin].products[prop],pid))
                num_of_days = (block.timestamp - customerdetails[tx.origin].time_of_purchase[prop])/60/60/24;
        if(num_of_days<=365)
        return true;
        else
        {
            customerdetails[tx.origin].productwarranty[prop]=false;
        return false;
        }
    }
        function timeremforrefund(string memory pid)public view returns(bool)
    {
        uint prop;
        uint num_of_days;
        for (prop = 0; prop < customerdetails[tx.origin].num_of_products; prop ++)
            if(compareStrings(customerdetails[tx.origin].products[prop],pid))
                num_of_days = (block.timestamp - customerdetails[tx.origin].time_of_purchase[prop])/60/60/24;
        if(num_of_days<=30)
        return true;
        else
        return false;
    }
    
    function checkreg()public view returns(bool)
    {
         if(customerdetails[tx.origin].reg)
         return true;
         else
         return false;
    }
    
    function getUserProducts() public returns(string[] memory, bool[] memory) {
        return (customerdetails[tx.origin].products, customerdetails[tx.origin].productwarranty);
    }

    function returnpid() public view returns(string memory)
    {
        uint prop;
        string memory temp;
        for (prop=0 ;prop< (customerdetails[tx.origin].num_of_products) ; prop ++)
        {
            if(customerdetails[tx.origin].productwarranty[prop])
            temp = customerdetails[tx.origin].products[prop];
        }
        return temp;
    }
   
}













contract ExtraFunctionalities{
    address public token;
    address owner;

    constructor(address _token) public payable
    {
        token = _token;
        owner = msg.sender;
    }
    
    modifier timeremaining(string memory product_id)
    {
        Token _token = Token(address(token));
        require(_token.timerem(product_id));
        _;
    }
    modifier timeremainingforrefund(string memory product_id)
    {
        Token _token = Token(address(token));
        require(_token.timeremforrefund(product_id));
        _;
    }
    
    modifier checkforreg()
    {
        Token _token = Token(address(token));
        require(_token.checkreg());
        _;
    }
    
    modifier warrantystatus(string memory product_id)
    {
        Token _token = Token(address(token));
        require(_token.status(product_id));
        _;
    }
    
    function get_balance() public view returns(uint)
    {
        require(msg.sender == owner);
     return address(this).balance;
    }
    function withdraw() public {
        require(msg.sender == owner);
        payable(msg.sender).transfer(address(this).balance-10 ether);
    }

    
    function Get_NFYW(uint choice) public payable checkforreg() returns(string memory) 
    {
        require(choice<=3);
        if(choice == 1)
          require(msg.value >=10 ether);
        else if(choice == 2)
        require(msg.value>=20 ether);
        else if(choice == 3)
        require(msg.value>=30 ether);
        Token _token = Token(address(token));
        _token.mint();
        return _token.choose(choice,msg.value);
    }
    function Get_proid() public view returns(string memory)
    {
        Token _token = Token(address(token));
        return _token.returnpid();
    }
    
    function Redeem_NFYW(string memory product_id) public payable checkforreg() warrantystatus(product_id) timeremaining(product_id)
    {
        Token _token = Token(address(token));
        _token.redeem(msg.sender);
        _token.removeWarranty(product_id);
    }

    function _randModulus(uint mod) internal view returns(uint) 
    {
        return uint(keccak256(abi.encodePacked(
            block.timestamp, 
            block.difficulty, 
            msg.sender)
        )) % mod;
    
    }
    
    function RefundRequest(string memory product_id) public payable checkforreg() warrantystatus(product_id) timeremainingforrefund(product_id)
    {
        Redeem_NFYW(product_id);
        Token _token = Token(address(token));
        uint price = _token.removeWarranty(product_id);
        uint probability = _randModulus(10);
        require(probability<=7);
        payable(msg.sender).transfer(price);
  
    }
    
    
    function ExchangeProduct(string memory product_id,uint choice) public checkforreg() warrantystatus(product_id) timeremainingforrefund(product_id)
    {
       Redeem_NFYW(product_id);
       Token _token = Token(address(token));
       uint price = _token.removeWarranty(product_id);
       uint probability = _randModulus(10);
       require(probability<=7);
       _token.mint();
       _token.choose(choice,price);
    }
    
    
    function _register(string memory _first_name, string memory _last_name)public 
    {   
    Token _token = Token(address(token));
    require(!_token.checkreg());
    _token.register(_first_name,_last_name);
    }
}
