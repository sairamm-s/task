const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const userRouter = require('./routes/userRouter');
const multer = require('multer');
const fileUpload = require('express-fileupload');
const articlesRouter = require('./routes/articles');

const port = 8080;
app.use(cors());

app.use(express.json());
app.use(fileUpload());
app.use('/users', userRouter);
app.use('/profile', articlesRouter);

//file uplaod
app.post('/upload', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }

  const file = req.files.file;

  file.mv(`${__dirname}/client/public/uploads/${file.name}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `public/uploads/${file.name}` });
  });
});

mongoose.connect(
  'mongodb+srv://sairamm:sairamm04@auth.jnqpd.mongodb.net/mern_auth?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
);
const db = mongoose.connection;
db.once('open', () => {
  console.log('Connected to mongoDb');
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
