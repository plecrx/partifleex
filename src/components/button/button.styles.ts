import { ButtonProps } from 'components/button/button.types'
import styled from 'styled-components'

export const Container = styled.button<ButtonProps>`
  display: flex;
  gap: 8px;
  padding: 8px;
  border-radius: 8px;
  color: ${({ color }) => color};
  border: 1px solid red;
  background: transparent;
  cursor: pointer;
`
