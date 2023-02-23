import styled from 'styled-components'

export const CardContainer = styled.div`
  min-width: 272px;
  background: white;
  border-radius: 1rem;
  box-sizing: border-box;
  box-shadow: 0 0 20px 2px rgba(27, 6, 50, 0.1);
  transition: 0.3s ease-in-out;
  :hover {
    transform: translateY(-4px);
    box-shadow: 0 5px 20px 2px rgba(27, 6, 50, 0.2);
  }
`

export const CardBody = styled.div`
  padding: 24px 32px;
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

export const CardHeaderLabel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 16px;
`

export const CardHeaderAction = styled.div`
  align-self: flex-start;
`

export const Title = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  color: black;
  text-overflow: ellipsis;
  font-family: 'SF Pro Text', sans-serif;
  font-weight: 700;
  line-height: 1.1;
  overflow: hidden;
  white-space: nowrap;
`

export const Subtitle = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  color: lightgray;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: lightgray;
  margin: 8px 0;
  min-height: 80px;
  gap: 24px;
`
