import { Router } from 'express';
import StudentController from '../controllers/studentcontroller';
const routes = Router();
routes.get('/', StudentController.getAllStudents);
routes.get('/:id', StudentController.getSingleStudent);
export default routes;