const router = require('express').Router();

let User = require('../Models/userShcema');

router.get('/user' , (req, res) => {
    console.log("Getting Users")
    User.find({})
      .then(users => res.json(users))
      .catch(err => res.status(400).json('Error: ' + err));
  });



router.post("/useradd" , (req,res) => {
    console.log("Adding Users")
    let userobj = new User ({
        username : req.body.username
   })
   userobj.save()
    .then(() => {res.json('User added!');console.log("User Added++")})
    .catch(err => {res.status(400).json('Error: ' + err);console.log("Error While Adding")});
})


module.exports = router;






