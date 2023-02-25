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
  const [categoriesOptions, setCategoriesOptions] = useState<string[]>([])
  const [selectedMovies, setSelectedMovies] = useState<Movie[]>([])
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([])
  const { isError, isLoading, movies, removeMovies } = useMovies()
  const { isLiked, isDisliked, onLikeMovie, onDislikeMovie } = useFeedbacks(setFilteredMovies)

  const isSelected = (movie: Movie): boolean =>
    !!selectedMovies.find((selectedMovie: Movie) => selectedMovie.id === movie.id)

  const selectMovie = (movie: Movie) => {
    setSelectedMovies((prevState: Movie[]) => [...prevState, movie])
  }

  const unSelectMovie = (movieID: string) => {
    setSelectedMovies((prevState: Movie[]) => prevState.filter((mv) => mv.id !== movieID))
  }

  const handleSelectMovie = (movie: Movie) => {
    if (isSelected(movie)) {
      unSelectMovie(movie.id)
      return
    }
    selectMovie(movie)
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
        <Container>
          {Object.entries(mapMoviesOnCategory(filteredMovies)).map(([category, categoryMovies]) => (
            <MoviesCardList
              category={category}
              categoryMovies={categoryMovies}
              isSelected={isSelected}
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
