import { Router } from 'express';
import multer from 'multer';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import authMiddleware from './app/middlewares/auth';
import multerConfig from './config/multer';

const router = new Router();
const update = multer(multerConfig);

router.post('/users', UserController.store);
router.post('/sessions', SessionController.store);

// Exige o Token de autenticação a partir daqui
router.use(authMiddleware);
router.put('/users', UserController.update);

router.post('/files', update.single('file'), FileController.store);

export default router;
