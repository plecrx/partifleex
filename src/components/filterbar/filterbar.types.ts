import { Movie } from 'types/movie'

export type FilterbarProps = {
  categories: string[]
  handleCategorySelectionChange: (selection: string[]) => void
  handleSelectAllChange: () => void
  removeAction: () => void
  selectAllChecked: boolean
  selectedMovies: Movie[]
  showRemoveButton: boolean
}
