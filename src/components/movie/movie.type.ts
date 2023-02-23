import { Movie } from 'types/movie'

export type MovieCardProps = {
  isChecked: boolean
  isDisliked: boolean
  isLiked: boolean
  movie: Movie
  onDislikeMovieClick: () => void
  onLikeMovieClick: () => void
  onMovieSelect?: () => void
}
