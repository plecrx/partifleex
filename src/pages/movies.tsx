import { MoviesCardList } from 'components/movieslist/moviesList.component'
import React, { useEffect, useState } from 'react'
import { TrashIcon } from '@heroicons/react/20/solid'
import { Button, ButtonVariant } from 'components/button'
import { Filterbar } from 'components/filterbar'
import { Header } from 'components/header'
import { PageLayout } from 'layouts'
import { Movie } from 'types/movie'
import { mapMoviesOnCategory } from 'utils/helpers/movies/mapMoviesOnCategory'
import { BodyLayout } from 'layouts/body.layout'
import { useFeedbacks, useMovies } from 'features/movies'

import { Container, CenterDiv } from './movies.styles'

export const Movies = () => {
  const [selectedMovies, setSelectedMovies] = useState<Movie[]>([])
  const [displayedMovies, setDisplayedMovies] = useState<Movie[]>([])
  const [categoriesOptions, setCategoriesOptions] = useState<string[]>([])
  const { isError, isLoading, movies, removeMovies } = useMovies()
  const { isLiked, isDisliked, onLikeMovie, onDislikeMovie } = useFeedbacks(setDisplayedMovies)

  const isAllMoviesSelected: boolean = selectedMovies.length === displayedMovies.length && selectedMovies.length !== 0

  const isAllMoviesUnselected = !selectedMovies.length

  const isMovieSelected = (movie: Movie): boolean =>
    !!selectedMovies.find((selectedMovie: Movie) => selectedMovie.id === movie.id)

  const resetSelectedMovies = () => {
    setSelectedMovies([])
  }

  const selectMovie = (movie: Movie) => {
    setSelectedMovies((prevState: Movie[]) => [...prevState, movie])
  }

  const unSelectMovie = (movieID: string) => {
    setSelectedMovies((prevState: Movie[]) => prevState.filter((mv) => mv.id !== movieID))
  }

  const handleSelectMovie = (movie: Movie) => {
    if (isMovieSelected(movie)) {
      unSelectMovie(movie.id)
      return
    }
    selectMovie(movie)
  }

  const handleSelectAllToggle = () => {
    if (isAllMoviesSelected) {
      resetSelectedMovies()
      return
    }
    setSelectedMovies(displayedMovies)
  }

  const filterMoviesOnCategory = (categoryFilters: string[]) => {
    const moviesList = []
    categoryFilters.forEach((categoryFilter) => {
      movies.forEach((movie) => {
        if (categoryFilter === movie.category) {
          moviesList.push(movie)
        }
      })
    })
    setDisplayedMovies(moviesList)
  }

  const onRemoveButtonClick = () => {
    setDisplayedMovies((prevState) =>
      prevState.filter((displayedMovie) =>
        selectedMovies.map((selectedMovie) => displayedMovie.id !== selectedMovie.id)
      )
    )

    removeMovies(selectedMovies)
    resetSelectedMovies()
  }

  useEffect(() => {
    const categories = Object.entries(mapMoviesOnCategory(movies)).map(([category]) => category)
    setCategoriesOptions(categories)
    setDisplayedMovies(movies)
    resetSelectedMovies()
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
          <span>No movies !</span>
        </CenterDiv>
      )
    }

    return (
      <>
        <Filterbar
          dropdownOptions={categoriesOptions}
          isSelectedAllChecked={isAllMoviesSelected}
          onSelectedAllChange={handleSelectAllToggle}
          onSelectionChange={filterMoviesOnCategory}
          actions={
            !isAllMoviesUnselected && (
              <Button variant={ButtonVariant.RED} onClick={onRemoveButtonClick}>
                <TrashIcon width={16} />
                Supprimer
              </Button>
            )
          }
        />
        <Container>
          {Object.entries(mapMoviesOnCategory(displayedMovies)).map(([category, categoryMovies]) => (
            <MoviesCardList
              category={category}
              categoryMovies={categoryMovies}
              isSelected={isMovieSelected}
              isLiked={isLiked}
              isDisliked={isDisliked}
              onLikeMovie={onLikeMovie}
              onDislikeMovie={onDislikeMovie}
              onSelectMovie={handleSelectMovie}
            />
          ))}
        </Container>
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
