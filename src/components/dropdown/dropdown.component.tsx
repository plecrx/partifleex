import { Container, StyledSelect } from 'components/dropdown/dropdown.styles'
import { DropdownOption, DropdownProps } from 'components/dropdown/dropdown.types'
import React, { FC, useState } from 'react'

export const Dropdown: FC<DropdownProps> = ({ options, onSelectionChange }) => {
  const mappedOptions: DropdownOption[] = options.map((str) => ({ value: str, label: str }))
  const [selectedOptions, setSelectedOptions] = useState<DropdownOption[]>(mappedOptions)

  const handleSelectChange = (updatedOptions: DropdownOption[]) => {
    const selectionList = updatedOptions.map((updatedOption) => updatedOption.value)
    onSelectionChange(selectionList)
    setSelectedOptions(updatedOptions)
  }

  return (
    <Container>
      <StyledSelect
        classNamePrefix="react-select"
        defaultValue={selectedOptions}
        placeholder="Filtrer par catégorie"
        onChange={handleSelectChange}
        options={mappedOptions}
        isSearchable
        isMulti
      />
    </Container>
  )
}
