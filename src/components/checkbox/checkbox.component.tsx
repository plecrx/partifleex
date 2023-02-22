import { CheckboxContainer, CheckboxInput, CheckboxSymbol } from 'components/checkbox/checkbox.styled'
import { CheckboxProps } from 'components/checkbox/checkbox.types'
import React from 'react'

export const Checkbox = ({ id, isChecked, onChange, ...props }: CheckboxProps) => (
  <CheckboxContainer {...props}>
    <CheckboxInput checked={isChecked} id={id} onChange={onChange} {...props} />
    <CheckboxSymbol />
  </CheckboxContainer>
)
