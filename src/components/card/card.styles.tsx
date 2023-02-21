import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 280px;
  background: white;
  border-radius: 8px;
  box-sizing: border-box;
  border: 1px solid lightgray;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 160px;
  border-bottom: 1px solid green;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
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
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: lightgray;
  margin: 8px 0;
  min-height: 80px;
`;

export const ActionWrapper = styled.div`
  display: grid;
  margin-top: 24px;
  grid-auto-columns: 1fr 48px;
  grid-gap: 24px;
`;
export const SecondaryActionWraper = styled.div`
  grid-column: 1;
  & > button {
    width: 100%;
  }
`;

export const PrimaryActionWraper = styled.div`
  grid-column: 2;
`;