const express = require('express')
const app = express()

app.all('/', (req, res) => {
    console.log("Just got a request /!")
    res.send('Simple api - copyright @lehuyhuan!')
})

app.get('/about', function (req, res) {
	console.log("Just got a request /about!")
	res.send("Simple api - copyright @lehuyhuan")
})

app.get('/sum', function (req, res) {
  var nums= req.query.birthday.split('');
  var sum=0;
  for (var i=0;i<nums.length;i++) {
        sum+=parseInt(nums[i]);
  }
  console.log("TOTAL: " + sum)
  res.send(sum.toString());
})

app.listen(process.env.PORT || 3000)