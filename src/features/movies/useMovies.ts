import { movies$ } from 'data/movies'
import { useEffect, useState } from 'react'
import { Movie } from 'types/movie'

export const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [likedMovies, setLikedMovies] = useState<Movie[]>([])
  const [dislikedMovies, setDislikedMovies] = useState<Movie[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isError, setIsError] = useState<boolean>(false)

  const isLiked = (movie: Movie): boolean => !!likedMovies.find((likedMovie: Movie) => likedMovie.id === movie.id)
  const isDisliked = (movie: Movie): boolean =>
    !!dislikedMovies.find((dislikedMovie: Movie) => dislikedMovie.id === movie.id)

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
    setMovies((prevState: Movie[]) => [...prevState, movie])
  }

  const removeMovies = (moviesToRemove: Movie[]) => {
    setMovies((prevState) =>
      prevState.filter((movie) => !moviesToRemove.find((movieToRemove) => movieToRemove.id === movie.id))
    )
  }

  const addLike = (movie: Movie) => {
    setLikedMovies((prevState: Movie[]) => [...prevState, movie])
    incrementValue(movie, 'likes')
  }

  const addDislike = (movie: Movie) => {
    setDislikedMovies((prevState: Movie[]) => [...prevState, movie])
    incrementValue(movie, 'dislikes')
  }

  const removeLike = (movie: Movie) => {
    setLikedMovies((prevState: Movie[]) => prevState.filter((mv) => mv.id !== movie.id))
    decrementValue(movie, 'likes')
  }

  const removeDislike = (movie: Movie) => {
    setDislikedMovies((prevState: Movie[]) => prevState.filter((mv) => mv.id !== movie.id))
    decrementValue(movie, 'dislikes')
  }

  const onLikeMovie = (movie: Movie) => {
    if (isDisliked(movie)) {
      removeDislike(movie)
    }
    if (isLiked(movie)) {
      removeLike(movie)
      return
    }
    addLike(movie)
  }

  const onDislikeMovie = (movie: Movie) => {
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
    onDislikeMovie,
    onLikeMovie,
    isDisliked,
    isError,
    isLiked,
    isLoading,
    movies,
    removeMovies,
  }
}
