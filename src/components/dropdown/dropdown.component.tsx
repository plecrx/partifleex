import { Container, StyledSelect } from 'components/dropdown/dropdown.styles'
import { DropdownOption, DropdownProps } from 'components/dropdown/dropdown.types'
import React, { FC, useState } from 'react'

export const Dropdown: FC<DropdownProps> = ({ options, onSelectionChange }) => {
  const [selectedOptions, setSelectedOptions] = useState(options)

  const handleSelectChange = (value: DropdownOption[]) => {
    const categoryList = value.map((stn) => stn.value)

    setSelectedOptions(value)
    onSelectionChange(categoryList)
  }

  return (
    <Container>
      <StyledSelect
        classNamePrefix="react-select"
        defaultValue={selectedOptions}
        placeholder="Filtrer par catégorie"
        onChange={handleSelectChange}
        options={options}
        isSearchable
        isMulti
      />
    </Container>
  )
}
