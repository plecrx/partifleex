import { movies$ } from 'data/movies'
import { useEffect, useMemo, useState } from 'react'
import { Movie } from 'types/movie'
import { mapMoviesOnCategory } from 'utils/helpers/movies/mapMoviesOnCategory'

export const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isError, setIsError] = useState<boolean>(false)
  const moviesMap = useMemo(() => mapMoviesOnCategory(movies), [movies])
  const initialState = Object.keys(moviesMap).map((category) => ({ category, checked: false }))

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

  return {
    movies: moviesMap,
    isLoading,
    isError,
  }
}
