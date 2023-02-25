import React, { FC } from 'react'
import { Checkbox } from 'components/checkbox'
import { Dropdown } from 'components/dropdown'

import { FilterbarProps } from './filterbar.types'
import { Container, CheckboxPanel, RowWrapper } from './filterbar.styles'

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
