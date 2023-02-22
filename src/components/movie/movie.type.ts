import { Movie } from 'types/movie'

export type MovieCardProps = {
  movie: Movie
  isChecked: boolean
  isLiked: boolean
  isDisliked: boolean
  onLikeMovieClick: () => void
  onDislikeMovieClick: () => void
}
