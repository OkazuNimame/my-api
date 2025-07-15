const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json()); // ★←これが重要！

app.get('/', (req, res) => {
  res.send('Hello!!');
});

app.post('/flutter', (req, res) => {
  const { message } = req.body;
  console.log('受け取ったメッセージ', message);

  res.json({
    response: `受け取ったよ ${message}`,
  });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
