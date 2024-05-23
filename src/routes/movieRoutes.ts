import { Router } from 'express';
import { getMovies, getMovieById, createMovie, updateMovie, deleteMovie } from '../controllers/moviecontrolleras';

const router: Router = Router();

router.get('/movies', getMovies);
router.get('/movies/:id', getMovieById);
router.post('/movies', createMovie);
router.put('/movies/:id', updateMovie);
router.delete('/movies/:id', deleteMovie);

export default router;