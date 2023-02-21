import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 280px;
  background: white;
  border-radius: 8px;
  box-sizing: border-box;
  border: 1px solid lightgray;
`;

export const CardBody = styled.div`
  padding: 24px 32px;
`;

export const Title = styled.div`
  color: red;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: lightgray;
  margin: 8px 0;
  min-height: 80px;
`;