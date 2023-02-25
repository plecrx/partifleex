import { TrashIcon } from '@heroicons/react/20/solid'
import { Button } from 'components/button/button.component'
import { ButtonVariant } from 'components/button/button.types'
import { Filterbar } from 'components/filterbar/filterbar.component'
import { Header } from 'components/header/header.component'
import { PageLayout } from 'layouts/page.layout'
import { MovieCard } from 'components/movie/movie.component'
import { CategoryTitle, CategoryWrapper, MoviesWrapper } from 'components/movie/movie.styles'
import { CardlistContainer, CenterDiv } from 'pages/movies.styles'
import React, { useEffect, useState } from 'react'
import { Movie } from 'types/movie'
import { mapMoviesOnCategory } from 'utils/helpers/movies/mapMoviesOnCategory'
import { BodyLayout } from '../layouts/body.layout'
import { useFeedbacks } from '../features/movies/useFeedbacks'
import { useMovies } from '../features/movies/useMovies'

export const Movies = () => {
  const [categoriesOptions, setCategoriesOptions] = useState<string[]>([])
  const [selectedMovies, setSelectedMovies] = useState<Movie[]>([])
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([])
  const { isError, isLoading, movies, removeMovies } = useMovies()
  const { onDislikeMovie, onLikeMovie, isLiked, isDisliked } = useFeedbacks(setFilteredMovies)

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
      <>
        <Filterbar
          dropdownOptions={categoriesOptions}
          isSelectedAllChecked={selectedMovies.length === filteredMovies.length && selectedMovies.length !== 0}
          onSelectedAllChange={() =>
            updateSelectedMovies(selectedMovies.length === filteredMovies.length ? [] : filteredMovies)
          }
          onSelectionChange={filterMovies}
          actions={
            !!selectedMovies.length && (
              <Button variant={ButtonVariant.RED} onClick={handleRemoveMovies}>
                <TrashIcon width={16} />
                Supprimer
              </Button>
            )
          }
        />
        <CardlistContainer>
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
        </CardlistContainer>
      </>
    )
  }

  return (
    <PageLayout>
      <Header title="Ma liste de films" />
      <BodyLayout>{renderContent()}</BodyLayout>
    </PageLayout>
  )
}
