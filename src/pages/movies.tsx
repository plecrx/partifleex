import { Checkbox } from 'components/checkbox/checkbox.component'
import { Header } from 'components/header/header.component'
import {
  Selector,
  MoviesWrapper,
  FilterbarWrapper,
  CategoryTitle,
  CategoryWrapper,
} from 'components/movie/movie.styles'
import { CenterDiv, Container } from 'pages/movies.styles'
import React, { useMemo } from 'react'
import { CardList } from 'components/cardList/cardList.component'
import { MovieCard } from 'components/movie/movie.component'
import { Movie } from 'types/movie'
import { mapMoviesOnCategory } from 'utils/mapMoviesOnCategory'
import { useMovies } from '../features/useMovies'

export const Movies = () => {
  const { movies, isLoading, isError } = useMovies()
  const opportunitiesMap = useMemo(() => mapMoviesOnCategory(movies), [movies])

  const renderFilterBar = () => (
    <FilterbarWrapper>
      <Selector>
        <Checkbox isChecked={false} onChange={() => {}} />
        Tout sélectionner
      </Selector>
      <Selector />
    </FilterbarWrapper>
  )

  const renderContent = () => {
    if (isLoading) {
      return (
        <CenterDiv>
          <span>Loading...</span>
        </CenterDiv>
      )
    }

    if (isError) {
      return (
        <CenterDiv>
          <span>An error occurred...</span>
        </CenterDiv>
      )
    }

    if (!movies) {
      return (
        <CenterDiv>
          <span>No movies !</span>
        </CenterDiv>
      )
    }

    return (
      <CardList filterBar={renderFilterBar()}>
        {Object.entries(opportunitiesMap).map(([category, categoryMovies]) => (
          <CategoryWrapper>
            <CategoryTitle>{category}</CategoryTitle>
            <MoviesWrapper>
              {categoryMovies.map((movie: Movie) => (
                <MovieCard
                  key={`movie-${movie.id}`}
                  movie={movie}
                  isChecked={false}
                  likeMovie={() => {}}
                  dislikeMovie={() => {}}
                  removeMovie={() => {}}
                />
              ))}
            </MoviesWrapper>
          </CategoryWrapper>
        ))}
      </CardList>
    )
  }

  return (
    <Container>
      <Header title="Ma liste de films" />
      {renderContent()}
    </Container>
  )
}
