import studentController from '../controllers/studentController.js';

import express, { json } from 'express';
var router = express.Router();


router.route('/:search').get(studentController.getStudentsByQuerystring);

router.route('/').get(studentController.getStudents);
router.route('/:id').get(studentController.StudentById);
router.route('/').post(express.json(), studentController.createStudent);
//router.route('/').post(express.json(), studentController.updateStudentById);
router.route('/:updateStudentById/:id').put(express.json(), studentController.updateStudentById);
router.route('/:id').delete(express.json(), studentController.deleteStudentById)


export default router;
