const config = require("../config/auth.config");
require('dotenv').config()
const db = require("../models");
const ABI = db.ABI
const User = db.user;
const Web3 = require('web3');
const web3mat = new Web3(process.env.matic_network_url);

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const { user } = require("../models");

exports.signup = (req, res) => {
  console.log('inside sighnup request')
  const user = new User({
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  });

  user.save((err, user) => {
    if (err) {
      console.log('error for 500')
      res.status(500).send({ 
        status: 500, 
        message: err,
        data: {}
       });
      return;
    }

    res.send({
      status: 200, 
      message: "User was registered successfully!",
      data: {} 
    }
      );

  });
};

exports.mintDomain = async (req, res) => {
  console.log('inside signin controller', req.body);
 try {
    console.log('id', req.userId);

    var id = new require('mongodb').ObjectID('63f5990649e93fa7b2d6b079');//req.params.id
    var query = {_id : id}

    var name =  req.body.name; 
    var websitedata= req.body.websitedata;
    console.log('lower case name', name);
    console.log('type of: ', typeof(name))

    // var userid = new require('mongodb').ObjectID(req.userId);//req.params.id
    // var query = {_id : userid}

    if (JSON.stringify(name).toLowerCase().endsWith(".nft")) {
         name;
      } else {
       name = name + ".nft";
      }

      var userdata =await User.find({email:req.body.email}).limit(1);

        console.log('userdata: ', userdata[0].domains[0].domain);
        
        userdata.forEach(element => {
            element.domains.forEach(childelement => {
                console.log('data of userdata', childelement.domain)
                if(childelement.domain == name){
                    res.status(401).send({ 
                        status: 401, 
                        message: ' domain already registered',
                        data: { 'domain': name }
                       });
                    //   return ;
                    console.log('domain already registered');
                }
            });
            
        });    

    console.log('query id', query);

    var docmnt;

    // const contract_Data = await ABI.findOne(query);


    const data = await ABI.find({_id:id}).limit(1);
  //   console.log('data: ', data[0].ABI);
    var contractABI= JSON.parse(data[0].ABI);
    var from_address= '0x3F6d11Cc5Fbd68F267D35Cfa4Ed765aA501430bD';



    let contract = new web3mat.eth.Contract(contractABI, process.env.contract_address);



    const accountBalance = await web3mat.eth.getBalance(from_address)
    
    console.log('accountBalance: ',accountBalance)

    const gasPrice = await web3mat.eth.getGasPrice();
    // const transactionFee = +gasPrice * +gasLimit;


    const gasLimit = await contract.methods.mint(
        from_address,
        name,
        websitedata
    ).estimateGas({
        from: from_address,
    });
    const transactionFee = +gasPrice * +gasLimit;

  //   contract.methods.transfer(to_address, amount).encodeABI();

    const accountTokenBalance = await contract.methods.balanceOf(from_address).call();
    var doc = contract.methods.mint(from_address, name, websitedata).encodeABI();
    var rawTransaction = { "to": process.env.contract_address, "gas": gasLimit, "data": doc };
    const send = await web3mat.eth.accounts.signTransaction(rawTransaction, process.env.PRIVATE_KEY);

    var hash = undefined;
    const maticTransactionReciept = await web3mat.eth.sendSignedTransaction(
        send.rawTransaction
    ).catch(function (error) {
        console.log(error);
        hash = false
    });



    hash = maticTransactionReciept.transactionHash;

    console.log('hash transactions: ', hash);


    var new_domain =[{
        "domain": name,
        "addresses":{
                    "Ethereum" : '',
                    "Polygon" : '',
                    "Binance": '',
                    "Bitcoin": ''
                }
            }]
           await User.findOneAndUpdate( {email : req.body.email} , {
              $push: { domains: new_domain }
           }).then(() => {
              
              console.log(`New domain saved`)
           }).catch((err) => {
              console.log(err, "errr push trx")
              return err
           })




    res.status(200).send({ 
        status: 200, 
        message: 'New domain minted',
        data: { hash }
       });
      return;


    console.log('accountTokenBalance: ', accountTokenBalance);



    

    // ABI.findOne({_id : id}).exec((err, ContractABI) => {s
    //     if (err) {
    //       console.log('email not found')
    //       res.status(500).send({ 
    //           status: 500, 
    //           message: "Failed! Email not found",
    //           data: {} 
    //       });
    //       conbsole.log('the data for ABI ', ContractABI.ABI);
    //       return;
    //     }
    //       if (ContractABI) {
    //       res.status(400).send({
              
    //           status: 400, 
    //           message: "Domain name already registered",
    //           data: {} 
    //        });
    //       return;
    //     }
    //     });


        // ABI.find(query).limit(1).next(function(err, doc){

        //     if (ContractABI) {
        //         res.status(400).send({
                    
        //             status: 400, 
        //             message: "Domain name already registered",
        //             data: {} 
        //          });
        //          return;
        //         }
        //  })

   //  {"_id": new ObjectId('63f4ad9a1d3a54bcb067551a')}


    
 } catch (error) {
    res.send({
        status: 404, 
        message: error.message,
        data: {} 
      })    
      return;
 }

};