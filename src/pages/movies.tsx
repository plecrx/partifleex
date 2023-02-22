import { Checkbox } from 'components/checkbox/checkbox.component'
import { Header } from 'components/header/header.component'
import {
  Selector,
  MoviesWrapper,
  FilterbarWrapper,
  CategoryTitle,
  CategoryWrapper,
} from 'components/movie/movie.styles'
import { Container } from 'pages/movies.styles'
import React, { useEffect, useMemo, useState } from 'react'
import { CardList } from 'components/cardList/cardList.component'
import { MovieCard } from 'components/movie/movie.component'
import { movies$ } from 'data/movies'
import { Movie } from 'types/movie'
import { mapMoviesOnCategory } from 'utils/mapMoviesOnCategory'

export const Movies = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [movies, setMovies] = useState<Movie[]>([])
  const opportunitiesMap = useMemo(() => mapMoviesOnCategory(movies), [movies])

  useEffect(() => {
    const fetchMovies = async () => {
      await movies$
        .then((data) => {
          setIsLoading(false)
          setMovies(data as Movie[])
        })
        .catch(() => {
          setIsError(true)
        })
    }
    fetchMovies()
  }, [])

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>An error occurred...</span>
  }

  if (!movies) {
    return <span>No movies !</span>
  }

  const renderFilterBar = () => (
    <FilterbarWrapper>
      <Selector>
        <Checkbox isChecked={false} onChange={() => {}} />
        Tout sélectionner
      </Selector>
      <Selector />
    </FilterbarWrapper>
  )

  return (
    <Container>
      <Header title="Ma liste de films" />
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
    </Container>
  )
}
