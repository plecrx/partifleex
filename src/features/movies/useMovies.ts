import { movies$ } from 'data/movies'
import { useEffect, useState } from 'react'
import { Movie } from 'types/movie'
import { mapMoviesOnCategory } from 'utils/helpers/movies/mapMoviesOnCategory'

export const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [moviesCount, setMoviesCount] = useState<number>(0)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isError, setIsError] = useState<boolean>(false)
  const [categoriesMap, setCategoriesMap] = useState<Record<string, Movie[]>>({})
  const [categories, setCategories] = useState<string[]>([])
  const [filteredCategoriesMap, setFilteredCategoriesMap] = useState<Record<string, Movie[]>>(categoriesMap)

  const [selectedMovies, setSelectedMovies] = useState<Movie[]>([])
  const [likedMovies, setLikedMovies] = useState<Movie[]>([])
  const [dislikedMovies, setDislikedMovies] = useState<Movie[]>([])

  const isLiked = (movie: Movie): boolean => !!likedMovies.find((likedMovie: Movie) => likedMovie.id === movie.id)
  const isDisliked = (movie: Movie): boolean =>
    !!dislikedMovies.find((dislikedMovie: Movie) => dislikedMovie.id === movie.id)
  const isSelected = (movie: Movie): boolean =>
    !!selectedMovies.find((selectedMovie: Movie) => selectedMovie.id === movie.id)

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

  const handleSelectMovie = (movie: Movie) => {
    if (isSelected(movie)) {
      removeItemFromList(setSelectedMovies, movie.id)
      return
    }
    addItemToList(setSelectedMovies, movie)
  }

  const handleSelectAllChange = () => {
    if (selectedMovies.length === moviesCount) {
      setSelectedMovies([])
      return
    }
    setSelectedMovies(movies)
  }

  const addMovie = (movie: Movie) => {
    addItemToList(setMovies, movie)
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
          const dataCategoriesMap = mapMoviesOnCategory(data as Movie[])
          setMovies(data as Movie[])
          setMoviesCount((data as Movie[]).length)
          setCategoriesMap(dataCategoriesMap)
          setCategories(Object.keys(dataCategoriesMap))
          setFilteredCategoriesMap(dataCategoriesMap)
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
    categories,
    categoriesMap,
    filteredCategoriesMap,
    handleDislikeMovieClick,
    handleLikeMovieClick,
    handleSelectAllChange,
    handleSelectMovie,
    isDisliked,
    isError,
    isLiked,
    isLoading,
    isSelected,
    moviesCount,
    removeMovies,
    selectedMovies,
    setFilteredCategoriesMap,
  }
}
