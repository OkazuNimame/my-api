const express = require('express');
const multer = require('multer');
const cors = require('cors');
const cloudinary = require('./cloudinary');
const fs = require('fs');

const app = express();
app.use(cors());

const upload = multer({ dest: 'uploads/' }); // 一時保存フォルダ

app.post('/flutter',(req,res) => {
  const {message} = req.body;
  console.log('受け取ったメッセージ',message);

  res.json({
    response:`受け取ったよ${message}`
  });
});

app.post('/upload', upload.single('image'), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'flutter_uploads', // Cloudinary内のフォルダ
    });

    fs.unlinkSync(req.file.path); // 一時ファイル削除（不要なら省略OK）

    res.json({ url: result.secure_url }); // Flutterに画像URL返す
  } catch (err) {
    console.error('Upload error:', err);
    res.status(500).json({ error: 'Upload failed' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
