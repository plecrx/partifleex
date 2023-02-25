import { Checkbox } from 'components/checkbox/checkbox.component'
import { Dropdown } from 'components/dropdown/dropdown.component'
import { Container, CheckboxPanel, RowWrapper } from 'components/filterbar/filterbar.styles'
import { FilterbarProps } from 'components/filterbar/filterbar.types'
import React, { FC } from 'react'

export const Filterbar: FC<FilterbarProps> = ({
  dropdownOptions,
  onSelectedAllChange,
  onSelectionChange,
  isSelectedAllChecked,
  actions,
}) => (
  <Container>
    <RowWrapper>
      <CheckboxPanel>
        <Checkbox isChecked={isSelectedAllChecked} onChange={onSelectedAllChange} />
        Tout sélectionner
      </CheckboxPanel>
      <Dropdown options={dropdownOptions} onSelectionChange={onSelectionChange} />
    </RowWrapper>
    <RowWrapper>{actions}</RowWrapper>
  </Container>
)
