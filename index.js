const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());


app.post('/flutter',(req,res) => {
  const {message} = req.body;
  console.log('受け取ったメッセージ',message);

  res.json({
    response:`受け取ったよ${message}`
  });
});
