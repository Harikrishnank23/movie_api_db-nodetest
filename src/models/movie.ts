import { Schema, model, Document } from 'mongoose';

  export interface IMovie extends Document {
    title: string;
    director: string;
    releaseDate: Date;
    rating: number;
  }

const movieSchema = new Schema<IMovie>({
  title: { type: String, required: true },
  director: { type: String, required: true },
  releaseDate: { type: Date, required: true },
  rating: { type: Number, required: true }
});

export const Movie = model<IMovie>('Movie', movieSchema);