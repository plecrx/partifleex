import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 280px;
  background: white;
  border-radius: 8px;
  box-sizing: border-box;
  border: 1px solid lightgray;
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
`

export const CardHeaderAction = styled.div`
  align-self: flex-start;
`

export const Title = styled.div`
  color: red;
  text-overflow: ellipsis;
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

export const RemoveButton = styled.div`
  width: 16px;
  height: 16px;
  cursor: pointer;
`
