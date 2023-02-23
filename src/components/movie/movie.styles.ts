import styled from 'styled-components'

export const MoviesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`

export const FilterbarWrapper = styled(MoviesWrapper)`
  justify-content: space-between;
  gap: 16px;
`

export const ActionWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`

export const Selector = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #d3d3d3;
  font-size: 16px;
  font-weight: 500;
  color: black;
  background: white;
  cursor: pointer;
`

export const CategoryTitle = styled.span`
  font-size: 24px;
  font-weight: bold;
`

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`
