import { CardList } from 'components/cardList/cardList.component'
import { FilterBar } from 'components/filterbar/filterbar.component'
import { Header } from 'components/header/header.component'
import { MovieCard } from 'components/movie/movie.component'
import { CategoryTitle, CategoryWrapper, MoviesWrapper } from 'components/movie/movie.styles'
import { CenterDiv, Container } from 'pages/movies.styles'
import React, { useEffect, useState } from 'react'
import { Movie } from 'types/movie'
import { mapMoviesOnCategory } from 'utils/helpers/movies/mapMoviesOnCategory'
import { useFeedbacks } from '../features/movies/useFeedbacks'
import { useMovies } from '../features/movies/useMovies'

export const Movies = () => {
  const [categoriesOptions, setCategoriesOptions] = useState<string[]>([])
  const [selectedMovies, setSelectedMovies] = useState<Movie[]>([])
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([])
  const { onDislikeMovie, onLikeMovie, isLiked, isDisliked } = useFeedbacks(setFilteredMovies)
  const {
    // addMovie,
    isError,
    isLoading,
    movies,
    removeMovies,
  } = useMovies()

  const isSelected = (movie: Movie): boolean =>
    !!selectedMovies.find((selectedMovie: Movie) => selectedMovie.id === movie.id)

  const selectMovie = (movie: Movie) => {
    setSelectedMovies((prevState: Movie[]) => [...prevState, movie])
  }

  const unSelectMovie = (movieID: string) => {
    setSelectedMovies((prevState: Movie[]) => prevState.filter((mv) => mv.id !== movieID))
  }

  const updateSelectedMovies = (updatedMovies: Movie[]) => {
    setSelectedMovies(updatedMovies)
  }

  const filterMovies = (filters: string[]) => {
    const moviesList = []
    filters.forEach((filter) => {
      movies.forEach((movie) => {
        if (movie.category === filter) {
          moviesList.push(movie)
        }
      })
    })
    setFilteredMovies(moviesList)
  }

  const handleSelectMovie = (movie: Movie) => {
    if (isSelected(movie)) {
      unSelectMovie(movie.id)
      return
    }
    selectMovie(movie)
  }

  const handleRemoveMovies = () => {
    removeMovies(selectedMovies)
    setFilteredMovies((prevState) =>
      prevState.filter((movie) => selectedMovies.map((selectedMovie) => movie.id !== selectedMovie.id))
    )
    setSelectedMovies([])
  }

  useEffect(() => {
    const categories = Object.entries(mapMoviesOnCategory(movies)).map(([category]) => category)
    setCategoriesOptions(categories)
    setFilteredMovies(movies)
    setSelectedMovies([])
  }, [movies])

  const renderFilterBar = () => (
    <FilterBar
      items={filteredMovies}
      dropdownOptions={categoriesOptions}
      selectedItems={selectedMovies}
      updateSelectedItems={updateSelectedMovies}
      updateFilters={filterMovies}
      removeAction={handleRemoveMovies}
    />
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

    if (!movies.length) {
      return (
        <CenterDiv>
          <span>No movies ! (refresh)</span>
        </CenterDiv>
      )
    }

    return (
      <CardList filterBar={renderFilterBar()}>
        {Object.entries(mapMoviesOnCategory(filteredMovies)).map(([category, categoryMovies]) => (
          <CategoryWrapper key={`category-${category}`}>
            <CategoryTitle>{category}</CategoryTitle>
            <MoviesWrapper>
              {categoryMovies.map((movie: Movie) => (
                <MovieCard
                  key={`movie-${movie.title}-${movie.id}`}
                  movie={movie}
                  isChecked={isSelected(movie)}
                  isLiked={isLiked(movie)}
                  isDisliked={isDisliked(movie)}
                  onLikeMovieClick={() => onLikeMovie(movie)}
                  onDislikeMovieClick={() => onDislikeMovie(movie)}
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
