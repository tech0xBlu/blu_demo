const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const Role = db.role;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.add_domain = async (req, res) => {
  console.log('inside sighnup request')
  try{
    console.log('id', req.userId);

    var id = new require('mongodb').ObjectID(req.userId);//req.params.id
    var query = {_id : id}

    var docmnt;

    var Users = await User.findOne({_id:id }, { _id: 1 });


    console.log('outside the document: ', Users);

    var new_domain =[{
      "domain": req.body.domain,
      "addresses":{
                  "Ethereum" : 'dfgjhdkfg345873',
                  "Polygon" : 'dfgjhdkfg345873',
                  "Binance": 'dfgjhdkfg345873',
                  "Bitcoin": 'dfgjhdkfg345873'
              }
          }]
         await User.findOneAndUpdate( {_id : id} , {
            $push: { domains: new_domain }
         }).then(() => {
            
            console.log(`New domain saved`)
         }).catch((err) => {
            console.log(err, "errr push trx")
            return err
         })

     var Users = await User.findOne({_id:id }, { _id: 1 });


     console.log('outside the document: ', Users);

    console.log('data id: ', docmnt);


//     User.findOneAndUpdate( Users , {
//       $push: { domains: new_domain }
//    }).then(() => {
//       console.log(`new domain added`)
//    }).catch((err) => {
//       console.log(err, "errr push trx")
//    })
// }
    






    //  await User.updateOne({_id:new require('mongodb').ObjectID(req.userId),'domains.domain': "suryapratap.in"}, {
    //       $set: {"domains.$.addresses.BTC": "3894538475hjkdg"}
    //      },
    //     {   
    //             //  arrayFilters: [{  "el.domain": "suryapratap.in"  }],
    //              new: true
    //           }, function(err,doc) {
    //       if (err) {
    //           console.log ('error: ', err) 
    //           throw err; }
    //       else { console.log("Updated"); }
    //     });  
     

 

     


    //   User.findOne({
    //   email: 'suryapratap.in@gmail.com'
    // }).exec((err, user) => {
    //   if (err) {
    //     console.log('email not found')
    //     res.status(500).send({ 
    //         status: 500, 
    //         message: "Failed! Email not found",
    //         data: {} 
    //     });
    //     return;
    //   }

    //   if (user) {
    //     res.status(400).send({
    //         status: 400, 
    //         message: "Failed! Username is already in use!",
    //         data: {} 
    //      });
    //     return;
    //   }
    //   next();

    // });
    // User.findOneAndUpdate({
    //     _id: req.userId
    //   }).exec((err, user) => {
    //     if (err) {
    //       res.status(500).send({ 
    //         status: 500, 
    //         message: err,
    //         data: {}
    //        });
    //       return;
    //     }
    // });


    // var data= await User.findOneAndUpdate(query,  {
    //     $set: {"domains.$[el].addresses.Ethereum": "sdfgsdfgsdfgsdg"}
    //    },
    //   { 
    //            arrayFilters: [{  "el.domain": "suryapratap.in"  }],
    //            new: true
    //         } ,
    // {upsert: true}, function(err,doc) {
    //     if (err) {
    //         console.log ('error: ', err) 
    //         throw err; }
    //     else { console.log("Updated"); }
    //   });  


    //   patients.findOneAndUpdate(
    //     {_id: "5cb939a3ba1d7d693846136c"},
    //     {$set: {"myArray.$[el].value": 424214 } },
    //     { 
    //       arrayFilters: [{ "el.treatment": "beauty" }],
    //       new: true
    //     }
    //   )
      

    

    // var Users = Users._id;

    console.log('users data', Users);

 


    //   myCollection.findOneAndUpdate({"_id": docId, "steps.name": "foo"},
    // {$set: {"steps.$.state": "P"}})

      console.log ('id after findoneandupdate: ', id);

  //  req.body.email='suryapratap.in@gmail.com'

    // var user= User.findOne({
    //     email: req.body.email
    //   })
  
    // console.log ('user data: ', user)
   






    



       
//         if (user) {
//           res.status(400).send({
              
//               status: 400, 
//               message: "Failed! Username is already in use!",
//               data: {} 
//            });
//           return;
//         }


//         return 0;
//     });


    


}catch(error){
    return res.status(409).send({ message: error});
}
};

exports.signin = (req, res) => {
  console.log('inside signin controller', req.body);
    User.findOne({
        email: req.body.email
      }).exec((err, user) => {
        if (err) {
          res.status(500).send({ 
            status: 500, 
            message: err,
            data: {}
           });
          return;
        }

      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
        status: 401, 
        message: "Invalid Password!",
        data: {accessToken: null}
          
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

  
      res.status(200).send({
        status: 200, 
        message: "Invalid Password!",
        data: {accessToken: token,
          id: user._id,
        email: user.email
        }

        
      });
    });
};