import { Movie } from 'types/movie'

export type FeedbackProps = {
  movie: Movie
  onUpdateFeedback: (feedback: Partial<Movie>) => void
}

export enum FeedbackColor {
  LIKED = 'green',
  DISLIKED = 'red',
}
