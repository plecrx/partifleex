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
import React, { useEffect, useState } from 'react'
import { CardList } from 'components/cardList/cardList.component'
import { MovieCard } from 'components/movie/movie.component'
import { Movie } from 'types/movie'
import { useMovies } from '../features/movies/useMovies'

export const Movies = () => {
  const [selectAllChecked, setSelectAllChecked] = useState(false)
  const {
    handleLikeMovieClick,
    handleDislikeMovieClick,
    isLiked,
    isDisliked,
    isSelected,
    selectedMovies,
    handleSelectAllChange,
    handleSelectMovie,
    movies,
    moviesCount,
    isLoading,
    isError,
  } = useMovies()

  useEffect(() => {
    setSelectAllChecked(selectedMovies.length === moviesCount)
  }, [handleSelectMovie, moviesCount, selectedMovies])

  const renderFilterBar = () => (
    <FilterbarWrapper>
      <Selector>
        <Checkbox isChecked={selectAllChecked} onChange={handleSelectAllChange} />
        Tout sélectionner
      </Selector>
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
        {Object.entries(movies).map(([category, categoryMovies]) => (
          <CategoryWrapper key={`category-${category}`}>
            <CategoryTitle>{category}</CategoryTitle>
            <MoviesWrapper>
              {categoryMovies.map((movie: Movie) => (
                <MovieCard
                  key={`category-${category}-${movie.title}-${Math.random()}`}
                  movie={movie}
                  isChecked={isSelected(movie)}
                  isLiked={isLiked(movie)}
                  isDisliked={isDisliked(movie)}
                  onLikeMovieClick={() => handleLikeMovieClick(movie)}
                  onDislikeMovieClick={() => handleDislikeMovieClick(movie)}
                  onMovieSelect={() => handleSelectMovie(movie)}
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
