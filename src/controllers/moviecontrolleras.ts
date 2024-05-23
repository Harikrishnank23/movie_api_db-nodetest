import { Request, Response } from 'express';
import { Movie } from '../models/movie';
export const getMovies = async (req: Request, res: Response): Promise<void> => {
    try {
      const movies = await Movie.find();
      res.status(200).json(movies);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  };
  
  export const getMovieById = async (req: Request, res: Response): Promise<void> => {
    try {
      const movie = await Movie.findById(req.params.id);
      if (movie) {
        res.status(200).json(movie);
      } else {
        res.status(404).json({ message: 'Movie not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error });
    }
  };
  
  export const createMovie = async (req: Request, res: Response): Promise<void> => {
    try {
      const newMovie = new Movie(req.body);
      const savedMovie = await newMovie.save();
      res.status(201).json(savedMovie);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  };
  
  export const updateMovie = async (req: Request, res: Response): Promise<void> => {
    try {
      const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (updatedMovie) {
        res.status(200).json(updatedMovie);
      } else {
        res.status(404).json({ message: 'Movie not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error });
    }
  };
  
  export const deleteMovie = async (req: Request, res: Response): Promise<void> => {
    try {
      const deletedMovie = await Movie.findByIdAndDelete(req.params.id);
      if (deletedMovie) {
        res.status(200).json({ message: 'Movie deleted successfully' });
      } else {
        res.status(404).json({ message: 'Movie not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error});
    }
  };