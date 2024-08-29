import express from 'express';
import bodyParser from 'body-parser';
import multer from 'multer';
import fs from 'fs';


const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads');
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 } 
});

app.post('/api/saveUserData', (req, res) => {
  const userData = req.body;

  if (!userData) {
    return res.status(400).send('Dados do usuário não fornecidos.');
  }

  fs.writeFile('userData.json', JSON.stringify(userData), (err) => {
    if (err) {
      return res.status(500).send('Erro ao salvar dados.');
    }
    res.send('Dados salvos com sucesso.');
  });
});

app.post('/api/uploadPdf', upload.single('pdfFile'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('Nenhum arquivo enviado.');
  }
  res.send('Arquivo PDF carregado com sucesso.');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
