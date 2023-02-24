import { movies$ } from 'data/movies'
import { useEffect, useMemo, useState } from 'react'
import { Movie } from 'types/movie'

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isError, setIsError] = useState<boolean>(false)
  const [movies, setMovies] = useState<Movie[]>([])
  const moviesCount: number = useMemo(() => movies.length, [movies])
  const [likedMovies, setLikedMovies] = useState<Movie[]>([])
  const [dislikedMovies, setDislikedMovies] = useState<Movie[]>([])

  const isLiked = (movie: Movie): boolean => !!likedMovies.find((likedMovie: Movie) => likedMovie.id === movie.id)
  const isDisliked = (movie: Movie): boolean =>
    !!dislikedMovies.find((dislikedMovie: Movie) => dislikedMovie.id === movie.id)

  const addItemToList = (fn: (prevState) => void, item: Movie) => {
    fn((prevState: Movie[]) => [...prevState, item])
  }

  const removeItemFromList = (fn: (prevState) => void, itemID: string) => {
    fn((prevState: Movie[]) => prevState.filter((mv) => mv.id !== itemID))
  }

  const incrementValue = (movie: Movie, property: keyof Movie) => {
    setMovies((prevState) =>
      prevState.map((obj) => {
        if (obj.id === movie.id) {
          const tmpObj = { ...obj }
          tmpObj[property.toString()] += 1
          return tmpObj
        }
        return obj
      })
    )
  }

  const decrementValue = (movie: Movie, property: keyof Movie) => {
    setMovies((prevState) =>
      prevState.map((obj) => {
        if (obj.id === movie.id) {
          const tmpObj = { ...obj }
          tmpObj[property.toString()] -= 1
          return tmpObj
        }
        return obj
      })
    )
  }

  const addMovie = (movie: Movie) => {
    addItemToList(setMovies, movie)
  }

  const removeMovies = (moviesToRemove: Movie[]) => {
    setMovies((prevState) =>
      prevState.filter((movie) => !moviesToRemove.find((movieToRemove) => movieToRemove.id === movie.id))
    )
  }

  const addLike = (movie: Movie) => {
    addItemToList(setLikedMovies, movie)
    incrementValue(movie, 'likes')
  }

  const addDislike = (movie: Movie) => {
    addItemToList(setDislikedMovies, movie)
    incrementValue(movie, 'dislikes')
  }

  const removeLike = (movie: Movie) => {
    removeItemFromList(setLikedMovies, movie.id)
    decrementValue(movie, 'likes')
  }

  const removeDislike = (movie: Movie) => {
    removeItemFromList(setDislikedMovies, movie.id)
    decrementValue(movie, 'dislikes')
  }

  const handleLikeMovieClick = (movie: Movie) => {
    if (isDisliked(movie)) {
      removeDislike(movie)
    }
    if (isLiked(movie)) {
      removeLike(movie)
      return
    }
    addLike(movie)
  }

  const handleDislikeMovieClick = (movie: Movie) => {
    if (isLiked(movie)) {
      removeLike(movie)
    }
    if (isDisliked(movie)) {
      removeDislike(movie)
      return
    }
    addDislike(movie)
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
    movies,
    handleDislikeMovieClick,
    handleLikeMovieClick,
    isDisliked,
    isError,
    isLiked,
    isLoading,
    moviesCount,
    removeMovies,
  }
}
