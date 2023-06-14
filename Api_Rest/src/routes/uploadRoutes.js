import { Router } from 'express';
import multer from 'multer';

import uploadController from '../controllers/UploadController';
import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig);

const router = new Router();

router.post('/', upload.single('arquivo'), uploadController.store);

export default router;
