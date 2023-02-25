import { CardList } from 'components/cardlist/cardList.component'
import { MoviesCardListProps } from 'components/movieslist/moviesList.types'
import { MovieCard } from 'components/movie'
import React, { FC } from 'react'
import { Movie } from 'types/movie'

import { MoviesWrapper } from './moviesList.styles'

export const MoviesCardList: FC<MoviesCardListProps> = ({
  category,
  categoryMovies,
  isSelected,
  isLiked,
  isDisliked,
  onLikeMovie,
  onDislikeMovie,
  onSelectMovie,
}) => (
  <CardList title={category}>
    <MoviesWrapper>
      {categoryMovies.map((movie: Movie) => (
        <MovieCard
          key={`movie-${movie.title}-${movie.id}`}
          movie={movie}
          isChecked={isSelected(movie)}
          isLiked={isLiked(movie)}
          isDisliked={isDisliked(movie)}
          onLikeClick={() => onLikeMovie(movie)}
          onDislikeClick={() => onDislikeMovie(movie)}
          onSelect={() => onSelectMovie(movie)}
        />
      ))}
    </MoviesWrapper>
  </CardList>
)
