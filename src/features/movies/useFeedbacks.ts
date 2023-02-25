import { useState } from 'react'
import { Movie } from 'types/movie'

// Could have used a reducer instead...
export const useFeedbacks = (setState: (prevState) => void) => {
  const [likedMovies, setLikedMovies] = useState<Movie[]>([])
  const [dislikedMovies, setDislikedMovies] = useState<Movie[]>([])

  const isLiked = (movie: Movie): boolean => !!likedMovies.find((likedMovie: Movie) => likedMovie.id === movie.id)
  const isDisliked = (movie: Movie): boolean =>
    !!dislikedMovies.find((dislikedMovie: Movie) => dislikedMovie.id === movie.id)

  const incrementValue = (movie: Movie, property: keyof Movie) => {
    setState((prevState: Movie[]) =>
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
    setState((prevState: Movie[]) =>
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
  return {
    onDislikeMovie,
    onLikeMovie,
    isDisliked,
    isLiked,
  }
}
