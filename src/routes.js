import { Router } from 'express';
import multer from 'multer';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import AppointmentController from './app/controllers/AppointmentController';
import ScheduleController from './app/controllers/ScheduleController';
import authMiddleware from './app/middlewares/auth';
import multerConfig from './config/multer';
import NotificationController from './app/controllers/NotificationController';

const router = new Router();
const update = multer(multerConfig);

router.post('/users', UserController.store);
router.post('/sessions', SessionController.store);

// Exige o Token de autenticação a partir daqui
router.use(authMiddleware);
router.put('/users', UserController.update);

router.post('/files', update.single('file'), FileController.store);

router.post('/appointments', AppointmentController.store);
router.get('/appointments', AppointmentController.index);
router.delete('/appointments/:id', AppointmentController.delete);

router.get('/schedules', ScheduleController.index);

router.get('/providers', ProviderController.index);

router.get('/notifications', NotificationController.index);
router.put('/notifications/:id', NotificationController.update);

export default router;
