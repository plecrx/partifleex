import { ButtonProps } from 'components/button/button.types'
import styled from 'styled-components'

export const Container = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border-radius: 8px;
  color: ${({ color }) => color};
  border: 1px solid #d3d3d3;
  background: transparent;
  cursor: pointer;
`
