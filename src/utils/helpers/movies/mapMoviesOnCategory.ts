import { Movie, MovieMap } from 'types/movie';

export const mapMoviesOnCategory = (movies: Movie[]): MovieMap => {
  const categoryMap = movies.reduce<MovieMap>((map, { category }) => {
    const tmpMap = map
    tmpMap[category] = []
    return tmpMap
  }, {})
  movies.forEach((movie) => {
    const { category } = movie
    categoryMap[category] = [...categoryMap[category], movie]
  })

  return categoryMap
}
