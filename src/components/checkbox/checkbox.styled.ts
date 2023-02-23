import { CheckIcon } from '@heroicons/react/20/solid'
import styled from 'styled-components'

export const CheckboxContainer = styled.span`
  display: inline-block;
  height: 24px;
  position: relative;
  vertical-align: middle;
  width: 24px;
`

export const CheckboxInput = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  border: 2px solid #d3d3d3;
  border-radius: 4px;
  height: inherit;
  margin: 0;
  outline-offset: 0;
  padding: 0;
  transition: background-color 150ms ease-in-out 0s, border-color 150ms ease-in-out 0s;
  width: inherit;
  &:checked {
    background-color: #ff5047;
    border-color: #ff5047;
  }
  &:disabled {
    cursor: not-allowed;
  }
  &:enabled {
    cursor: pointer;
  }
  &:checked:focus {
    outline: 1px dashed #ff5047;
  }
  &:focus {
    outline: 1px dashed #d3d3d3;
  }
`

export const CheckboxSymbol = styled(CheckIcon)`
  fill: white;
  left: 0;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: visibility 0s linear 150ms;
  visibility: hidden;
  ${CheckboxInput}:checked + & {
    transition: visibility 0s linear 0s;
    visibility: visible;
  }
`
