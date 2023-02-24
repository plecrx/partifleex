import { MovieMap } from 'types/movie'

export const getCategoriesFromMoviesMap = (moviesMap: MovieMap) => Object.entries(moviesMap).map(([category]) => category)
