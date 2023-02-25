import styled from 'styled-components'

export const FeedbackButton = styled.div<{ color: string }>`
  color: ${({ color }) => color};
  cursor: pointer;
`

export const ActionWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`
