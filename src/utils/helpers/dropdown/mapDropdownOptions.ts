import { DropdownOption } from 'components/dropdown/dropdown.types'

export const mapDropdownOptions = (options: string[]): DropdownOption[] =>
  options.map((str) => ({ value: str, label: str }))
