import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { CardList } from '../components/cardList/cardList.component'
import { MovieCard } from '../components/movie/movie.component'
import { movies$ } from '../data/movies'
import { Movie } from '../types/movie'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  padding: 16px;
`

export const Movies = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [movies, setMovies] = useState<Movie[]>([])

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

  return (
    <Wrapper>
      Ma liste de films
      <CardList title="">
        {movies.map((movie: Movie) => (
          <MovieCard key={`movie-${movie.id}`} movie={movie} />
        ))}
      </CardList>
    </Wrapper>
  )
}
