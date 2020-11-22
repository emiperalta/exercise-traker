const { Router } = require('express');
const router = Router();
const exerciseController = require('../controllers/exercise.controller');

router.get('/', exerciseController.getExercises);

router.post('/add', exerciseController.addExercise);

router.get('/:id', exerciseController.getExerciseById);

router.patch('/update/:id', exerciseController.updateExercise);

router.delete('/:id', exerciseController.deleteExercise);

module.exports = router;
