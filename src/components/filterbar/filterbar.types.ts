import { Movie } from 'types/movie'

export type FilterbarProps = {
  dropdownOptions: string[]
  removeAction: () => void
  items: Movie[]
  selectedItems: Movie[]
  updateSelectedItems: (movies: Movie[]) => void
  updateFilters: (filters: string[]) => void
  showRemoveButton: boolean
}
