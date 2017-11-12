const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');

router.post('/addUser', function (req, res) {
  console.log(req)
  var user = new User({ name: req.body.name, phone:req.body.phone, address: req.body.locationAddress, urgent:req.body.urgent, supply:req.body.supply, longitude:req.body.longitude, latitude:req.body.latitude });
  user.save()
  .then(user => {
    res.json(user);
  })
  .catch(err => {
    res.status(400).send("unable to save to database");
  });
})

router.get('/getUser', async (req, res) => {
  const user = await User.find().sort({$natural:-1});
  console.log(user)
  res.json(user)
})

module.exports = router;