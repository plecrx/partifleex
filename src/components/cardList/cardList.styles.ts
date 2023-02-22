import styled from 'styled-components'

export const CardListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  padding: 0 96px;
`

export const CardListHeader = styled.div`
  margin-bottom: 24px;
`

export const CardListTitle = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 24px;
  color: red;
`

export const CardListSelector = styled.div`
  display: flex;
  align-items: center;
  max-width: 168px;
  gap: 16px;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #d3d3d3;
  background: transparent;
`

export const CardlistWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: 24px;
`
