import { Movie } from 'types/movie'

export type MovieCardProps = {
  movie: Movie
  isChecked: boolean
  likeMovie: () => void
  dislikeMovie: () => void
  removeMovie: () => void
}
