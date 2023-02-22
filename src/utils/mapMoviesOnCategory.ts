import { Movie } from 'types/movie'

export const mapMoviesOnCategory = (
  movies: Movie[]
): Record<string, Movie[]> => {
  const categoryMap = movies.reduce<Record<string, Movie[]>>(
    (map, { category }) => {
      const tmpMap = map
      tmpMap[category] = []
      return tmpMap
    },
    {}
  )
  movies.forEach((movie) => {
    const { category } = movie
    categoryMap[category] = [...categoryMap[category], movie]
  })

  return categoryMap
}
