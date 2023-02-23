export type DropdownOption = { value: string; label: string }

export type DropdownProps = {
  onSelectionChange: (newValue: string[]) => void
  options: string[]
}
