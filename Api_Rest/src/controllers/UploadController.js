import multer from 'multer';

import multerConfig from '../config/multerConfig';
import Upload from '../models/Upload';

const upload = multer(multerConfig).single('arquivo');

class UploadController {
  store(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ errors: [err.code] });
      }

      const { originalname, filename } = req.file;
      const { aluno_id } = req.body;

      const foto = await Upload.create({ originalname, filename, aluno_id });

      return res.json(foto);
    });
  }
}

export default new UploadController();
