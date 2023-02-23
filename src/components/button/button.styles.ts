import { ButtonProps } from 'components/button/button.types'
import styled from 'styled-components'

export const Container = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-radius: 8px;
  background-color: ${({ variant }) => variant};
  color: white;
  border: 1px solid #d3d3d3;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`
