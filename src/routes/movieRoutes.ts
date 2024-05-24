import { Router } from 'express';
import { getMovies, getMovieById, createMovie, updateMovie, deleteMovie } from '../controllers/moviecontrolleras';
import { protect } from '../middleware/Authmiddle';

const router: Router = Router();

// router.get('/movies', getMovies);
// router.get('/movies/:id', getMovieById);
// router.post('/movies', createMovie);
// router.put('/movies/:id', updateMovie);
// router.delete('/movies/:id', deleteMovie);
router.route('/')
  .get( getMovies)
  .post(protect, createMovie);

router.route('/:id')
  .get(protect, getMovieById)
  .put(protect, updateMovie)
  .delete(protect, deleteMovie);

export default router;