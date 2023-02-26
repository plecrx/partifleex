import { movies$ } from 'data/movies'
import { useEffect, useState } from 'react'
import { Movie } from 'types/movie'

export const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isError, setIsError] = useState<boolean>(false)

  const addMovie = (movieToCreate: Movie) => {
    setMovies((prevState: Movie[]) => [...prevState, movieToCreate])
  }

  const updateMovie = (updatedMovie: Movie) => {
    setMovies((prevState: Movie[]) =>
      prevState.map((movie) => {
        if (movie.id === updatedMovie.id) {
          return updatedMovie
        }
        return movie
      })
    )
  }

  const removeMovies = (moviesToRemove: Movie[]) => {
    setMovies((prevState) =>
      prevState.filter((movie) => !moviesToRemove.find((movieToRemove) => movieToRemove.id === movie.id))
    )
  }

  useEffect(() => {
    const fetchMovies = async () => {
      await movies$
        .then((data) => {
          setMovies(data as Movie[])
          setIsLoading(false)
        })
        .catch(() => {
          setIsLoading(false)
          setIsError(true)
        })
    }
    fetchMovies()
  }, [])

  return {
    addMovie,
    isError,
    isLoading,
    movies,
    removeMovies,
    updateMovie,
  }
}
