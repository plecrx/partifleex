import styled from 'styled-components';

export const FeedbackButton = styled.div<{color: string}>`
  color: ${({color}) => color};
  cursor: pointer;
`