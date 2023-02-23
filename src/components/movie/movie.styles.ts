import styled from 'styled-components'

export const MoviesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`

export const FilterbarWrapper = styled(MoviesWrapper)`
  gap: 8px;
`

export const ActionWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`

export const Selector = styled.div`
  display: flex;
  align-items: center;
  max-width: 168px;
  gap: 16px;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #d3d3d3;
  background: transparent;
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
