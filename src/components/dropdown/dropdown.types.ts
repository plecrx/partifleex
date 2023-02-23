export type DropdownOption = { value: string; label: string }

export type DropdownProps = {
  options: DropdownOption[]
  onSelectionChange: (newValue: string[]) => void
}
