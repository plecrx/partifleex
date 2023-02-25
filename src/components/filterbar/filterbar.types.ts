import { ReactElement } from 'react'

export type FilterbarProps = {
  dropdownOptions: string[]
  isSelectedAllChecked: boolean
  onSelectedAllChange: () => void
  onSelectionChange: (filters: string[]) => void
  actions: ReactElement
}
