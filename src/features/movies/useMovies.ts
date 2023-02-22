import { movies$ } from 'data/movies'
import { useEffect, useMemo, useState } from 'react'
import { Movie } from 'types/movie'
import { mapMoviesOnCategory } from 'utils/helpers/movies/mapMoviesOnCategory'

export const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isError, setIsError] = useState<boolean>(false)
  const moviesMap = useMemo(() => mapMoviesOnCategory(movies), [movies])

  const [selectedMovies, setSelectedMovies] = useState([])
  const [likedMovies, setLikedMovies] = useState([])
  const [dislikedMovies, setDislikedMovies] = useState([])

  const isLiked = (movie: Movie): boolean => likedMovies.find((likedMovie) => likedMovie.id === movie.id)
  const isDisliked = (movie: Movie): boolean => dislikedMovies.find((dislikedMovie) => dislikedMovie.id === movie.id)
  const isSelected = (movie: Movie): boolean => selectedMovies.find((selectedMovie) => selectedMovie.id === movie.id)

  const handleLikeMovieClick = (movie: Movie) => {
    if (isLiked(movie)) {
      setLikedMovies((prevState) => prevState.filter((mv) => mv.id !== movie.id))
      setMovies((prevState) =>
        prevState.map((obj) => {
          if (obj.id === movie.id) {
            const tmpObj = { ...obj }
            tmpObj.likes -= 1
            return tmpObj
          }
          return obj
        })
      )
      return
    }
    setLikedMovies((prevState) => [...prevState, movie])
    setMovies((prevState) =>
      prevState.map((obj) => {
        if (obj.id === movie.id) {
          const tmpObj = { ...obj }
          tmpObj.likes += 1
          return tmpObj
        }
        return obj
      })
    )
  }

  const handleDislikeMovieClick = (movie: Movie) => {
    if (isDisliked(movie)) {
      setDislikedMovies((prevState) => prevState.filter((mv) => mv.id !== movie.id))
      setMovies((prevState) =>
        prevState.map((obj) => {
          if (obj.id === movie.id) {
            const tmpObj = { ...obj }
            tmpObj.dislikes -= 1
            return tmpObj
          }
          return obj
        })
      )
      return
    }
    setDislikedMovies((prevState) => [...prevState, movie])
    setMovies((prevState) =>
      prevState.map((obj) => {
        if (obj.id === movie.id) {
          const tmpObj = { ...obj }
          tmpObj.dislikes += 1
          return tmpObj
        }
        return obj
      })
    )
  }

  const handleSelectAllChange = () => {
    if (selectedMovies.length !== 0) {
      setSelectedMovies([])
      return
    }
    setSelectedMovies(movies)
  }

  const addMovie = (movie: Movie) => {
    setMovies((prevState) => [...prevState, movie])
  }

  const removeMovie = (movie: Movie) => {
    setMovies((prevState) => prevState.filter((mv) => mv.id !== movie.id))
  }

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
    addMovie,
    removeMovie,
    handleLikeMovieClick,
    handleDislikeMovieClick,
    isLiked,
    isDisliked,
    selectedMovies,
    handleSelectAllChange,
    isSelected,
  }
}