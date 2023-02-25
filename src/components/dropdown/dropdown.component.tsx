import React, { FC, useEffect, useMemo, useState } from 'react'
import { mapDropdownOptions } from 'utils/helpers/dropdown/mapDropdownOptions'

import { Container, StyledSelect } from './dropdown.styles'
import { DropdownOption, DropdownProps } from './dropdown.types'

export const Dropdown: FC<DropdownProps> = ({ options, onSelectionChange }) => {
  const mappedDropdownOptions = useMemo(() => mapDropdownOptions(options), [options])
  const [selectedOptions, setSelectedOptions] = useState(mappedDropdownOptions)

  const handleSelectChange = (updatedOptions: DropdownOption[]) => {
    const selectionList = updatedOptions.map(({ value }) => value)
    onSelectionChange(selectionList)
    setSelectedOptions(updatedOptions)
  }

  useEffect(() => {
    setSelectedOptions(mappedDropdownOptions)
  }, [mappedDropdownOptions])

  return (
    <Container>
      <StyledSelect
        classNamePrefix="react-select"
        value={selectedOptions}
        placeholder="Filtrer par catégorie"
        onChange={handleSelectChange}
        options={mappedDropdownOptions}
        isSearchable
        isMulti
      />
    </Container>
  )
}
