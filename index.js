const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('🌐 Railway Node.js サーバーが動いてるよ！');
});
// POST /text エンドポイント
app.post('/texts', (req, res) => {
  const { message } = req.body;
  console.log('受け取ったメッセージ:', message);
  
  res.json({
    response: `受け取ったよ: ${message}`
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
