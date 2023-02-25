import { Movie } from 'types/movie'

export type MoviesCardListProps = {
  category: string
  categoryMovies: Movie[]
  isSelected: (movie: Movie) => boolean
  isLiked: (movie: Movie) => boolean
  isDisliked: (movie: Movie) => boolean
  onLikeMovie: (movie: Movie) => void
  onDislikeMovie: (movie: Movie) => void
  onSelectMovie: (movie: Movie) => void
}
