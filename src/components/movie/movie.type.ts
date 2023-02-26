import { Movie } from 'types/movie'

export type MovieCardProps = {
  isChecked: boolean
  movie: Movie
  onMovieSelect?: (movie: Movie) => void
  onMovieUpdate?: (movie: Movie) => void
}
