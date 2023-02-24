import { TrashIcon } from '@heroicons/react/20/solid'
import { ButtonVariant } from 'components/button/button.types'
import { Button } from 'components/button/button.component'
import { Checkbox } from 'components/checkbox/checkbox.component'
import { Dropdown } from 'components/dropdown/dropdown.component'
import { FilterbarWrapper, CheckboxPanel, RowWrapper } from 'components/filterbar/filterbar.styles'
import { FilterbarProps } from 'components/filterbar/filterbar.types'
import React, { FC, useEffect, useState } from 'react'

export const FilterBar: FC<FilterbarProps> = ({
  dropdownOptions,
  removeAction,
  selectedItems,
  updateSelectedItems,
  updateFilters,
  items,
}) => {
  const [selectAllChecked, setSelectAllChecked] = useState<boolean>(false)

  const handleFilterChange = (selection: string[]) => {
    updateFilters(selection)
  }

  const handleSelectAllChange = () => {
    updateSelectedItems(selectedItems.length === items.length ? [] : items)
  }

  useEffect(() => {
    setSelectAllChecked(selectedItems.length === items.length && selectedItems.length !== 0)
  }, [updateSelectedItems, items.length, selectedItems])

  return (
    <FilterbarWrapper>
      <RowWrapper>
        <CheckboxPanel>
          <Checkbox isChecked={selectAllChecked} onChange={handleSelectAllChange} />
          Tout sélectionner
        </CheckboxPanel>
        <Dropdown options={dropdownOptions} onSelectionChange={handleFilterChange} />
      </RowWrapper>
      <RowWrapper>
        {!!selectedItems.length && (
          <Button variant={ButtonVariant.RED} onClick={removeAction}>
            <TrashIcon width={16} />
            Supprimer
          </Button>
        )}
        {/*
        <Button variant={ButtonVariant.GREEN} onClick={addAction}>
          <PlusIcon width={16} />
          Ajouter un film
        </Button>
      */}
      </RowWrapper>
    </FilterbarWrapper>
  )
}
