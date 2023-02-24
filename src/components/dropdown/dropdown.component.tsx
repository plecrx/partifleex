import { Container, StyledSelect } from 'components/dropdown/dropdown.styles'
import { DropdownOption, DropdownProps } from 'components/dropdown/dropdown.types'
import React, { FC, useEffect, useMemo, useState } from 'react'
import { mapDropdownOptions } from 'utils/helpers/dropdown/mapDropdownOptions'

export const Dropdown: FC<DropdownProps> = ({ options, onSelectionChange }) => {
  const mappedDropdownOptions = useMemo(() => mapDropdownOptions(options), [options])
  const [selectedOptions, setSelectedOptions] = useState(mappedDropdownOptions)

  const handleSelectChange = (updatedOptions: DropdownOption[]) => {
    const selectionList = updatedOptions.map(({ value }) => value)
    onSelectionChange(selectionList)
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
