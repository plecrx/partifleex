import styled from 'styled-components'

import { GaugeItemProps } from './gauge.types'

export const GaugeWrapper = styled.div`
  display: flex;
`

export const GaugeLabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const GaugeItem = styled.div<GaugeItemProps>`
  width: ${({ ratio }) => `${ratio}%`};
  border: ${({ color }) => `2px solid ${color}`};
  border-top-left-radius: ${({ isFirst }) => (isFirst ? '24px' : '0px')};
  border-bottom-left-radius: ${({ isFirst }) => (isFirst ? '24px' : '0px')};
  border-top-right-radius: ${({ isLast }) => (isLast ? '24px' : '0px')};
  border-bottom-right-radius: ${({ isLast }) => (isLast ? '24px' : '0px')};
`
