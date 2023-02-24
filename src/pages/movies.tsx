import { CardList } from 'components/cardList/cardList.component'
import { FilterBar } from 'components/filterbar/filterbar.component'
import { Header } from 'components/header/header.component'
import { MovieCard } from 'components/movie/movie.component'
import { CategoryTitle, CategoryWrapper, MoviesWrapper } from 'components/movie/movie.styles'
import { CenterDiv, Container } from 'pages/movies.styles'
import React, { useEffect, useMemo, useState } from 'react'
import { Movie, MovieMap } from 'types/movie'
import { getCategoriesFromMoviesMap } from 'utils/helpers/movies/getCategoriesFromMoviesMap'
import { mapMoviesOnCategory } from 'utils/helpers/movies/mapMoviesOnCategory'
import { useMovies } from '../features/movies/useMovies'

export const Movies = () => {
  const {
    // addMovie,
    onDislikeMovie,
    onLikeMovie,
    isDisliked,
    isError,
    isLiked,
    isLoading,
    movies,
    removeMovies,
  } = useMovies()
  const initialMoviesMap: MovieMap = useMemo(() => mapMoviesOnCategory(movies), [movies])
  const [filteredMoviesMap, setFilteredMoviesMap] = useState<MovieMap>({})
  const [categoriesFilter, setCategoriesFilter] = useState<string[]>([])
  const [selectedMovies, setSelectedMovies] = useState<Movie[]>([])

  const isSelected = (movie: Movie): boolean =>
    !!selectedMovies.find((selectedMovie: Movie) => selectedMovie.id === movie.id)

  const selectMovie = (movie: Movie) => {
    setSelectedMovies((prevState: Movie[]) => [...prevState, movie])
  }

  const unSelectMovie = (movieID: string) => {
    setSelectedMovies((prevState: Movie[]) => prevState.filter((mv) => mv.id !== movieID))
  }

  /*  const mapCategoriesOnFilteredMoviesMap = (categoryFilters: string[], filteredMap: MovieMap, initialMap: MovieMap) => {
    const newMoviesMap: MovieMap = {}
    categoryFilters.forEach((categoryFilter) => {
      newMoviesMap[categoryFilter] =
        categoryFilter in filteredMap ? filteredMap[categoryFilter] : initialMap[categoryFilter]
    })
    return newMoviesMap
  } */

  const updateSelectedMovies = (updatedMovies: Movie[]) => {
    setSelectedMovies(updatedMovies)
  }

  const updateCategoryFilters = (filters: string[]) => {
    setCategoriesFilter(filters)
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
    setSelectedMovies([])
  }

  useEffect(() => {
    const categories = getCategoriesFromMoviesMap(initialMoviesMap)
    setCategoriesFilter(categories)
    setFilteredMoviesMap(initialMoviesMap)
  }, [initialMoviesMap])

  const renderFilterBar = () => (
    <FilterBar
      dropdownOptions={categoriesFilter}
      items={movies}
      selectedItems={selectedMovies}
      removeAction={handleRemoveMovies}
      showRemoveButton={!!selectedMovies.length}
      updateSelectedItems={updateSelectedMovies}
      updateFilters={updateCategoryFilters}
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

    if (!Object.keys(filteredMoviesMap).length) {
      return (
        <CenterDiv>
          <span>No movies ! (refresh)</span>
        </CenterDiv>
      )
    }

    return (
      <CardList filterBar={renderFilterBar()}>
        {Object.entries(filteredMoviesMap).map(([category, categoryMovies]) => (
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
