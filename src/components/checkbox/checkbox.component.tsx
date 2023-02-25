import React from 'react'

import { CheckboxContainer, CheckboxInput, CheckboxSymbol } from './checkbox.styled'
import { CheckboxProps } from './checkbox.types'

export const Checkbox = ({ id, isChecked, onChange, ...props }: CheckboxProps) => (
  <CheckboxContainer {...props}>
    <CheckboxInput checked={isChecked} id={id} onChange={onChange} {...props} />
    <CheckboxSymbol />
  </CheckboxContainer>
)
