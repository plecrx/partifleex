import { Movie } from 'types/movie'

export type MovieCardProps = {
  isChecked: boolean
  isDisliked: boolean
  isLiked: boolean
  movie: Movie
  onDislikeClick: () => void
  onLikeClick: () => void
  onSelect?: () => void
}
